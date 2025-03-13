import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import Filter from './Filter';
import Search from './Search';
import Sort from './Sort';

export default function ReactApp() {
	const [students, setStudents] = useState([]);
	const [filter, setFilter] = useState({
		student_role: '',
		student_email: '',
		student_phone: '',
	});
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOption, setSortOption] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/wp-json/wp/v2/student?_embed')
			.then((response) => response.json())
			.then((data) => {
				setStudents(data);
				setLoading(false);
			});
	}, []);

	const filteredStudents = students.filter((student) => {
		const { student_role, student_email, student_phone } = filter;
		const searchMatch =
			student.acf.student_role.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.acf.student_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.acf.student_phone.includes(searchTerm);

		return (
			(student_role === '' || student.acf.student_role.toLowerCase().includes(student_role.toLowerCase())) &&
			(student_email === '' || student.acf.student_email.toLowerCase().includes(student_email.toLowerCase())) &&
			(student_phone === '' || student.acf.student_phone.includes(student_phone)) &&
			searchMatch
		);
	});


	const sortedStudents = filteredStudents.sort((a, b) => {
		if (sortOption === 'role') {
			return a.acf.student_role.localeCompare(b.acf.student_role);
		} else if (sortOption === 'title') {
			return a.acf.student.title.localeCompare(b.acf.student.title);
		}
		return 0;
	});

	return (
		<div className="app">
			<h1>Integrated Students</h1>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Filter filter={filter} setFilter={setFilter} />
			<Sort setSortOption={setSortOption} />

			{loading ? (
				<div className="skeleton-loader">
					<div className="skeleton-input"></div>
					<div className="student-list">
						{[...Array(6)].map((_, index) => (
							<div className="skeleton-card" key={index}></div>
						))}
					</div>
				</div>
			) : (
				<StudentList students={sortedStudents} />
			)}
		</div>
	);
}
