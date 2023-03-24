import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Feed from './components/Feed/Feed';

// sample data
import sampleData from './samplePeeps.json';

const samplePeeps = JSON.parse(JSON.stringify(sampleData));

function App() {
	return (
		<div className="App">
			<div className="sidenav">
				<Sidebar />
			</div>
			<div className="main">
				<Routes>
					<Route path="/" element={<Feed allPeeps={samplePeeps} className="feed" />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
