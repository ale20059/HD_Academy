// src/services/api.js
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: `${BASE_URL}/api`, // Aquí ya defines la base
    headers: {
        'Content-Type': 'appication/json',
        'Accept': 'application/json'
    }
});

export const STORAGE_URL = `${BASE_URL}/storage/`;

export default api;