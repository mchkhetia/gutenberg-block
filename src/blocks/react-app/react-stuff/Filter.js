import React from 'react';

export default function Filter({ filter, setFilter }) {
	return (
		<div className="filter-container">
			<input
				className="filter-input"
				type="text"
				placeholder="Role"
				value={filter.student_role}
				onChange={(e) => setFilter({ ...filter, student_role: e.target.value })}
			/>
			<input
				className="filter-input"
				type="text"
				placeholder="Email"
				value={filter.student_email}
				onChange={(e) => setFilter({ ...filter, student_email: e.target.value })}
			/>
			<input
				className="filter-input"
				type="text"
				placeholder="Phone"
				value={filter.student_phone}
				onChange={(e) => setFilter({ ...filter, student_phone: e.target.value })}
			/>
		</div>
	);
}
