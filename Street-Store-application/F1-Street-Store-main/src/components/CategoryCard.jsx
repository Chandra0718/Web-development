// src/components/CategoryCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ name, path }) => {
  return (
    <div className="category-card">
      {path ? <Link to={path}>{name}</Link> : <span>{name}</span>}
    </div>
  )
}

export default CategoryCard
