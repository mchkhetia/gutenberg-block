import React, { useEffect, useState } from 'react';
import StudantList from './StudantList';

export default function ReactApp() {
	const [studants, setstudants] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/studant')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setstudants(data);
			});
	}, []);

	return (
		<div>
			<div className="app">
				<h1>Integrated studants</h1>
				<StudantList studants={studants} />
			</div>
		</div>
	);
}
