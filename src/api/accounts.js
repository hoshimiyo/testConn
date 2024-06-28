import axios from 'axios';

const API_URL = 'http://localhost:5000/api/account';

export const register = async (registerDto) => {
    const response = await axios.post(`${API_URL}/register`, registerDto);
    return response.data;
};

export const login = async (loginDto) => {
    const response = await axios.post(`${API_URL}/login`, loginDto);
    return response.data;
};

export const changeRole = async (id, role) => {
    const response = await axios.put(`${API_URL}/${id}/change-role`, null, {
        params: { role }
    });
    return response.data;
};
