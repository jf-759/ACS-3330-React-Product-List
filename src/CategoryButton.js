import React from 'react';

function CategoryButton ({ name, onSelect, isActive }) {
    return (
        <button 
            className={`category-button ${isActive ? 'active' : ''}`}
            onClick={() => onSelect(name)}
        >
            {name}
        </button>
    );
}

export default CategoryButton;