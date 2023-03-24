import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// API calls
import { getPeeps } from './asyncFunctions/peepAPICalls.js';

// utils

// components
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Feed from './components/Feed/Feed.jsx';

function App() {
	// set data, error to state
	const [peeps, setPeeps] = useState([]);
	const [error, setError] = useState({ type: ``, message: `` });

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

	return (
		<div className="App">
			<div className="sidenav">
				<Sidebar />
			</div>
			<div className="main">
				<Routes>
					<Route path="/" element={<Feed data={{ peeps, error: error.message }} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
