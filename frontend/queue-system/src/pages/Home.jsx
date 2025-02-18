import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div style={styles.container}>
       
      <motion.header
        style={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 style={styles.title}>Ethiopian Revenue Services</h1>
        <p style={styles.subtitle}>Your trusted partner for tax services and revenue collection</p>
      </motion.header>

      
      <motion.section
        style={styles.aboutSection}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      >
        <div style={styles.contentWrapper}>
          <h2 style={styles.heading}>About Us</h2>
          <p style={styles.text}>
            We are dedicated to simplifying the tax process for Ethiopian citizens. Our mission is to provide a seamless and transparent revenue service experience for all taxpayers.
          </p>
          <motion.img
            src="image.png"
            alt="Ethiopian Revenue"
            style={styles.image}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

       
      <motion.section
        style={styles.contactSection}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 1 }}
      >
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or need assistance, feel free to reach out to us using the form below.
        </p>
        <motion.form
          style={styles.form}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    padding: '0 20px',
    maxWidth: '1200px',   
    margin: '0 auto',     
    backgroundColor: '#f9f9f9',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    margin: '40px 0',
    padding: '50px 0',
    backgroundColor: '#0066cc',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    width: '100%',   
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '10px',
    fontWeight: '400',
  },
  aboutSection: {
    padding: '60px 0',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',   
    margin: '0 auto',     
    width: '100%',
    boxSizing: 'border-box',
  },
  contactSection: {
    padding: '60px 0',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    maxWidth: '1000px',    
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  contentWrapper: {
    maxWidth: '900px',    
    margin: '0 auto',     
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '30px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  input: {
    padding: '15px',
    marginBottom: '15px',
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '15px',
    marginBottom: '15px',
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #ddd',
    height: '120px',
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#0066cc',
    color: '#fff',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
