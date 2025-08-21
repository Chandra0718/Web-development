import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const categories = [
    { name: 'Tees', path: '/category/tees' },
    { name: 'Jackets', path: '' },
    { name: 'Caps', path: '' },
    { name: 'Accessories', path: '' },
    { name: 'Limited', path: '' }
  ]

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>F1 Streetwear</h1>
          <p className={styles.heroSubtitle}>Speed Meets Style</p>
          <Link to="/category/tees" className={styles.viewAllBtn}>View All</Link>
        </section>

        <section className={styles.categoriesSection}>
          <h2 className={styles.categoriesTitle}>Shop by Category</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((cat, index) => (
              cat.path ? (
                <Link key={index} to={cat.path} className={styles.categoryCard}>
                  {cat.name}
                </Link>
              ) : (
                <div key={index} className={styles.categoryCard} style={{cursor: 'default', opacity: 0.6}}>
                  {cat.name}
                </div>
              )
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
