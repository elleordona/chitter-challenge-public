// Login Component

// imports
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import authService from '../utils/auth.service.js';

const Login = ({ setUser: setLoginUser }) => {
	// set variables to state
	const [email, setEmail] = useState(``);
	const [password, setPassword] = useState(``);
	const [setLoading] = useState(false);
	const [setMessage] = useState(``);

	const navigate = useNavigate();

	const onChangeEmail = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);
	};

	const onChangePassword = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
	};

	const loginUser = async (e) => {
		e.preventDefault();
		const login = await authService.login(email, password);
		if (localStorage.getItem(`user`)) {
			navigate(`/`);
			window.location.reload(false);
		} else {
			console.dir(login);
			setMessage(login.error);
			setLoading(true);
		}
	};

	return (
		<div className="card w-50 mx-auto text-center justify-content-center p-4">
			<h3>Log In to your Account</h3>
			<form onSubmit={loginUser}>
				<input type="email" name="email" id="email" value={email} onChange={onChangeEmail} placeholder="Enter your Email" className="mb-2 form-control" />
				<br />
				<input type="password" name="password" id="password" value={password} onChange={onChangePassword} placeholder="Enter you Password" className="mb-2 form-control" />
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
