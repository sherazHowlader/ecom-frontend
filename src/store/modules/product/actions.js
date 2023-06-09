import axios from "axios";
import Product from "../../../service/Product";

export const allProduct = ({commit}) => {
    Product.all('/products')
        .then((response) => {
            commit('all_product', response.data);
        })
}

export const getProduct = ({commit}, slug) => {
    Product.bySlug('product', slug)
        .then((response) => {
            commit('single_product', response.data);
        })
}

export const getImages = ({commit}, slug) => {
    Product.images('product-images',slug)
        .then((response) => {
            commit('product_images', response.data);
        })
}

export const getVariant = ({commit}, slug) => {
    Product.variant('product-variant',slug)
        .then((response) => {
            commit('product_variants', response.data);
        })
}

export const getCategories = ({commit}) => {
    Product.all('categories')
        .then((response) => {
            commit('all_categories', response.data);
        })
}

export const categoryProduct = ({commit}, slug) => {
    Product.bySlug('categorie', slug)
        .then((response) => {
            commit('category_wise_product', response.data);
        })
}