// component for Feed

// imports
import React from 'react';

const Feed = ({ allPeeps }) => {
	const peepList = allPeeps.peeps.map((peep) => (
		<li key={peep.id} className="card text-center w-75 mx-auto">
			<p className="h5 card-title">{peep.username}</p>
			<p className="fs-6 card-body">{peep.peepBody}</p>
		</li>
	));

	return (
		<>
			<p className="h2 text-center">Your Feed</p>
			<hr />
			<ul title="feed">
				{/* show loading info while data length is zero */}
				{allPeeps.peeps.length === 0 && (
					<li className="h5" key="loading">
						Peeps are loading...
					</li>
				)}
				{/* show the list of peeps if there are any */}
				{allPeeps.peeps.length > 0 && peepList}
			</ul>
		</>
	);
};

export default Feed;
