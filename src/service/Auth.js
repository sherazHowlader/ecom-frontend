import {Api} from "./axiosInstance";

// const END_POINT = '/user';

export default {
    get(url) {
        return Api.get(url);
    },

    // get(url) {
    //     return Api.get(url, {
    //         headers: {
    //             'Authorization': 'Bearer ' + '10|KiyD44X18KmBk2D4DfWOnt4EhXwuNUctiZUbX6l7', // Replace authToken with your actual token
    //         }
    //     });
    // },
}