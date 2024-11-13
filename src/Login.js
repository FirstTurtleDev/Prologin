// src/Login.js
import { backdropClasses } from '@mui/material';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6 || !/\d/.test(password)) {
      setError('Password must be at least 6 characters and contain a number.');
      return;
    }

    if (email.toLowerCase() === 'prologin@prologin.com' && password === 'ProLogin123456') {
        setError('');
        localStorage.setItem('isAuthenticated', 'true'); // Save login state in localStorage
        window.location.href = '/dashboard'; // Redirect to the dashboard page
      } else {
        setError('Invalid email or password');
      
      }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 className='pop' style={styles.pop}>ProLogin</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        /> 
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  pop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2d3748',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '2rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#edf2f7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  input: {
    margin: '1rem 0',
    padding: '0.875rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e0',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  button: {
    marginTop: '2rem',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#3182ce',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
  },
  error: {
    color: '#c53030',
    fontSize: '0.95rem',
    marginTop: '0.75rem',
    fontWeight: '500',
  },

};
export default Login;
