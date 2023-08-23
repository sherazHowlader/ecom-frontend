import Cart from "../../../service/Cart";
import { useToast } from 'vue-toastification';
const toast = useToast();

export const getCartItems = ({commit}) => {
    Cart.all()
        .then((items) => {
            commit('set_items', items.data)
        })
}

export const addToCart = ({ commit }, product) => {
    commit('add_item', {product: product});
    Cart.store('add-cart-item', {product: product});
}

export const addToCarts = ({ commit }, {product, quantity}) => {
    commit('add_items', { product: product, quantity: quantity});
    Cart.store('add-cart-item', { product: product, quantity: quantity });
}

export const inc = ({commit}, cart) => {
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

export const placeOrder = ({commit} , order) => {
    Cart.store('place-order', order)
        .then((items) => {
        console.log(items.data.status);

        toast.success(items.data.status)
    })
}
