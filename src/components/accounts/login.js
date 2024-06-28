import React, { useState } from 'react';
import { login } from '../../api/accounts';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            const result = await login(formData);
            console.log('Login successful', result);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
