export const token = ({commit}) => {
    Cart.getToken('/csrf-token')
        .then((items) => {
            commit('Token', items.data.token);
            console.log(items.data);
        });
};