import React from 'react';
import CategoryButton from './CategoryButton';

function CategoryButtons({ categories, onSelectCategory}) {
    return (
        <div>

            <CategoryButton name="All Categories" onSelect={onSelectCategory} />
            {categories.map((category, index) => (
                <CategoryButton key={index} name={category} onSelect={onSelectCategory} />
            ))}
        </div>
    );
}

export default CategoryButtons;