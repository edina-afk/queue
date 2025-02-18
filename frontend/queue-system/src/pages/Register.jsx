import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5550/api/clients',   
        formData
      );

      const { token, client } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('clientId', client._id);
      alert('Registration successful!');
      navigate('/appointment'); 
    } catch (err) {
      console.error(err);
      setError('Failed to register.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.header}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>Register</button>
          {error && <p style={styles.errorText}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',   
    padding: '0 20px',
  },
  formWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    fontWeight: '600',
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    backgroundColor: '#f9f9f9',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#0066cc',
  },
  submitButton: {
    padding: '14px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  submitButtonHover: {
    backgroundColor: '#005bb5',
  },
  errorText: {
    color: '#d9534f',
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Register;
