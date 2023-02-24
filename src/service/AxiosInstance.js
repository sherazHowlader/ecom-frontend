import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const Api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

export const Private = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

Api.defaults.withCredentials = true;
Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';