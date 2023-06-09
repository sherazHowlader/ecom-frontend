import axios from "axios";
import Cart from "../../../service/Cart";

export const getCartItems = ({commit}) => {
    Cart.all()
        .then((items) => {
            commit('set_items', items.data)
        })
}

export const addToCart = ({ commit }, product) => {
    // var qty = quantity ? quantity: 1;
    // var variant = variant ? variant: 'Deafult';

    commit('add_items', {product: product});
    Cart.store('add-cart-item', {product_id: product.id});
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
    // Cart.getToken('/csrf-token')
    //     .then((items) => {
    //         commit('Token', items.data.token);
    //         console.log(items.data);
    //     });
};

export const placeOrder = ({commit} , order) => {
    Cart.store('place-order', order)
        .then((items) => {
        console.log(items.data);
    })
}
