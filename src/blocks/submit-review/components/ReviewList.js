import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewList({reviews, deleteReview}) {
	return (
		<div className="review-list">
			{reviews.map(review => (
				<ReviewCard
					title={review.attributes.title.rendered}
					rating={review.attributes.acf.review_rating || 3}
					review={review.attributes.content.rendered}
					destroy={() => deleteReview(review)}
					key={review.attributes.id}
				/>
			))}
		</div>
	);
}
