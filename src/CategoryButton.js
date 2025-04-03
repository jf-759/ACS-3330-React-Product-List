import React from 'react';

function CategoryButton ({ name, onSelect }) {
    return (
        <button onClick={() => onSelect(name)}>
            {name}
        </button>
    );
}

export default CategoryButton;