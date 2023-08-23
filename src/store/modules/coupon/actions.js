import Coupon from "../../../service/Coupon";
import {useToast} from 'vue-toastification';
const toast = useToast();

export const applyCoupon = ({commit}, data) => {
    let addData = new FormData();
    addData.append("name", data);

    Coupon.apply('/coupon', addData)
        .then((response) => {
            commit('set_coupon', response.data)
        }).catch((error) => {
        toast.error("Oops! wrong coupon")
    });
}

export const cancelCoupon = ({commit}) => {
    commit('remove_coupon')
}