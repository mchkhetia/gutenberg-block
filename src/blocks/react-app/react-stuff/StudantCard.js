import React from 'react';
import StudantImage from './StudantImage';

export default function StudantCard({ studant }) {

	return (
		<div className="studant-card">
			<StudantImage studant={studant} />
			<h2>{studant.title.rendered}</h2>
			<p><strong>Role:</strong> {studant.acf.studant_role}</p>
			<p><strong>Email:</strong> {studant.acf.studant_email}</p>
			<p><strong>Phone:</strong> {studant.acf.studant_phone}</p>
			{studant.acf.studant_portrait && (
				<img src={studant.acf.studant_portrait} alt="studant Portrait" className="studant-portrait" />
			)}
		</div>
	);
}
