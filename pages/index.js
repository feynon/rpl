import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaitlistForm from '../components/WaitlistForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Waitlist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our Product Waitlist
        </h1>

        <p className={styles.description}>
          Sign up to be the first to know when we launch.
        </p>

        <WaitlistForm />
      </main>

      <Footer />
    </div>
  )
}