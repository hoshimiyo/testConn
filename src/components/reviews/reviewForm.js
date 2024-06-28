import React, { useState, useEffect } from 'react';
import { createReview, updateReview, getReviewById } from '../../api/review';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewForm = ({ isEditMode }) => {
    const [formData, setFormData] = useState({
        content: '',
        rating: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEditMode && id) {
            const fetchReview = async () => {
                const data = await getReviewById(id);
                setFormData(data);
            };
            fetchReview();
        }
    }, [isEditMode, id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await updateReview(id, formData);
                console.log('Review updated successfully');
            } else {
                await createReview(formData);
                console.log('Review created successfully');
            }
            navigate('/reviews');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea name="content" placeholder="Content" onChange={handleChange} value={formData.content} />
            <input name="rating" placeholder="Rating" onChange={handleChange} value={formData.rating} />
            <button type="submit">{isEditMode ? 'Update Review' : 'Create Review'}</button>
        </form>
    );
};

export default ReviewForm;
