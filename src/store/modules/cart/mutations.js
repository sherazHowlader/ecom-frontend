import {token} from "./actions.js";

export const add_items = (state, { product }) => {
    const items = state.items.find(item => {
      return item.SKU === product.SKU;
    });
  
    if (items) {
      return items.quantity++;
    } else {
        console.log(product);
      product.quantity = 1; // Set the quantity to 1 for the new item
      state.items.push(product); // Push the 'product' object directly
    }
  }

export const set_items = (state, items) => {
    state.items = items
}

export const inc = (state, cart) => {
    let items = state.items.find(item => {
        return item.SKU == cart.SKU;
    });
    // console.log(items)
    // console.log(cart)

    // item.SKU == cart.SKU ei 2 ta match korle quantity increment hobe
    if (items) {
        return items.quantity++;
    }
}

export const dec = (state, cart) => {
    let items = state.items.find(item => {
        return item.SKU == cart.SKU;
    });

    if (items) {
        return items.quantity--;
    }
}

export const remove_items = (state, cart) => {
    state.items = state.items.filter((item) => {
        return item.SKU !== cart.SKU;
        // ekhane emon 2 ta colum dhorte je 2 ta colum change hoy na
        // item.product_id __dhorle hobe na...karon variant alada holeo id to ekhoi thake
    })
}

export const Token = (state, token) => {
    state.token = token;
    localStorage.setItem('tn', token);
}