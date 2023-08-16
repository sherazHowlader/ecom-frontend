import {useToast} from 'vue-toastification';
const toast = useToast();

export const set_coupon = (state, payload) => {
    if (payload) {
        localStorage.setItem('couponDiscount', payload['discount']);
        localStorage.setItem('couponName', payload['name']);

        state.name = payload['name'];
        state.discount = payload['discount'];

        toast.success("Coupon applied.")
    }
}

export const remove_coupon = (state) => {
    localStorage.removeItem('couponDiscount');
    localStorage.removeItem('couponName');

    state.name = "";
    state.discount = "";
    toast.warning("Coupon removed.")
}