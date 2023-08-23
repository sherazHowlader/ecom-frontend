import {Api} from "./axiosInstance";

export default {
    get(url) {
        return Api.get(url);
    },
}