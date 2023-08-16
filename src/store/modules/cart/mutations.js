import { useToast } from 'vue-toastification';
const toast = useToast();

export const add_item = (state, { product }) => {
    const hasItems = state.items.find(item => {
      return item.SKU === product.SKU;
    });
  
    if (hasItems) {
        toast.success('Already added. Incremented!')
        return hasItems.quantity++;
    } else {
        product.quantity = 1;
        state.items.push(product);
        toast.success('Item added in cart')
    }
}

export const add_items = (state, { product, quantity }) => {
    const hasItems = state.items.find(item => {
      return item.SKU === product.SKU;
    });

    if (hasItems) {
        hasItems.quantity += parseInt(quantity) || 1;
        toast.success('Already added. Incremented!')
    } else {
        product.quantity = quantity || 1;
        state.items.push(product);
        toast.success('Item added in cart')
    }
}

export const set_items = (state, items) => {
    state.items = items
}

export const inc = (state, cart) => {
    let hasItems = state.items.find(item => {
        return item.SKU === cart.SKU;
    });

    if (hasItems) {
        toast.success('Quantity incremented!')
        return hasItems.quantity++;
    }
}

export const dec = (state, cart) => {
    let hasItems = state.items.find(item => {
        return item.SKU === cart.SKU;
    });

    if (hasItems) {
        toast.info("Quantity decremented!")
        return hasItems.quantity--;
    }
}

export const remove_items = (state, cart) => {
    state.items = state.items.filter((item) => {
        return item.SKU !== cart.SKU;
    })
}