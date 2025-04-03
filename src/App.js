import React, { useState }from 'react';
import './App.css';
import data, { allCategories } from './data';
import CategoryButtons from './CategoryButtons';
import ProductList from './ProductList';

function App() {

  const uniqueCategories = [...new Set(allCategories)];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = 
    selectedCategory === 'All Categories'
    ? data
    : data.filter((product) => product.category === selectedCategory);

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <CategoryButtons
        categories={uniqueCategories}
        onSelectCategory={setSelectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
