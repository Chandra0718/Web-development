import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AuthForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem("isLoggedIn", "true")
    alert("Logged in")
    navigate("/home")
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
         
        <form onSubmit={handleLogin} className={styles.form}>
          <h2 className={styles.heading}>Login</h2>
          <input type="email" placeholder="Email" className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className={styles.button}>Login</button>
           <p className={styles.text}>
          No account? <Link to="/signup" className={styles.link}>Sign Up</Link><br />
          <Link to="/forgot-password" className={styles.link}>Forgot Password?</Link>
        </p>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Login
