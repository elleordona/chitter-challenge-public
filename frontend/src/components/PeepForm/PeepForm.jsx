// ComposePeep component

// imports
import PropTypes from 'prop-types';
import { useState } from 'react';
import DateCreated from '../utils/DateCreated';

const PeepForm = ({ submitAction, peep, currentUser }) => {
	// set variables to state
	const [peepBody, setPeepBody] = useState(``);
	const [date, setDate] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		submitAction(peepBody, date, peep?._id);
		setPeepBody(``);
		setDate(null);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="card w-75 text-center mx-auto p-4">
				<div className="form-group">
					<h5>Hello, {currentUser.username}</h5>
				</div>
				<div className="form-group">
					<label htmlFor="peepBody">Write your Peep here:</label>
					<input type="text" name="peepBody" placeholder="What's Happening?" className="form-control m-2" value={peepBody} onChange={(event) => setPeepBody(event.target.value)} />
				</div>
				<div className="form-group">
					<label title="date" className="m-2">
						Date: {<DateCreated updateDateCreated={(dateCreated) => setDate(dateCreated)} />}
					</label>
				</div>
				<div className="form-group">
					<input type="submit" value="Submit" className={`btn ${!peepBody ? `btn-danger` : `btn-primary`}`} disabled={!peepBody} />
				</div>
			</form>
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
