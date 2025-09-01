import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('https://skill-hive.co.za/api/contact/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status === 200) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    hero: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3")',
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
    section: {
      padding: '40px 20px',
    },
    whiteSection: {
      background: 'white',
    },
    lightSection: {
      background: '#f8f9ff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a3a8f',
      textAlign: 'center',
      position: 'relative',
      paddingBottom: '15px',
    },
    sectionTitleLine: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(to right, #4a6fff, #2d4da8)',
      borderRadius: '2px',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    contactCard: {
      background: '#fff',
      borderRadius: '12px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease',
    },
    contactIcon: {
      fontSize: '2.2rem',
      color: '#2d4da8',
      marginBottom: '15px',
    },
    contactTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#1a3a8f',
    },
    contactInfo: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
    },
    pricingContainer: {
      background: 'white',
      borderRadius: '12px',
      padding: '30px',
      margin: '40px auto',
      maxWidth: '800px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    pricingTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    pricingItem: {
      marginBottom: '15px',
      padding: '15px',
      background: '#f8f9ff',
      borderRadius: '8px',
    },
    formContainer: {
      background: 'white',
      borderRadius: '12px',
      padding: '40px',
      margin: '40px auto',
      maxWidth: '800px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    formTitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      marginBottom: '30px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'white',
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
    },
    submitButton: {
      background: 'linear-gradient(to right, #4a6fff, #2d4da8)',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '0 auto',
      transition: 'all 0.3s ease',
    },
    disabledButton: {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section style={{ ...styles.section, ...styles.lightSection }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={styles.sectionTitle}>
              Our Contact Information
              <span style={styles.sectionTitleLine}></span>
            </h2>
          </div>

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}><FaMapMarkerAlt /></div>
              <h3 style={styles.contactTitle}>Our Location</h3>
              <p style={styles.contactInfo}>
                Matlosana Municipality<br />
                Klerksdorp, South Africa
              </p>
            </div>

            <div style={styles.contactCard}>
              <div style={styles.contactIcon}><FaPhone /></div>
              <h3 style={styles.contactTitle}>Phone</h3>
              <p style={styles.contactInfo}>
                068 747 9018
              </p>
            </div>

            <div style={styles.contactCard}>
              <div style={styles.contactIcon}><FaEnvelope /></div>
              <h3 style={styles.contactTitle}>Email</h3>
              <p style={styles.contactInfo}>
                pietervdm1982@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.formContainer}>
            <h3 style={styles.formTitle}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Quote">Quote</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                style={isSubmitting ? {...styles.submitButton, ...styles.disabledButton} : styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Pricing Information */}
          <div style={styles.pricingContainer}>
            <h3 style={styles.pricingTitle}>Tutoring Rates</h3>
            <div style={styles.pricingItem}>
              <strong>Online 1-on-1:</strong> R150/hour (minimum 4 sessions per month)
            </div>
            <div style={styles.pricingItem}>
              <strong>Online Group (3+ students):</strong> R100/hour per student
            </div>
            <div style={styles.pricingItem}>
              <strong>In-Person 1-on-1 (Klerksdorp):</strong> R250/hour
            </div>
            <div style={styles.pricingItem}>
              <strong>In-Person Group (3+ students):</strong> R200/hour per student
            </div>
            <div style={styles.pricingItem}>
              <strong>Add-ons:</strong> Study Notes, Exam Packs, WhatsApp Homework Help available
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;