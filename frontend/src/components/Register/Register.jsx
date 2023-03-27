// Register Component

// imports
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import authService from '../utils/auth.service.js';

const Register = () => {
	// set variables to state
	const [user, setUser] = useState({
		name: ``,
		username: ``,
		email: ``,
		password: ``,
	});
	const [submitted, setSubmitted] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (submitted) navigate('/');
	}, [submitted, navigate]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const registerUser = async (e) => {
		e.preventDefault();
		const { name, username, email, password } = user;
		if (name && username && email && password) {
			authService.register(name, username, email, password);
			setSubmitted(true);
			alert(`User Registered Successfully`);
			setUser({ name: ``, username: ``, email: ``, password: `` });
			return;
		}
		alert(`Invalid Input`);
	};

	return (
		<div className="card w-50 mx-auto text-center justify-content-center p-4">
			<h3>Create New Account</h3>
			<p>
				Already have an account?
				<br />
				<Link to="/api/auth/login">Log In Here</Link>
			</p>
			<form onSubmit={registerUser} className="text-center mb-3">
				<input type="text" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Enter Your Full Name here" className="mb-2 form-control" />
				<br />
				<input type="text" name="username" id="username" value={user.username} onChange={handleChange} placeholder="Enter a Username here" className="mb-2 form-control" />
				<br />
				<input type="email" name="email" id="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email here" className="mb-2 form-control" />
				<br />
				<input type="password" name="password" id="password" value={user.password} onChange={handleChange} placeholder="Enter a password here" className="mb-2 form-control" />
				<br />
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>
		</div>
	);
};
export default Register;
