import {createStore} from "vuex";
import cart from './modules/cart';
import category from './modules/category';
import product from './modules/product';
import token from './modules/token';

import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";

const store = createStore({
    state: {...state}, // Spread the state object
    getters: {...getters}, // Spread the getters object
    mutations: {...mutations}, // Spread the mutations object
    actions: {...actions}, // Spread the actions object

    modules: {
        cart,
        category,
        token,
        product
    }
})
export default store;
