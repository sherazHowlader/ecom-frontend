import {
    Api
} from "./axiosInstance";

const END_POINT = '/mytoken';

export default {
    get() {
        return Api.get(END_POINT);
    },

    coupon(url, data) {
        return Api.post(`${url}`, data);
    },

    login(url, data) {
        return Api.post(`${url}`, data);
    },

    getCoupon(url, data) {
        return Api.get(`${url}`, data);
    },
}