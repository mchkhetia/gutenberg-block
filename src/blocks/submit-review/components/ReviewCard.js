import React from "react";
import StarRating from "../../../components/StarRating";

export default function ReviewCard({title, rating, review, destroy}) {

	function deleteReviews() {
		if(confirm('Are you sure you want to delete this review?"' + title + '"?')) {
			destroy();


		}
	}

	return (
		<div className="review-card">
			<div className="review-title">{title}</div>
			<div className="review-rating">
			<StarRating rating={rating} readonly />
			</div>

			<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>

			<button onClick={deleteReviews}>destroy</button>
		</div>
	);
}
