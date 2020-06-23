export const brandFilter = (arr, category) => {
    if(!category) return arr;

    return arr.filter(product => category.includes(product.category));
};