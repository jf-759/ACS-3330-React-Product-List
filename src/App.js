import logo from './logo.svg';
import './App.css';
import React from 'react';
import data, { allCategories } from './data';

function App() {

  const uniqueCategories = [...new Set(allCategories)];

  const categoryCounts = allCategories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Product Categories</h1>
      <ul>
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            {category} ({categoryCounts[category]})
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
