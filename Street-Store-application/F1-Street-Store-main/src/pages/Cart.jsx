// src/pages/Cart.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Cart = () => {
  // Cart data would typically come from context or localStorage
  const cart = []

  return (
    <>
      <Header />
      <main>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, i) => (
              <li key={i}>{item.name} - Qty: 1</li>
            ))}
          </ul>
        )}
        <p>Subtotal: $0.00</p>
        <button>Checkout</button>
      </main>
      <Footer />
    </>
  )
}

export default Cart
