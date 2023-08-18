import {Api} from "./axiosInstance";

const END_POINT = '/mytoken';

export default {
    get(url) {
        return Api.get(`${url}`);
    },

    login(url, data) {
        return Api.post(`${url}`, data);
    },

    logOut(url) {
        return Api.delete(`${url}`);
    },
}