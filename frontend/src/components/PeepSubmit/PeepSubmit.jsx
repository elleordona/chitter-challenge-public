// PeepForm Component

// imports
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

// components
import PeepForm from '../PeepForm/PeepForm.jsx';
import PeepModel from '../utils/peep.model.js';
import Alert from '../utils/Alert.jsx';

const PeepSubmit = ({ submitAction, currentUser }) => {
	// set variable to state
	const [peep, setPeep] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const navigate = useNavigate();
	const { _id } = useParams();

	useEffect(() => {
		if (submitted) navigate('/');
	}, [submitted, navigate]);

	const submitPeep = (peepBody, date) => {
		const peepToSubmit = new PeepModel(currentUser.username, peepBody, new Date(date).toISOString(), _id);
		console.log(peepToSubmit);
		submitAction(peepToSubmit);
		setSubmitted(true);
	};

	return (
		<>
			{peep?.error && <Alert handleClose={() => setPeep({})} message={peep.error} />}
			<PeepForm submitAction={submitPeep} peep={peep?.error ? {} : peep} currentUser={currentUser} />
		</>
	);
};

PeepSubmit.propTypes = {
	submitAction: PropTypes.func.isRequired,
	peeps: PropTypes.arrayOf(
		PropTypes.exact({
			_id: PropTypes.string,
			username: PropTypes.string,
			peepBody: PropTypes.string,
			date: PropTypes.string,
		})
	),
};

export default PeepSubmit;
