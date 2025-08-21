// src/pages/Product.jsx
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import products from '../data/products'

const Product = () => {
  const { id } = useParams()
  const [search, setSearch] = useState("")
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  const product = products.find(p => p.id === parseInt(id))

  return (
    <>
      <Header />
      <main>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && filtered.length === 0 && (
          <p>No matching products found.</p>
        )}
        {search && (
          <div className="grid">
            {filtered.map(p => (
              <div key={p.id}>{p.name}</div>
            ))}
          </div>
        )}

        {!search && product && (
          <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Product
