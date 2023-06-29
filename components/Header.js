import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Product Waitlist</h1>
      <p className={styles.description}>Join our waitlist to be the first to know when our product launches!</p>
    </header>
  );
};

export default Header;