import React, { useState } from 'react';
import { createService, updateService } from '../../api/services';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceForm = ({ isEditMode }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceData = { name, description };
        if (isEditMode) {
            await updateService(id, serviceData);
        } else {
            await createService(serviceData);
        }
        navigate.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ServiceForm;
