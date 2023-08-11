import Product from "../../../service/Product";

export const getCategories = ({commit}) => {
    Product.all('categories')
        .then((response) => {
            commit('all_categories', response.data);
        })
}