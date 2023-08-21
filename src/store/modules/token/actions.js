import Token from "../../../service/Token";
import Cookies from 'js-cookie';
import router from "../../../router/index.js";
import {useToast} from 'vue-toastification';

const toast = useToast();

export const saveInfo = ({commit}, response) => {
    commit('isAuthenticated', response.data.token);
    commit('auth/user_info', response.data.user, {root: true});
    Cookies.set("token", response.data.token, {
        sameSite: "lax",
        secure: true,
    });
    router.push({name: 'home'}).then(() => {
        toast.success(response.data.message)
    });
}

export const login = ({commit, dispatch}, formData) => {
    Token.login("/login", formData)
        .then((response) => {
            if (response.data.success){
                dispatch('saveInfo', response);
            }else {
                toast.warning(response.data.message)
            }
        })
        .catch((error) => {
            console.log(error.response.data.message);
        });
}

export const register = ({commit, dispatch}, formData) => {
    Token.login("/register", formData)
        .then((response) => {
            dispatch('saveInfo', response);
        })
        .catch((error) => {
            toast.warning(error.response.data.message)
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
            if (response.data) {
                Cookies.set("token", response.data, {
                    sameSite: "lax",
                    secure: true,
                });
            }
        });
}

export const logOut = ({commit, dispatch}) => {
    Token.logOut("/logout")
        .then((response) => {
            Cookies.remove("token");
            commit('auth/user_info', '', {root: true});
            window.location.reload();
        })
        .catch((error) => {
            console.log(error.response.data.message);
        });
}