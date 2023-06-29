import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';
import { api } from '../utils/api';
import styles from '../styles/WaitlistForm.module.css';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      await api.post('/waitlist', { name, email });
      setMessage('SUBMISSION_SUCCESS');
    } catch (error) {
      setMessage('SUBMISSION_FAILURE');
    }
  };

  return (
    <form className={styles.waitlistForm} onSubmit={handleSubmit}>
      <input
        id="name-input"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        id="email-input"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button id="submit-button" type="submit">
        Join Waitlist
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default WaitlistForm;