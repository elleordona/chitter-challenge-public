// ComposePeep component

// imports
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../utils/auth.service';
import DateCreated from '../utils/DateCreated';

const PeepForm = ({ submitAction, peep }) => {
	// set variables to state
	const [username, setUsername] = useState(``);
	const [peepBody, setPeepBody] = useState(``);
	const [date, setDate] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		submitAction(username, peepBody, date, peep?._id);
		setUsername(``);
		setPeepBody(``);
		setDate(null);
	};

	const currentUser = authService.getCurrentUser();

	return (
		<div className="container">
			{currentUser && (
				<form onSubmit={handleSubmit} className="w-75 text-center mx-auto">
					<div className="form-group">
						<p>Hello {currentUser.username}</p>
					</div>
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
			)}
			{!currentUser && (
				<>
					<h3>You are not logged in</h3>
					<p>You cannot post a peep without being logged in</p>
					<Link to="/api/auth/login">Click here to Login</Link>
				</>
			)}
		</div>
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
