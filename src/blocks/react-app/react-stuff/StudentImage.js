import React from 'react';

export default function studentImage({ student }) {
	const imageUrl = student.acf.student_portrait;
	return (
		<div>
			{imageUrl ? (
				<img src={imageUrl} alt="student Portrait" className="student-portrait" />
			) : (
				<div className="no-image">No Image Available</div>
			)}
		</div>
	);
}
