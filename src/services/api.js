import axios from 'axios';

const api = axios.create({
    baseURL: '0.0.0.0'
});

export default api;