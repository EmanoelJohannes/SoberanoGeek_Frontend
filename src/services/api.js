import axios from 'axios';

const ApiService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: parseInt(process.env.REACT_APP_API_TIMEOUT, 10),
});

ApiService.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

ApiService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Usuário não autorizado. Faça login novamente.');
        }
        return Promise.reject(error);
    }
);

const fetchData = async ({ url, method, data = null, params = null }) => {
    try {
        const response = await ApiService.request({
            url,
            method,
            data,
            params,
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
};

export default { fetchData };
