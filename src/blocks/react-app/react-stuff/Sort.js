import React from 'react';

export default function Sort({ setSortOption }) {
	return (
		<div className="sort-container">
			<select
				className="sort-select"
				onChange={(e) => setSortOption(e.target.value)}
			>
				<option value="">Sort By</option>
				<option value="name">Name</option>
				<option value="role">Role</option>
			</select>
		</div>
	);
}
