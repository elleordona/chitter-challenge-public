// Profile Component

// imports

import authService from '../utils/auth.service.js';

const Profile = ({ setUser }) => {
	const currentUser = authService.getCurrentUser();

	return (
		<div className="container">
			<>
				<h2>Welcome to your profile, {currentUser.name}</h2>
				<br />
				<button onClick={() => setUser({})} className="btn btn-primary">
					Log Out
				</button>
			</>
		</div>
	);
};

export default Profile;
