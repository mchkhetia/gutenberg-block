import React from 'react';
import StudentImage from './StudentImage';

export default function StudentCard({ student }) {

	return (
		<div className="student-card">
			<StudentImage student={student} />
			<h2>{student.title.rendered}</h2>
			<p><strong>Role:</strong> {student.acf.student_role}</p>
			<p><strong>Email:</strong> {student.acf.student_email}</p>
			<p><strong>Phone:</strong> {student.acf.student_phone}</p>
			{student.acf.student_portrait && (
				<img src={student.acf.student_portrait} alt="student Portrait" className="student-portrait" />
			)}
		</div>
	);
}
