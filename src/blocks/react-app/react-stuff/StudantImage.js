import React from 'react';

export default function StudantImage({ studant }) {
	const imageUrl = studant.acf.studant_portrait;
	return (
		<div>
			{imageUrl ? (
				<img src={imageUrl} alt="studant Portrait" className="studant-portrait" />
			) : (
				<div className="no-image">No Image Available</div>
			)}
		</div>
	);
}
