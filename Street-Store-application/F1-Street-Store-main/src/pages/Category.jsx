// src/pages/Category.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const Category = () => {
  const filtered = products.filter(p => p.category === 'Tees')

  return (
    <>
      <Header />
      <main>
        <h2>Tees</h2>
        <div className="grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Category
