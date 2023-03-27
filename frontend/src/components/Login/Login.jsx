// Login Component

// imports
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import authService from '../utils/auth.service.js';

const Login = ({ setUser: setLoginUser }) => {
	// set variables to state
	const [user, setUser] = useState({
		email: ``,
		password: ``,
	});
	const [loggedIn, setLoggedIn] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (loggedIn) navigate('/');
	}, [loggedIn, navigate]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const loginUser = async (e) => {
		e.preventDefault();
		const { email, password } = user;
		const loggedInUser = authService.login(email, password);
		alert(`You are logged in`);
		setUser({ email: ``, password: `` });
		setLoggedIn(loggedInUser ? true : false);
	};

	return (
		<div className="card w-50 mx-auto text-center justify-content-center p-4">
			<h3>Log In to your Account</h3>
			<form onSubmit={loginUser}>
				<input type="email" name="email" id="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" className="mb-2 form-control" />
				<br />
				<input type="password" name="password" id="password" value={user.password} onChange={handleChange} placeholder="Enter you Password" className="mb-2 form-control" />
				<br />
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
			<p>Don't have an account?</p>
			<br />
			<Link to="/api/auth/register">Register Here</Link>
		</div>
	);
};

export default Login;
