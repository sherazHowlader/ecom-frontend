import axios from "axios";
import store from "../store";

const API_BASE_URL = "https://web.codedinfo.com/api/";

export const Api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

Api.defaults.withCredentials = true;

// api te request jawar age header a deafult token set kora
Api.interceptors.request.use(
    function (request) {
        request.headers = {
            'Authorization': 'Bearer ' + "121|5azPZT1qLSL2Hul9hQI0xtjR3RGQ9l83JJSHxTVr",
            'Accept': 'application/json',
            // 'X-CSRF-TOKEN': localStorage.getItem('tn'),
        };
        return request;
    }, function (error) {
        return Promise.reject(error);
    }
);