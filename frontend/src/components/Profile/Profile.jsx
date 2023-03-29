// Profile Component

// imports
import { Link } from 'react-router-dom';
import authService from '../utils/auth.service.js';
import Button from 'react-bootstrap/Button';

const Profile = ({ logOut }) => {
	const currentUser = authService.getCurrentUser();

	return (
		<div className="container">
			{!currentUser && (
				<>
					<h3>You are not logged in</h3>
					<p>You cannot view a profile without being logged in</p>
					<Link to="/api/auth/login">Click here to Login</Link>
				</>
			)}
			{currentUser && (
				<>
					<h2>Welcome to your profile, {currentUser.name}</h2>
					<br />
					<p>Your Username: {currentUser.username}</p>
					<p>Your email: {currentUser.email}</p>
					{/* <button onClick={logOut} className="btn btn-primary">
						Log Out
					</button> */}
					<Button variant="secondary" onClick={logOut}>
						Log Out
					</Button>
				</>
			)}
		</div>
	);
};

export default Profile;
