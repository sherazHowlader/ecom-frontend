import axios from "axios";
import Cart from "../../../service/Cart";

export const getCartItems = ({commit}) => {
    Cart.all()
        .then((items) => {
            commit('set_items', items.data)
        })
}

export const addProductToCart = ({commit}, {product, quantity, variant} ) => {
    var qty = quantity ? quantity: 1;
    commit('add_items', {product, qty, variant});
    Cart.store('add-cart-item', {product, qty, variant});
}

export const inc = ({commit}, cart) => {
    // console.log(cart);

    commit('inc', cart) //for local update
    Cart.inc('cart-inc', cart.SKU); //for DB update
}

export const dec = ({commit}, cart) => {
    commit('dec', cart)
    Cart.dec('cart-dec', cart.SKU);
}

export const removeItem = ({commit}, cart) => {
    console.log(cart);
    commit('remove_items', cart)
    Cart.delete('cart-item-remove', cart.SKU);
}

export const token = ({commit}) => {
    Cart.getToken('csrf-token', {
        '_method': localStorage.getItem('tn')
    })
        .then((items) => {
            commit('Token', items.data.csrfToken);
            console.log(items.data.csrfToken);
        });
};
