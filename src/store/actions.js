import Token from "../service/Token";

export const applyCoupon = ({ commit }, data) => {

    let addData = new FormData();
    addData.append("name", data);

    Token.coupon('/coupon', addData)
        .then((response) => {
            console.log(response);

            commit('set_coupon', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);
        });
}

export const cancelCoupon = ({commit}) => {
    commit('remove_coupon')
}

export const login = ({commit, dispatch}, formData) => {
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
            commit('isAuthenticated', response.data)
        })
    ;
}
