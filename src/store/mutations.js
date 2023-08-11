import { useToast } from 'vue-toastification';
const toast = useToast();

export const isAuthenticated = (state, payload) => {
    state.isAuthenticated = payload;
}
