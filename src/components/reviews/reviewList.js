import React, { useEffect, useState } from 'react';
import { getAllReviews, deleteReview } from '../../api/review';
import { Link } from 'react-router-dom';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await getAllReviews();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    const handleDelete = async (id) => {
        await deleteReview(id);
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        {review.content} - {review.rating}
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                        <Link to={`/reviews/${review.id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
            <Link to="/reviews/new">Add Review</Link>
        </div>
    );
};

export default ReviewList;
