// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category/tees" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  )
}

export default App
