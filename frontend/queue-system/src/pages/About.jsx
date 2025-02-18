import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
    
      <section style={styles.missionSection}>
        <h1 style={styles.heading}>Our Mission</h1>
        <p style={styles.missionText}>
          Ethiopian Revenue Services is dedicated to simplifying tax processes, ensuring transparency, and providing excellent customer service. Our goal is to help businesses and individuals comply with tax regulations through an easy-to-use platform that enhances efficiency and accessibility.
        </p>
      </section>

      
      <section style={styles.valuesSection}>
        <h2 style={styles.subHeading}>Our Core Values</h2>
        <div style={styles.valuesContainer}>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Integrity</h3>
            <p style={styles.valueDescription}>
              We value honesty and transparency, building trust with our users and partners through clear communication and ethical practices.
            </p>
          </div>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Innovation</h3>
            <p style={styles.valueDescription}>
              We continuously seek innovative solutions to improve our services and make tax compliance simpler and more accessible for everyone.
            </p>
          </div>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Customer Commitment</h3>
            <p style={styles.valueDescription}>
              We are committed to providing exceptional customer support, making sure our users have the best experience with our platform.
            </p>
          </div>
        </div>
      </section>
 
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaHeading}>Join Us in Our Mission</h2>
        <p style={styles.ctaText}>
          Interested in becoming a part of our innovative team? Together, we can revolutionize tax services across Ethiopia and the world.
        </p>
        <a href="/careers" style={styles.ctaButton}>Explore Careers</a>
      </section>
 
      <section style={styles.timelineSection}>
        <h2 style={styles.subHeading}>Our Journey</h2>
        <div style={styles.timelineContainer}>
          <div style={styles.timelineCard}>
            <h3 style={styles.timelineTitle}>2015</h3>
            <p style={styles.timelineText}>Founded with the vision of improving tax processes and compliance in Ethiopia.</p>
          </div>
          <div style={styles.timelineCard}>
            <h3 style={styles.timelineTitle}>2018</h3>
            <p style={styles.timelineText}>Launched our online platform, providing easy access to tax services for individuals and businesses.</p>
          </div>
          <div style={styles.timelineCard}>
            <h3 style={styles.timelineTitle}>2022</h3>
            <p style={styles.timelineText}>Introduced new features such as real-time updates, payment integrations, and improved user experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  missionSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  missionText: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '900px',
    margin: '0 auto',
  },
  valuesSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  valuesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  valueCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '280px',
    textAlign: 'center',
  },
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  valueDescription: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '15px',
  },
  ctaSection: {
    textAlign: 'center',
    marginTop: '60px',
    marginBottom: '60px',
  },
  ctaHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  ctaText: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '20px',
  },
  ctaButton: {
    backgroundColor: '#0066cc',
    color: '#fff',
    padding: '12px 30px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  timelineSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  timelineContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  timelineCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '250px',
    textAlign: 'center',
  },
  timelineTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  timelineText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default About;
