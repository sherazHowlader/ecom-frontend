import axios from "axios";
import store from "../store";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const Api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
    withCredentials: true,
});


// store.dispatch('tokenLoad');

// api te request jawar age header a deafult token set kora
Api.interceptors.request.use(
    function (request) {       
        
        // const token = store.getters.isAuthenticated;
        // console.log(store.getters.isAuthenticated);

        request.headers = {
            // 'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
        };
        return request;
    }, function (error) {
        return Promise.reject(error);
    }
);