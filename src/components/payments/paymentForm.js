import React, { useState, useEffect } from 'react';
import { createPayment, getPaymentById, updatePayment } from '../../api/payments';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentForm = ({ isEditMode }) => {
    const [formData, setFormData] = useState({
        amount: '',
        date: '',
        description: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEditMode) {
            const fetchPayment = async () => {
                const payment = await getPaymentById(id);
                setFormData(payment);
            };
            fetchPayment();
        }
    }, [id, isEditMode]);

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
                await updatePayment(id, formData);
            } else {
                await createPayment(formData);
            }
            navigate('/payments');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="amount" placeholder="Amount" onChange={handleChange} value={formData.amount} />
            <input name="date" placeholder="Date" onChange={handleChange} value={formData.date} />
            <input name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
            <button type="submit">{isEditMode ? 'Update Payment' : 'Create Payment'}</button>
        </form>
    );
};

export default PaymentForm;
