// src/services/apiService.js

const BASE_URL = 'https://localhost:7126/api/account';

const register = async (registerDto) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerDto),
    });
    return await response.json();
};

const login = async (loginDto) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDto),
    });
    return await response.json();
};

const changeRole = async (id, role) => {
    const response = await fetch(`${BASE_URL}/${id}/change-role?role=${role}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

const deleteUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

export { register, login, changeRole, deleteUser };
