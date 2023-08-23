import Cookies from "js-cookie";

export default {
    csrf_token: '',
    isAuthenticated: null,
    hasToken: Cookies.get('token'),
}