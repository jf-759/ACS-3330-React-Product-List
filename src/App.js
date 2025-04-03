import React, { useState }from 'react';
import './App.css';
import data, { allCategories } from './data';
import CategoryButtons from './CategoryButtons';
import ProductList from './ProductList';

function App() {

  const uniqueCategories = [...new Set(allCategories)];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = 
    selectedCategory === 'All'
    ? data
    : data.filter((product) => product.category === selectedCategory);

  const totalProducts = filteredProducts.length;
  const totalCategories = uniqueCategories.length;

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <p>Total Categories: {totalCategories} | Total Products: {totalProducts}</p>
      <CategoryButtons
        categories={uniqueCategories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
