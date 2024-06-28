import React, { useState, useEffect } from 'react';
import { createPlantCareLog, getPlantCareLogById, updatePlantCareLog } from '../../api/plantCareLogs';
import { useNavigate, useParams } from 'react-router-dom';

const PlantCareLogForm = ({ isEditMode }) => {
    const [formData, setFormData] = useState({
        description: '',
        date: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEditMode) {
            const fetchPlantCareLog = async () => {
                const log = await getPlantCareLogById(id);
                setFormData(log);
            };
            fetchPlantCareLog();
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
                await updatePlantCareLog(id, formData);
            } else {
                await createPlantCareLog(formData);
            }
            navigate('/plant-care-logs');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
            />
            <input
                name="date"
                placeholder="Date"
                onChange={handleChange}
                value={formData.date}
            />
            <button type="submit">{isEditMode ? 'Update Plant Care Log' : 'Create Plant Care Log'}</button>
        </form>
    );
};

export default PlantCareLogForm;
