// src/pages/About.jsx
import React from 'react';

const About = () => {
  const styles = {
    hero: {
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    content: {
      maxWidth: '1200px',
      margin: '80px auto',
      padding: '0 5%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '60px',
      alignItems: 'center',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a3a8f',
    },
    text: {
      color: '#555',
      lineHeight: '1.8',
      marginBottom: '25px',
      fontSize: '1.1rem',
    },
    values: {
      background: '#f8f9ff',
      padding: '100px 5%',
    },
    valuesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    valueCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      marginBottom: '30px',
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#1a3a8f',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    qualifications: {
      padding: '100px 5%',
      textAlign: 'center',
    },
    qualificationsTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1a3a8f',
    },
    qualificationsList: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left',
    },
    qualificationItem: {
      marginBottom: '15px',
      fontSize: '1.1rem',
      color: '#555',
    },
  };

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>About SkillHive Tutoring</h1>
        </div>
      </section>

      {/* About Content */}
      <section style={styles.content}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.text}>
            SkillHive Tutoring was founded by Pieter van der Merwe with a vision to provide exceptional 
            tutoring services to students in technical subjects. With extensive qualifications and industry 
            experience, we help students excel in their studies and prepare for successful careers.
          </p>
          <p style={styles.text}>
            Our approach combines theoretical knowledge with practical applications, ensuring students 
            not only understand the concepts but can also apply them in real-world scenarios.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.values}>
        <div style={styles.valuesContainer}>
          <h2 style={styles.sectionTitle}>Our Approach</h2>

          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>
              <span
                style={{
                  background: '#1a3a8f',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                P
              </span>
              Personalized Learning
            </h3>
            <p style={styles.text}>
              We tailor our tutoring sessions to each student's unique learning style and pace, 
              ensuring optimal understanding and retention of complex technical concepts.
            </p>
          </div>

          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>
              <span
                style={{
                  background: '#1a3a8f',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                E
              </span>
              Experienced Tutors
            </h3>
            <p style={styles.text}>
              Our tutors are qualified professionals with industry experience, bringing real-world 
              insights to the classroom and helping students connect theory with practice.
            </p>
          </div>

          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>
              <span
                style={{
                  background: '#1a3a8f',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                R
              </span>
              Results-Driven
            </h3>
            <p style={styles.text}>
              We focus on measurable outcomes, helping students improve their grades, gain confidence, 
              and develop the skills needed for academic and career success.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section style={styles.qualifications}>
        <h2 style={styles.qualificationsTitle}>Tutor Qualifications</h2>
        <div style={styles.qualificationsList}>
          <p style={styles.qualificationItem}>• Qualified Electrician (Trade tested, NQF Level 4 equivalent)</p>
          <p style={styles.qualificationItem}>• Qualified Fitter and Boilermaker</p>
          <p style={styles.qualificationItem}>• Health & Safety Diploma</p>
          <p style={styles.qualificationItem}>• Project Management Diploma</p>
          <p style={styles.qualificationItem}>• Supply Chain Management Diploma</p>
          <p style={styles.qualificationItem}>• ETDP SETA Accredited Facilitator, Assessor, and Moderator</p>
          <p style={styles.qualificationItem}>• Currently completing Skills Development Facilitator (SDF) NQF 6</p>
        </div>
      </section>
    </div>
  );
};

export default About;