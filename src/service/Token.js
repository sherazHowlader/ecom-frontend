import {
    Api
} from "./axiosInstance";

const END_POINT = '/mytoken';

export default {
    get() {
        return Api.get(END_POINT);
    },

    login(url, data) {
        return Api.post(`${url}`, data);
    },

    getUser(url) {
        return Api.get(url);
    },
}