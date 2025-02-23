import React, {useState} from 'react';

export default function StarRating({rating, setRating}){

	const [hover, setHover]
		= useState(rating || 0);


	return <div className="stars">
		{/*.map loops over items in the array*/}
		{[1,2,3,4,5].map(star =>
			<span className="star off"
				  onMouseEnter={() => setHover(star)}
			>★</span>
		)}
	</div>
}
