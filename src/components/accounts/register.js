import React, { useState } from 'react';
import { register } from '../../api/accounts';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await register(formData);
            console.log('Registration successful', result);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
