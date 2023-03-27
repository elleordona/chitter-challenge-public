// Profile Component

// imports

import authService from '../utils/auth.service.js';

const Profile = ({ logOut }) => {
	const currentUser = authService.getCurrentUser();

	return (
		<div className="container">
			{!currentUser && <p>you are not logged in</p>}
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
