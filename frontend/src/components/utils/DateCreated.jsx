// DateCreated util

// imports
import { useEffect, useState } from 'react';

const DateCreated = ({ updateDateCreated, dateCreated }) => {
	// set date to state
	const [date, setDate] = useState(dateCreated);

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	});

	useEffect(() => {
		updateDateCreated(date);
	}, [updateDateCreated, date]);

	return <span data-testid="dateCreated">{`${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`}</span>;
};

DateCreated.defaultProps = {
	dateCreated: new Date(),
};

export default DateCreated;
