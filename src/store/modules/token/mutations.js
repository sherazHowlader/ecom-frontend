export const csrf_token = (state, token) => {
    state.csrf_token = token;
}

export const isAuthenticated = (state, payload) => {
    state.isAuthenticated = payload;
}