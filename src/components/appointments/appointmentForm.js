import React, { useState, useEffect } from 'react';
import { createAppointment, updateAppointment, getAppointmentById } from '../../api/appointments';
import { useNavigate, useParams } from 'react-router-dom';

const AppointmentForm = ({ isEditMode }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        userId: '',
        expertId: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEditMode && id) {
            const fetchAppointment = async () => {
                const data = await getAppointmentById(id);
                setFormData(data);
            };
            fetchAppointment();
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
                await updateAppointment(id, formData);
                console.log('Appointment updated successfully');
            } else {
                await createAppointment(formData);
                console.log('Appointment created successfully');
            }
            navigate('/appointments');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
            <input name="date" type="date" onChange={handleChange} value={formData.date} />
            <input name="userId" placeholder="User ID" onChange={handleChange} value={formData.userId} />
            <input name="expertId" placeholder="Expert ID" onChange={handleChange} value={formData.expertId} />
            <button type="submit">{isEditMode ? 'Update Appointment' : 'Create Appointment'}</button>
        </form>
    );
};

export default AppointmentForm;
