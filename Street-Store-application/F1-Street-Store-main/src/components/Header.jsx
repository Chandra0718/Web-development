// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>F1 Streetwear</Link>
      <nav className={styles.nav}>
         

        {isLoggedIn ? (
          <>
          <Link to="/cart" className={styles.link}>Cart</Link>
            <Link to="/wishlist" className={styles.icon}>
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="/profile" className={styles.icon}>
              <i className="fas fa-user"></i>
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className={styles.link}>Sign Up</Link>
            <Link to="/login" className={styles.link}>Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
