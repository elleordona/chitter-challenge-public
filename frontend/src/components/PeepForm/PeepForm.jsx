// ComposePeep component

// imports
import PropTypes from 'prop-types';
import { useState } from 'react';
import authService from '../utils/auth.service';
import DateCreated from '../utils/DateCreated';

const PeepForm = ({ submitAction, peep }) => {
	// set variables to state
	const [username, setUsername] = useState(``);
	const [peepBody, setPeepBody] = useState(``);
	const [date, setDate] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		// set the users username to the peep if they are logged in
		const username = currentUser?.username ? currentUser.username : `Unregistered User`;

		submitAction(username, peepBody, date, peep?._id);
		setUsername(``);
		setPeepBody(``);
		setDate(null);
	};

	const currentUser = authService.getCurrentUser();

	return (
		<form onSubmit={handleSubmit} className="w-75 text-center mx-auto">
			{currentUser && (
				<div className="form-group">
					<p>Hello {currentUser.username}</p>
					<input type="text" name="username" hidden placeholder={currentUser.username} value={username} className="form-control" readOnly />
				</div>
			)}
			<div className="form-group">
				<label htmlFor="peepBody">Write your Peep here:</label>
				<input type="text" name="peepBody" placeholder="What's Happening?" className="form-control" value={peepBody} onChange={(event) => setPeepBody(event.target.value)} />
			</div>
			<div className="form-group">
				<label title="date">Date: {<DateCreated updateDateCreated={(dateCreated) => setDate(dateCreated)} />}</label>
			</div>
			<div className="form-group">
				<input type="submit" value="Submit" className={`btn ${!peepBody ? `btn-danger` : `btn-primary`}`} disabled={!peepBody} />
			</div>
		</form>
	);
};

PeepForm.propTypes = {
	submitAction: PropTypes.func.isRequired,
	peep: PropTypes.shape({
		_id: PropTypes.string,
		username: PropTypes.string,
		peepBody: PropTypes.string,
		date: PropTypes.string,
	}),
};

export default PeepForm;
