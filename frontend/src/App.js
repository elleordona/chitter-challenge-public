import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// API calls
import { getPeeps, submitPeep } from './asyncFunctions/peepAPICalls.js';

// utils
import authService from './components/utils/auth.service.js';

// components
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Feed from './components/Feed/Feed.jsx';
import Alert from './components/utils/Alert.jsx';
import PeepSubmit from './components/PeepSubmit/PeepSubmit.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
	// set variables to state
	const [peeps, setPeeps] = useState([]);
	const [error, setError] = useState({ type: ``, message: `` });
	const [createUpdateStatus, setCreateUpdateStatus] = useState(``);
	const [setUser] = useState({});

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

	const logOut = () => {
		authService.logout();
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
					<Route path="/add" element={<PeepSubmit submitAction={submitPeepHandler} />} />
					<Route path="/api/auth/register" element={<Register />} />
					<Route path="/api/auth/login" element={<Login setUser={setUser} />} />
					<Route path="/profile" element={<Profile logOut={logOut} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
