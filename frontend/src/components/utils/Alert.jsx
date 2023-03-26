// Alert Component

// imports
import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ handleClose, message }) => {
	const showHideClassName = message ? `modal display-block` : `modal display-none`;

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<h3>Chitter Information</h3>
				<p>{message}</p>
				<button className="btn btn-primary" onClick={handleClose}>
					Close
				</button>
			</section>
		</div>
	);
};

Alert.propTypes = {
	handleClose: PropTypes.func.isRequired,
	message: PropTypes.string,
};

export default Alert;
