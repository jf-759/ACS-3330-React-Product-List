import React from 'react';

function ProductCard ({ product }) {
    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Units Available:</strong> {product.units}</p>
        </div>
    )
}

export default ProductCard;