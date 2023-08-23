import Category from "../../../service/Category";

export const getCategories = ({commit}) => {
    Category.getAll('categories')
        .then((response) => {
            commit('all_categories', response.data);
        })
}