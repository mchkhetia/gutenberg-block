import React, {useEffect, useState} from "react";
import StaffList from "./StaffList";

export default function BlockApp(props){

	let [keyword, setKeyword] = useState('');
	let [staff, setStaff] = useState([]);
	let [filteredStaff, setFilteredStaff] = useState([]);

	useEffect(()=>{

		fetch('/wp-json/wp/v2/staff')
			.then(response => response.json())
			.then(data=>{
				console.log(data)
				setStaff(data)
				setFilteredStaff(data)
			})




	}, []); // <--- [] defines when the hook is run

	function filterStaff(keyword){
		//if i had a ton, i would fo an ajax call here

		const results = staff.filter(person =>{
			return person.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		});
		setKeyword(keyword);
		setFilteredStaff(results);
	}


	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterStaff(e.target.value)}
					/>



				</label>
			</div>

			<StaffList posts={filteredStaff}/>

		</div>
	)
}
