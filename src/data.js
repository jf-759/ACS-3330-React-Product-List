import data from './data.json';

const allCategories = data.map(product => product.category);

export default data;
export { allCategories };