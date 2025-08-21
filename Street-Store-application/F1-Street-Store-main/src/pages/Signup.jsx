import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AuthForm.module.css'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    alert("Signed up")
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
         
        <form onSubmit={handleSignup} className={styles.form}>
          <h2 className={styles.heading}>Sign Up</h2>
          <input type="text" placeholder="Name" className={styles.input} value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className={styles.button}>Sign Up</button>
          <p className={styles.text}>
          Already have an account? <Link to="/login" className={styles.link}>Login</Link>
        </p>
        </form>
         
      </main>
      <Footer />
    </>
  )
}

export default Signup
