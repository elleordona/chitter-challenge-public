import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
	return (
		<Router>
			<div className="App">
				<Sidebar />
			</div>
		</Router>
	);
}

export default App;
