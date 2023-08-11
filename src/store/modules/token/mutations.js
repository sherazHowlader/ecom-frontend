export const Token = (state, token) => {
    state.token = token;
    localStorage.setItem('tn', token);
}