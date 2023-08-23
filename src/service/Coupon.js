import {Api} from "./axiosInstance";

export default {
    apply(url, data) {
        return Api.post(`${url}`, data);
    },
}