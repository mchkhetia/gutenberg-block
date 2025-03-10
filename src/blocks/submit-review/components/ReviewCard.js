import React from "react";
// TODO: import StarRating from "../../../components/StarRating";

export default function ReviewCard({title, rating, review, destroy}) {
	// TODO: add delete functionality

	return (
		<div className="review-card">
			<div className="review-title">{title}</div>
			<div className="review-rating">{rating}</div>
			{/*	TODO: use StarRating component? */}
			<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>
			{/* TODO: add delete button */}
		</div>
	);
}
