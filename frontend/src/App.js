import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// API calls
import { getPeeps, submitPeep } from './asyncFunctions/peepAPICalls.js';

// utils

// components
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Feed from './components/Feed/Feed.jsx';
import Alert from './components/utils/Alert.jsx';
import PeepForm from './components/PeepForm/PeepForm.jsx';

function App() {
	// set variables to state
	const [peeps, setPeeps] = useState([]);
	const [error, setError] = useState({ type: ``, message: `` });
	const [createUpdateStatus, setCreateUpdateStatus] = useState(``);

	// handle errors when getting data from database
	const getPeepsHandler = async () => {
		const externalDataCallResult = await getPeeps();

		if (externalDataCallResult?.error) {
			const errorObject = { ...externalDataCallResult.error };
			errorObject.message = `There was a problem getting the Peeps: ${externalDataCallResult.error.message}`;
			setError(errorObject);
		}

		const peeps = externalDataCallResult?.peeps ? externalDataCallResult.peeps : [];

		setPeeps(peeps);
	};

	useEffect(() => {
		getPeepsHandler();
	}, []);

	// handle errors when posting data to database
	const submitPeepHandler = async (peep) => {
		const externalDataCallResult = await submitPeep(peep);
		if (externalDataCallResult?.error) {
			const errorObject = { ...externalDataCallResult.error };
			errorObject.message = `There was a problem posting the peep: ${externalDataCallResult.error.message}`;

			return setError(errorObject);
		}
		setCreateUpdateStatus(`Peep Posted`);
		getPeepsHandler();
	};

	return (
		<div className="App">
			{error.type && <Alert handleClose={() => setError({ type: ``, message: `` })} message={error.message} />}
			{createUpdateStatus && <Alert handleClose={() => setCreateUpdateStatus(``)} message={createUpdateStatus} />}
			<div className="sidenav">
				<Sidebar />
			</div>
			<div className="main">
				<Routes>
					<Route path="/" element={<Feed data={{ peeps, error: error.message }} />} />
					<Route path="/add" element={<PeepForm submitAction={submitPeepHandler} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
