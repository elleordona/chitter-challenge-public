// ComposePeep component

// imports
import PropTypes from 'prop-types';
import { useState } from 'react';
import DateCreated from '../utils/DateCreated';

const ComposePeep = ({ submitAction, peep }) => {
	// set variables to state
	const [username, setUsername] = useState(``);
	const [peepBody, setPeepBody] = useState(``);
	const [date, setDate] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		submitAction(peep?._id, username, peepBody, date);
		setUsername(``);
		setPeepBody(``);
		setDate(null);
	};

	return (
		<form onSubmit={handleSubmit} className="w-75 text-center mx-auto">
			<div className="form-group">
				<label htmlFor="peepBody">Write your Peep here:</label>
				<input type="text" name="peepBody" placeholder="What's Happening?" className="form-control" value={peepBody} onChange={(event) => setPeepBody(event.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="date">Date: {<DateCreated updateDateCreated={(dateCreated) => setDate(dateCreated)} />}</label>
			</div>
			<div className="form-group">
				<input type="submit" value="Submit" className={`btn ${!peepBody ? `btn-danger` : `btn-primary`}`} disabled={!peepBody} />
			</div>
		</form>
	);
};

ComposePeep.propTypes = {
	submitAction: PropTypes.func.isRequired,
	peep: PropTypes.shape({
		_id: PropTypes.string,
		username: PropTypes.string,
		peepBody: PropTypes.string,
		date: PropTypes.string,
	}),
};

export default ComposePeep;
