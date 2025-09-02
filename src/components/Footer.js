// src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: '#0f1f4d',
      color: 'white',
      padding: '50px 5%',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
    },
    section: {
      marginBottom: '30px',
    },
    heading: {
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '20px',
      position: 'relative',
      paddingBottom: '10px',
    },
    headingAfter: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(to right, #4a6fff, #2d4da8)',
    },
    description: {
      color: '#cbd5e1',
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    linkList: {
      listStyle: 'none',
      padding: '0',
    },
    linkItem: {
      marginBottom: '12px',
    },
    link: {
      color: '#cbd5e1',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px',
      gap: '15px',
    },
    contactText: {
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    socialIcons: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    socialIcon: {
      color: 'white',
      fontSize: '1.5rem',
      transition: 'all 0.3s ease',
    },
    bottom: {
      textAlign: 'center',
      paddingTop: '30px',
      marginTop: '50px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      color: '#cbd5e1',
      fontSize: '0.9rem',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>
            SkillHive Tutoring
            <span style={styles.headingAfter}></span>
          </h3>
          <p style={styles.description}>
            Providing expert tutoring services for Grade 10-12 and college students in technical subjects. 
            Our qualified tutors help students excel in their studies with personalized learning approaches.
          </p>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61580367321266" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={styles.socialIcon} 
                onMouseEnter={(e) => e.target.style.color = '#4a6fff'} 
                onMouseLeave={(e) => e.target.style.color = 'white'} />
            </a>
            <a href="https://wa.me/27687479018" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={styles.socialIcon} 
                onMouseEnter={(e) => e.target.style.color = '#4a6fff'} 
                onMouseLeave={(e) => e.target.style.color = 'white'} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={styles.socialIcon} 
                onMouseEnter={(e) => e.target.style.color = '#4a6fff'} 
                onMouseLeave={(e) => e.target.style.color = 'white'} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={styles.socialIcon} 
                onMouseEnter={(e) => e.target.style.color = '#4a6fff'} 
                onMouseLeave={(e) => e.target.style.color = 'white'} />
            </a>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>
            Our Subjects
            <span style={styles.headingAfter}></span>
          </h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>
                Technical Mathematics
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>
                Technical Sciences
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>
                Electrical Technology
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>
                Engineering Graphics & Design
              </a>
            </li>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>
                College N-Level Courses
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>
            Quick Links
            <span style={styles.headingAfter}></span>
          </h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a href="/" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>Home</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/about" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>About Us</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/services" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>Services</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/contact" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>Contact</a>
            </li>
            <li style={styles.linkItem}>
              <a href="/privacy" style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cbd5e1';
                  e.target.style.transform = 'translateX(0)';
                }}>Pricing</a>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>
            Contact Us
            <span style={styles.headingAfter}></span>
          </h3>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={{ color: '#4a6fff', fontSize: '1.2rem', flexShrink: 0 }} />
            <span style={styles.contactText}>Matlosana Municipality, Klerksdorp, South Africa</span>
          </div>
          <div style={styles.contactItem}>
            <FaPhone style={{ color: '#4a6fff', fontSize: '1.2rem', flexShrink: 0 }} />
            <span style={styles.contactText}>068 747 9018</span>
          </div>
          <div style={styles.contactItem}>
            <FaWhatsapp style={{ color: '#4a6fff', fontSize: '1.2rem', flexShrink: 0 }} />
            <a href="https://wa.me/27687479018" style={{...styles.contactText, textDecoration: 'none', color: '#cbd5e1'}}>
              +27 68 747 9018
            </a>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={{ color: '#4a6fff', fontSize: '1.2rem', flexShrink: 0 }} />
            <a href="mailto:admin@skill-hive.co.za" style={{...styles.contactText, textDecoration: 'none', color: '#cbd5e1'}}>
              admin@skill-hive.co.za
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        &copy; {currentYear} SkillHive Tutoring. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;