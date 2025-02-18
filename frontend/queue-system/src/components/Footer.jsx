import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
   
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const currentDay = daysOfWeek[today.getDay()];

  
  const isWorkingDay = today.getDay() >= 1 && today.getDay() <= 5;
  
   
  const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div style={styles.footerContent}>
        <div style={styles.socialMedia}>
          <motion.a
            href="#"
            style={styles.icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa fa-facebook"></i>
          </motion.a>
          <motion.a
            href="#"
            style={styles.icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa fa-twitter"></i>
          </motion.a>
          <motion.a
            href="#"
            style={styles.icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa fa-instagram"></i>
          </motion.a>
        </div>

        <div style={styles.footerLinks}>
          <h4 style={styles.footerHeading}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="#" style={styles.link}>About Us</a></li>
            <li><a href="#" style={styles.link}>Services</a></li>
            <li><a href="#" style={styles.link}>Contact</a></li>
            <li><a href="#" style={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>

        <div style={styles.contactInfo}>
          <h4 style={styles.footerHeading}>Contact Us</h4>
          <p style={styles.contactText}>
            <i className="fa fa-map-marker" style={styles.icon}></i> 1234 Revenue St, Addis Ababa, Ethiopia
          </p>
          <p style={styles.contactText}>
            <i className="fa fa-envelope" style={styles.icon}></i> Email: contact@revenue.et
          </p>
          <p style={styles.contactText}>
            <i className="fa fa-phone" style={styles.icon}></i> Phone: +251 11 123 456
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© 2025 Ethiopian Revenue Services. All rights reserved.</p>

        
        <motion.p
          style={styles.todayText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Today is{" "}
          <span style={styles.todayDay}>
            <i className="fa fa-calendar-day" style={styles.todayIcon}></i> {currentDay}
          </span>
        </motion.p>

        <motion.p
          style={styles.footerText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Working days: {workingDays.join(", ")}
        </motion.p>

        <motion.p
          style={styles.footerText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          {isWorkingDay ? "It's a working day!" : "Enjoy your weekend!"}
        </motion.p>
      </div>
    </motion.footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '180px',
  },
  icon: {
    fontSize: '24px',
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'all 0.3s ease',
  },
  footerLinks: {
    textAlign: 'left',
    width: '30%',
  },
  footerHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  linkList: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginBottom: '10px',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  contactInfo: {
    textAlign: 'left',
    width: '30%',
  },
  contactText: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
  footerBottom: {
    marginTop: '20px',
    backgroundColor: '#222',
    padding: '20px 0',
  },
  footerText: {
    fontSize: '1rem',
    color: '#aaa',
  },
  todayText: {
    fontSize: '1.2rem',
    color: '#fff',
    margin: '5px 0',
  },
  todayDay: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4caf50',   
  },
  todayIcon: {
    marginRight: '10px',
    color: '#4caf50',
    fontSize: '1.6rem',  
  },
};

export default Footer;
