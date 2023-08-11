import { useToast } from 'vue-toastification';
const toast = useToast();

export const set_coupon = (state, payload) => {
    if (payload) {
        localStorage.setItem('couponDiscount', payload['discount']);
        localStorage.setItem('couponName', payload['name']);

        state.couponName = payload['name'];
        state.couponDiscount = payload['discount'];

        toast.success("Coupon applied.")
    } else {
        toast.error("Oops! wrong coupon")
    }
}

export const remove_coupon = (state) => {
    localStorage.removeItem('couponDiscount');
    localStorage.removeItem('couponName');

    state.couponName = "";
    state.couponDiscount = "";
    toast.warning("Coupon removed.")
}