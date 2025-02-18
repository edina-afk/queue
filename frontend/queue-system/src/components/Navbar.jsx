import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(0)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 0 ? '#0066cc' : 'transparent',
              color: hovered === 0 ? '#fff' : '#fff',
            }}
          >
            Home
          </Link>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(1)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/about" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 1 ? '#0066cc' : 'transparent',
              color: hovered === 1 ? '#fff' : '#fff',
            }}
          >
            About
          </Link>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(2)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/appointment" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 2 ? '#0066cc' : 'transparent',
              color: hovered === 2 ? '#fff' : '#fff',
            }}
          >
            Appointment
          </Link>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(3)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/contact" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 3 ? '#0066cc' : 'transparent',
              color: hovered === 3 ? '#fff' : '#fff',
            }}
          >
            Contact
          </Link>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(4)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/login" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 4 ? '#0066cc' : 'transparent',
              color: hovered === 4 ? '#fff' : '#fff',
            }}
          >
            Login
          </Link>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={() => handleMouseEnter(5)} 
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/register" 
            style={{
              ...styles.navLink, 
              backgroundColor: hovered === 5 ? '#0066cc' : 'transparent',
              color: hovered === 5 ? '#fff' : '#fff',
            }}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 60px',   
    position: 'relative',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    padding: '10px 15px',
    display: 'block',
    transition: 'all 0.3s ease',
    borderRadius: '5px',
  },
};

export default Navbar;
