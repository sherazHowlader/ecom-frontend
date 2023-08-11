import Token from "../service/Token";
import axios from "axios";

export const login = ({commit, dispatch}, formData) => {
    console.log(formData);
    Token.login("/login", formData)
        .then((response) => {
            commit('isAuthenticated', response.data.token)
            // router.back();            
            console.log(response.data.message);
        })
        .catch((error) => {
            console.log(error.response.data.message);
        });
}

export const tokenLoad = ({commit}) => {
    Token.get()
        .then((response) => {
            // console.log('action theke - ' + response.data);
            commit('isAuthenticated', response.data);

            axios.defaults.headers = {
                Authorization: 'Bearer ' + response.data,
            };
        });
}

export const loadUerInfo = ({commit}) => {
    Token.getUser('user')
        .then((response) => {
            // console.log(response.data);
        });
}