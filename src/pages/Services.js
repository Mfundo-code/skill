// src/pages/Services.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('high-school');
  const sectionRefs = {
    'high-school': useRef(null),
    'college': useRef(null),
    'practical': useRef(null),
    'exam': useRef(null)
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setActiveTab(sectionId);
      
      // Scroll to the section after a short delay to ensure it's rendered
      setTimeout(() => {
        if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
          sectionRefs[sectionId].current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.state]);

  const highSchoolSubjects = [
    {
      title: 'Technical Mathematics',
      description: 'Comprehensive tutoring in technical mathematics concepts, problem-solving techniques, and exam preparation for Grade 10-12 students.',
      icon: '∫',
    },
    {
      title: 'Technical Sciences',
      description: 'In-depth understanding of technical sciences principles, practical applications, and preparation for examinations.',
      icon: '⚗️',
    },
    {
      title: 'Electrical Technology',
      description: 'Theoretical and practical knowledge in electrical technology, including circuits, systems, and safety protocols.',
      icon: '⚡',
    },
    {
      title: 'Mechanical Technology',
      description: 'Comprehensive coverage of mechanical technology concepts, from basic principles to advanced applications.',
      icon: '⚙️',
    },
    {
      title: 'Engineering Graphics & Design',
      description: 'Development of technical drawing skills, CAD principles, and design thinking for engineering applications.',
      icon: '📐',
    },
    {
      title: 'Mathematics & Physical Sciences',
      description: 'Support for mainstream mathematics and physical sciences curriculum, with focus on technical applications.',
      icon: '🔬',
    },
  ];

  const collegeSubjects = [
    {
      title: 'Electrical Engineering N1-N6',
      description: 'Comprehensive tutoring for all electrical engineering subjects from N1 to N6 level.',
      icon: '🔌',
    },
    {
      title: 'Fitting & Machining N1-N6',
      description: 'Theoretical and practical knowledge in fitting, machining, and mechanical engineering principles.',
      icon: '🔧',
    },
    {
      title: 'Mathematics N1-N3',
      description: 'Engineering mathematics concepts, calculations, and problem-solving techniques for N1-N3 levels.',
      icon: '🧮',
    },
    {
      title: 'Technical Drawings',
      description: 'Interpretation and creation of mechanical, electrical, and hydraulic technical drawings.',
      icon: '📊',
    },
    {
      title: 'Certificate of Compliance',
      description: 'Preparation for COC examinations in electrical and plumbing fields.',
      icon: '📝',
    },
    {
      title: 'Practical Skills Training',
      description: 'Hands-on training in electrical installations, mechanical fitting, and fabrication skills.',
      icon: '🛠️',
    },
  ];

  const practicalSkills = [
    {
      title: 'Electrical Installations',
      description: 'Hands-on training in residential and industrial electrical installations, wiring, and safety procedures.',
      icon: '⚡',
    },
    {
      title: 'Mechanical Fitting',
      description: 'Practical skills in mechanical fitting, assembly, and maintenance of machinery and equipment.',
      icon: '🔧',
    },
    {
      title: 'Fabrication & Welding',
      description: 'Training in metal fabrication, welding techniques, and workshop safety practices.',
      icon: '🔥',
    },
    {
      title: 'Technical Drawing Interpretation',
      description: 'Skills to read and interpret engineering drawings, schematics, and technical documentation.',
      icon: '📐',
    },
  ];

  const examPreparation = [
    {
      title: 'Final Exam Preparation',
      description: 'Focused revision sessions, past paper practice, and exam strategy development for final examinations.',
      icon: '📚',
    },
    {
      title: 'Test & Assessment Prep',
      description: 'Targeted preparation for tests, quizzes, and assessments throughout the academic year.',
      icon: '✏️',
    },
    {
      title: 'Certification Exams',
      description: 'Preparation for professional certification exams and trade tests in various technical fields.',
      icon: '🏆',
    },
    {
      title: 'Study Skills & Techniques',
      description: 'Development of effective study habits, time management, and exam preparation strategies.',
      icon: '🧠',
    },
  ];

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
    section: {
      padding: '50px 5%',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '15px 30px',
      margin: '0 10px 10px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f1f5f9',
      color: '#64748b',
    },
    activeTab: {
      backgroundColor: '#4a9dff',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(74, 157, 255, 0.3)',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      borderBottom: '4px solid #2d4da8',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeInUp 0.6s ease forwards',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#4a9dff',
    },
    serviceTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    serviceText: {
      color: '#555',
      lineHeight: '1.6',
    },
  };

  // Add CSS animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'high-school':
        return highSchoolSubjects.map((subject, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{subject.icon}</div>
            <h3 style={styles.serviceTitle}>{subject.title}</h3>
            <p style={styles.serviceText}>{subject.description}</p>
          </div>
        ));
      case 'college':
        return collegeSubjects.map((subject, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{subject.icon}</div>
            <h3 style={styles.serviceTitle}>{subject.title}</h3>
            <p style={styles.serviceText}>{subject.description}</p>
          </div>
        ));
      case 'practical':
        return practicalSkills.map((subject, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{subject.icon}</div>
            <h3 style={styles.serviceTitle}>{subject.title}</h3>
            <p style={styles.serviceText}>{subject.description}</p>
          </div>
        ));
      case 'exam':
        return examPreparation.map((subject, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{subject.icon}</div>
            <h3 style={styles.serviceTitle}>{subject.title}</h3>
            <p style={styles.serviceText}>{subject.description}</p>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Our Tutoring Services</h1>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section style={styles.section}>
        <div style={styles.tabContainer}>
          <button 
            style={activeTab === 'high-school' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('high-school')}
          >
            High School Tutoring
          </button>
          <button 
            style={activeTab === 'college' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('college')}
          >
            College N-Level Courses
          </button>
          <button 
            style={activeTab === 'practical' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('practical')}
          >
            Practical Skills Training
          </button>
          <button 
            style={activeTab === 'exam' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('exam')}
          >
            Exam Preparation
          </button>
        </div>

        {/* Content Sections with Refs */}
        <div ref={sectionRefs['high-school']}>
          {activeTab === 'high-school' && (
            <>
              <h2 style={styles.sectionTitle}>High School Subjects (Grade 10-12)</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['college']}>
          {activeTab === 'college' && (
            <>
              <h2 style={styles.sectionTitle}>College & N-Level Courses</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['practical']}>
          {activeTab === 'practical' && (
            <>
              <h2 style={styles.sectionTitle}>Practical Skills Training</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['exam']}>
          {activeTab === 'exam' && (
            <>
              <h2 style={styles.sectionTitle}>Exam Preparation</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;