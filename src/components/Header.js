// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBook, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/skill.png'; // Adjust the path based on your actual file structure

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const styles = {
    header: {
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
      color: '#1a3a8f',
      padding: '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      height: '50px', // Fixed height for logo container
    },
    logoImage: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain',
    },
    desktopNav: {
      display: isMobile ? 'none' : 'flex',
      gap: '15px',
    },
    navLink: {
      color: '#1a3a8f',
      textDecoration: 'none',
      padding: '10px 20px',
      borderRadius: '30px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(26, 58, 143, 0.05)',
      ':hover': {
        background: 'rgba(26, 58, 143, 0.1)',
        transform: 'translateY(-2px)',
      }
    },
    mobileMenuButton: {
      background: 'rgba(26, 58, 143, 0.1)',
      border: 'none',
      color: '#1a3a8f',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      fontSize: '1.3rem',
    },
    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 998,
      display: mobileMenuOpen ? 'block' : 'none',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '280px',
      background: '#ffffff',
      zIndex: 999,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '-2px 0 15px rgba(0,0,0,0.1)',
    },
    mobileNavLink: {
      color: '#1a3a8f',
      textDecoration: 'none',
      padding: '15px',
      borderRadius: '8px',
      background: 'rgba(26, 58, 143, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(26, 58, 143, 0.1)',
      }
    },
    closeButton: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      color: '#1a3a8f',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '10px',
    }
  };

  return (
    <header style={styles.header}>
      <div 
        style={styles.logoContainer}
        onClick={() => navigate('/')}
      >
        <img 
          src={logo} 
          alt="SKILLHIVE Logo" 
          style={styles.logoImage}
        />
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav style={styles.desktopNav}>
        <Link to="/" style={styles.navLink}>
          <FaHome /> Home
        </Link>
        <Link to="/services" style={styles.navLink}>
          <FaBook /> Services
        </Link>
        <Link to="/about" style={styles.navLink}>
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" style={styles.navLink}>
          <FaEnvelope /> Contact
        </Link>
      </nav>

      {/* Mobile Menu Button - Only shown on mobile */}
      <button 
        style={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        style={styles.mobileMenuOverlay} 
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Drawer */}
      <div style={styles.mobileMenu}>
        
        <Link to="/" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaHome /> Home
        </Link>
        <Link to="/services" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaBook /> Subjects
        </Link>
        <Link to="/about" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaEnvelope /> Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;