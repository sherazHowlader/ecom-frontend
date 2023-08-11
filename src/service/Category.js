import {Api} from "./axiosInstance";

export default {
    all(url) {
        return Api.get(url);
    },

    bySlug(url, slug) {
        return Api.get(`${url}/${slug}`);
    },

    images(url, slug) {
        return Api.get(`${url}/${slug}`);
    },

    variant(url, slug) {
        return Api.get(`${url}/${slug}`);
    },
}