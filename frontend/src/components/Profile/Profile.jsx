// Profile Component

// imports
import { Link } from 'react-router-dom';
import authService from '../utils/auth.service.js';

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
					<button onClick={logOut} className="btn btn-primary">
						Log Out
					</button>
				</>
			)}
		</div>
	);
};

export default Profile;
