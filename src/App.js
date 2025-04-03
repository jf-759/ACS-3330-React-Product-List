import logo from './logo.svg';
import './App.css';
import React from 'react';
import data, { allCategories } from './data';

function App() {

  const categoryCounts = allCategories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const categoryList = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count
  }));

  return (
    <div className="App">
      <h1>Product Categories</h1>
      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>
            {category.name} ({category.count})
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
