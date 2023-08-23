import Auth from "../../../service/Auth";

export const userInfo = ({commit}) => {
    Auth.get('/user')
        .then((response) => {
            commit('user_info', response.data)
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
}