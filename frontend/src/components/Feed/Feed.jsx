// component for Feed

// imports
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';

const Feed = ({ data }) => {
	// set dataStatus to state
	const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Peeps are loading...` });

	// load in data after component is rendered
	useEffect(() => {
		const { error } = data;
		if (error?.length) {
			return setDataStatus({ name: `error`, message: error });
		}
		setDataStatus({ name: `loading`, message: `Peeps are loading...` });
	}, [data]);

	// function to create the list of peeps
	const populateList = () => {
		const { peeps } = data;
		if (peeps?.length > 0) {
			const sortedPeeps = peeps
				.sort((a, b) => {
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				})
				.reverse();
			const peepList = sortedPeeps.map((currentPeep) => {
				const peepDate = new Date(currentPeep.date);
				const date = peepDate.toLocaleDateString();
				const time = peepDate.toLocaleTimeString();
				return (
					<li key={currentPeep._id} className="card text-center w-50 mx-auto">
						<p className="h5 card-title">{currentPeep.username}</p>
						<p className="fs-6 card-subtitle text-muted" role="time">{`${date}	${time}`}</p>
						<p className="fs-6 card-body">{currentPeep.peepBody}</p>
					</li>
				);
			});
			return peepList;
		}

		return (
			<li key={dataStatus.name} className="text-center">
				{dataStatus.message}
			</li>
		);
	};

	return (
		<>
			<p className="h2 text-center">Your Feed</p>
			<hr />
			<ul title="feed">{populateList()}</ul>
		</>
	);
};

Feed.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.exact({
			peeps: PropTypes.arrayOf(
				PropTypes.shape({
					_id: PropTypes.string,
					username: PropTypes.string,
					peepBody: PropTypes.string,
					date: PropTypes.string,
				})
			),
			error: PropTypes.string,
		}),
	]),
};

export default Feed;
