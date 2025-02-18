import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.infoText}>If you have any questions or need assistance, feel free to reach out to us:</p>
      <div style={styles.contactDetails}>
        <p style={styles.contactItem}>
          <strong>Email:</strong> support@ethiopianrevenue.gov.et
        </p>
        <p style={styles.contactItem}>
          <strong>Phone:</strong> +251 11 123 4567
        </p>
        <p style={styles.contactItem}>
          <strong>Location:</strong> Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
  },
  infoText: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '30px',
  },
  contactDetails: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    width: '100%',
  },
  contactItem: {
    fontSize: '1rem',
    color: '#444',
    margin: '10px 0',
  },
};

export default Contact;
