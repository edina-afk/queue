import React, { useState } from 'react';
import axios from 'axios';

function Appointment() {
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    appointment_type: '',
    tinNumber: '',
  });
  const [barcode, setBarcode] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const clientId = localStorage.getItem('clientId');
      
      const response = await axios.post(
        'http://localhost:5550/api/appointments',
        { ...appointmentData, client_id: clientId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { barcode } = response.data;
      setBarcode(barcode);
      alert('Appointment booked successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to book appointment.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.header}>Book Your Appointment</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="date">Select Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="appointment_type">Appointment Type</label>
            <select
              id="appointment_type"
              name="appointment_type"
              value={appointmentData.appointment_type}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Appointment Type</option>
              <option value="Level A">Level A</option>
              <option value="Level B">Level B</option>
              <option value="Level C">Level C</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="tinNumber">TIN Number</label>
            <input
              id="tinNumber"
              name="tinNumber"
              type="text"
              placeholder="Enter TIN Number (Optional)"
              value={appointmentData.tinNumber}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>Book Appointment</button>
        </form>
        
        {barcode && (
          <div style={styles.barcodeContainer}>
            <h3 style={styles.barcodeHeader}>Your Barcode:</h3>
            <p style={styles.barcodeText}>{barcode}</p>
          </div>
        )}
        
        {error && <p style={styles.errorText}>{error}</p>}
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
      backgroundColor: '#E8F5E9',   
      padding: '0 20px',
    },
    formWrapper: {
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      padding: '40px',
      width: '100%',
      maxWidth: '600px',
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
      gap: '8px',
    },
    label: {
      fontSize: '1rem',
      color: '#555',
      fontWeight: '500',
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
    barcodeContainer: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#e9f7ff',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    },
    barcodeHeader: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#333',
    },
    barcodeText: {
      fontSize: '1.3rem',
      color: '#0066cc',
      wordBreak: 'break-word',
      marginTop: '12px',
    },
    errorText: {
      color: '#d9534f',
      fontSize: '1rem',
      textAlign: 'center',
      marginTop: '20px',
    },
  };
  
export default Appointment;
