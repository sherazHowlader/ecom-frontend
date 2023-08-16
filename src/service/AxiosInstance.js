import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const Api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
    withCredentials: true,
});

Api.interceptors.request.use(
    function (request) {
        // Add the 'Authorization' header
        request.headers = {
            ...request.headers,
            'Authorization': 'Bearer ' + '13|wn51z8hXIvY1kT3w0zVRh5F7yhyZx933AhqyXW2F',
            'Accept': 'application/json',
        };

        // Fetch the CSRF token from the cookie
        const csrfToken = getCsrfToken();
        if (csrfToken) {
            request.headers['X-XSRF-TOKEN'] = csrfToken;
        }

        // console.log('Request URL:', request.url);
        // console.log('Request Headers:', request.headers);
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Fetch the CSRF token from the cookie
function getCsrfToken() {
    const csrfCookie = document.cookie
        .split(";")
        .find(cookie => cookie.trim().startsWith("XSRF-TOKEN="));

    if (csrfCookie) {
        return csrfCookie.split("=")[1];
    }

    return null;
}
