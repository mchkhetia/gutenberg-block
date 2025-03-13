import React from 'react';
import StudentCard from './StudentCard';

export default function StudentList({ students }) {
	return (
		<div className="student-list">
			{students.length > 0 ? (
				students.map((student) => (
					<StudentCard key={student.id} student={student} />
				))
			) : (
				<p>No students found</p>
			)}
		</div>
	);
}
