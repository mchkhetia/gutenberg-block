import React, {useState} from 'react';
import "./StarRating.scss"

export default function StarRating({rating, setRating, readonly}){

	const [hover, setHover] = useState(rating || 0);

	return <div className="stars">
		{/*.map loops over items in the array*/}
		{[1,2,3,4,5].map(star =>
			<span
				key={star}
				className={(star <= hover) ? 'star on' : 'star off'}
				onMouseEnter={() => !readonly && setHover(star)}
				onMouseLeave={() => !readonly && setHover(rating)}
				onClick={() => !readonly && setRating(star)}
			>★ </span>
		)}
	</div>
}
