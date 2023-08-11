import Coupon from "../../../service/Coupon.js";

export const applyCoupon = ({ commit }, data) => {
    let addData = new FormData();
    addData.append("name", data);

    Coupon.apply('/coupon', addData)
        .then((response) => {
            commit('set_coupon', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);
        });
}

export const cancelCoupon = ({commit}) => {
    commit('remove_coupon')
}