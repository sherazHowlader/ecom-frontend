import Token from "../../../service/Token";
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

export const csrfToken = ({commit}) => {
    Token.get('/csrf-token')
        .then((items) => {
            commit('csrf_token', items.data.token);
        });
};

export const authToken = ({commit}) => {
    Token.get('/mytoken')
        .then((response) => {
            commit('isAuthenticated', response.data);
        });
}