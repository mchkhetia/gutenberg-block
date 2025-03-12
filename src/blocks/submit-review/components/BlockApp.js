import React, {useEffect, useState} from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";
import ReviewPagination from "./ReviewPagination";
import {page} from "@wordpress/icons";

export default function BlockApp() {
	const [reviews, setReviews] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [pagination, setPagination] = useState({});

	// run once when app is loaded
	useEffect(() => {
		// TODO: only do this once the API client is ready
		getReviews();
		getLoggedInUser();
	}, []);

	function getReviews(page = 1) {
		// TODO: getReviews

		const reviewsCollection = new wp.api.collections.Review();
		reviewsCollection
			.fetch({data: {per_page: 3, page:page}}) // return a jqXHR (yay jquery)
			.done( data => {
			//console.log(data, reviewsCollection.models);
			//store a COPY of the models in the app
			setReviews([...reviewsCollection.models]);
			setPagination({...reviewsCollection.state})
		})

	}

	function deleteReview(review){


		review.destroy() // <-- backbone method for each model
			.done(data => {
			getReviews();
		})
	}

	function addReview(newReview) {

		const post = new wp.api.colllections.Review(newReview);
		post.save()  // return a jqXHR (yay jquery)\
			.done(data => {
				getReviews();
			})
	}

	function getLoggedInUser() {
		let user = new wp.api.models.UsersMe();
		user.fetch()
			.done(data => {
				console.log('user', data);
				setLoggedIn(true);
			})
			.fail(() => {
				console.log('not logged in');
				setLoggedIn(false);
			});
	}

	return (
		<div>
			<h3>Latest Reviews</h3>
			<ReviewList reviews={reviews} deleteReview={deleteReview} />
			<ReviewPagination
				currentPage={pagination.currentPage}
				totalPages={pagination.totalPages}
				setPage={getReviews}
			/>
			<hr/>
			<h3>Submit a Review</h3>
			{/* TODO: only show form if the user is logged in */}
			<AddReviewForm addReview={newReview => addReview(newReview)} />
			{/*<div className="error-msg">You need to log in to submit a review</div> */}
		</div>
	);
}

// languages/frameworks/tools used in this demo
// wordpress, php, js, html, css, sass, react, JSX, backbone.js (with underscore.js), jquery, docker, git, npm, webpack, REST APIs, ajax, json
// also: sql backend, custom post types, etc
// with deployment: phpMyAdmin, WP CLI, FTP,
