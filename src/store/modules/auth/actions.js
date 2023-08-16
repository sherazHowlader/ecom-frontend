import Auth from "../../../service/Auth";

export const userInfo = ({commit}) => {
    Auth.get('/user')
        .then((response) => {
            console.log(response.data);
            commit('user_info', response.data)
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
}