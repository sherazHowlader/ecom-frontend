import axios from "axios";
import store from "../store";

const API_BASE_URL = "https://ecom-backend.test/api/";

export const Api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
    withCredentials: true,
});

Api.defaults.withCredentials = true;

// api te request jawar age header a deafult token set kora
Api.interceptors.request.use(
    function (request) {
        request.headers = {
            'Authorization': 'Bearer ' + store.getters.isAuthenticated,
            'Accept': 'application/json',
        };
        return request;
    }, function (error) {
        return Promise.reject(error);
    }
);