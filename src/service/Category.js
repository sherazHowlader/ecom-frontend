import {Api} from "./axiosInstance";

export default {
    getAll(url) {
        return Api.get(url);
    },
}