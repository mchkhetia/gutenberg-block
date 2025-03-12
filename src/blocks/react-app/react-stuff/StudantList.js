import React from 'react';
import StudantCard from './StudantCard';

export default function StudantList({ students }) {
	return (
		<div className="studant-list">
			{studants.map((student) => (
				<StudantCard key={student.id} studant={studant} />
			))}
		</div>
	);
}
