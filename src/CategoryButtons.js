import React from 'react';
import CategoryButton from './CategoryButton';

function CategoryButtons({ categories, onSelectCategory, selectedCategory}) {
    return (
        <div className='category-buttons'>
            
            <CategoryButton name="All" 
            onSelect={onSelectCategory} 
            isActive={selectedCategory === 'All'} 
            />

            {categories.map((category, index) => (
                <CategoryButton 
                key={index} 
                name={category} 
                onSelect={onSelectCategory} 
                isActive={selectedCategory === category}
                />
            ))}
        </div>
    );
}

export default CategoryButtons;