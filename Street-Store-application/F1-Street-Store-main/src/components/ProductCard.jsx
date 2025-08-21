// src/components/ProductCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">View</Link>
    </div>
  )
}

export default ProductCard
