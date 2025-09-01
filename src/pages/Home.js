// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaBook, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaCertificate,
  FaArrowRight
} from 'react-icons/fa';

// Constants (unchanged)
const STATS = [
  { value: '95%', label: 'Student Success' },
  { value: '100+', label: 'Students Helped' },
  { value: '20+', label: 'Subjects' },
];

const SERVICES = [
  {
    id: 'high-school',
    icon: <FaUserGraduate />,
    title: 'High School Tutoring',
    description: 'Grade 10-12 tutoring in Technical Mathematics, Sciences, and all technical subjects.'
  },
  {
    id: 'college',
    icon: <FaCertificate />,
    title: 'College N-Level Courses',
    description: 'Comprehensive tutoring for N1-N6 courses in engineering and technical fields.'
  },
  {
    id: 'practical',
    icon: <FaChalkboardTeacher />,
    title: 'Practical Skills Training',
    description: 'Hands-on training in electrical, mechanical, and fabrication skills.'
  },
  {
    id: 'exam',
    icon: <FaBook />,
    title: 'Exam Preparation',
    description: 'Focused preparation for final exams, tests, and certification assessments.'
  }
];

const FEATURES = [
  {
    title: 'Online & In-Person',
    description: 'Flexible tutoring options to suit your schedule and learning preferences.'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Available during weekdays, evenings, and weekends to accommodate your schedule.'
  },
  {
    title: 'Group Discounts',
    description: 'Special rates for group sessions, making quality tutoring more affordable.'
  }
];

// Hero Slides Data without images
const HERO_SLIDES = [
  {
    title: "Expert Tutoring for Technical Subjects",
    subtitle: "Grade 10-12 and college-level tutoring by qualified professionals with industry experience. We help students excel in technical subjects and prepare for successful careers.",
    buttonText: "Start Learning Today",
    navigateTo: '/contact'
  },
  {
    title: "High School Tutoring",
    subtitle: "Grade 10-12 tutoring in Technical Mathematics, Sciences, and all technical subjects.",
    buttonText: "Learn More",
    navigateTo: '/services',
    serviceId: 'high-school'
  },
  {
    title: "College N-Level Courses",
    subtitle: "Comprehensive tutoring for N1-N6 courses in engineering and technical fields.",
    buttonText: "Learn More",
    navigateTo: '/services',
    serviceId: 'college'
  },
  {
    title: "Practical Skills Training",
    subtitle: "Hands-on training in electrical, mechanical, and fabrication skills.",
    buttonText: "Learn More",
    navigateTo: '/services',
    serviceId: 'practical'
  },
  {
    title: "Exam Preparation",
    subtitle: "Focused preparation for final exams, tests, and certification assessments.",
    buttonText: "Learn More",
    navigateTo: '/services',
    serviceId: 'exam'
  }
];

// Components
const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setTransition(true);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    const slide = HERO_SLIDES[currentSlide];
    if (slide.serviceId) {
      navigate(slide.navigateTo, { state: { scrollTo: slide.serviceId } });
    } else {
      navigate(slide.navigateTo);
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <div style={styles.sliderContainer}>
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                opacity: currentSlide === index ? 1 : 0,
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                transition: transition ? 'opacity 0.8s ease, transform 0.8s ease' : 'none',
              }}
            >
              <div style={styles.textContent}>
                <h1 style={{...styles.heroTitle, fontSize: isMobile ? '2rem' : '3rem'}}>
                  {slide.title}
                </h1>
                <p style={{...styles.heroSubtitle, fontSize: isMobile ? '1rem' : '1.3rem'}}>
                  {slide.subtitle}
                </p>
                <div style={styles.buttonContainer}>
                  <button 
                    style={{
                      ...styles.ctaButton,
                      padding: isMobile ? '12px 20px' : '15px 40px',
                      minHeight: isMobile ? '50px' : 'auto',
                    }}
                    onClick={handleButtonClick}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.sliderDots}>
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.sliderDot,
                backgroundColor: currentSlide === index ? '#4a9dff' : 'rgba(255, 255, 255, 0.5)'
              }}
              onClick={() => {
                setTransition(false);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setTransition(true);
                }, 100);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => (
  <section style={{...styles.section, backgroundColor: '#f1f5f9', padding: '40px 20px'}}>
    <div style={styles.container}>
      <div style={styles.statsContainer}>
        {STATS.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleLearnMore = (serviceId) => {
    navigate('/services', { state: { scrollTo: serviceId } });
  };

  return (
    <section style={{...styles.section, padding: '60px 20px'}}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Our Tutoring Services</h2>
        <p style={{...styles.sectionSubtitle, marginBottom: '40px'}}>
          We provide comprehensive tutoring services for high school and college students, 
          focusing on technical subjects that are essential for engineering and trade careers.
        </p>
        
        <div style={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              onLearnMore={() => handleLearnMore(service.id)} 
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, onLearnMore, isMobile }) => (
  <div style={styles.serviceCard}>
    <div style={styles.serviceIcon}>{service.icon}</div>
    <h3 style={styles.serviceTitle}>{service.title}</h3>
    <p style={styles.serviceDescription}>{service.description}</p>
    <div style={styles.buttonContainer}>
      <button 
        style={{
          ...styles.learnMoreButton,
          minHeight: isMobile ? '44px' : 'auto',
          padding: isMobile ? '10px 16px' : '10px 20px',
        }}
        onClick={onLearnMore}
      >
        Learn More <FaArrowRight style={{ marginLeft: '8px' }} />
      </button>
    </div>
  </div>
);

const WhyUsSection = () => {
  // Background images for each feature
  const featureBackgrounds = [
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Online tutoring
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Flexible scheduling
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Group study
  ];

  return (
    <section style={{...styles.section, ...styles.sectionDark, padding: '60px 20px'}}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Why Choose SkillHive Tutoring?</h2>
        <p style={{...styles.sectionSubtitle, marginBottom: '40px'}}>
          With our industry experience and teaching qualifications, we provide exceptional 
          tutoring that helps students succeed academically and prepare for real-world careers.
        </p>
        
        <div style={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              backgroundImage={featureBackgrounds[index]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, backgroundImage }) => (
  <div style={{...styles.featureCard, backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`}}>
    <div style={styles.featureContent}>
      <h3 style={{...styles.featureTitle, color: 'white'}}>{feature.title}</h3>
      <p style={{...styles.featureDescription, color: 'rgba(255, 255, 255, 0.9)'}}>{feature.description}</p>
    </div>
  </div>
);

const CTASection = ({ onButtonClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{...styles.ctaSection, padding: isMobile ? '60px 20px' : '80px 20px'}}>
      <div style={styles.container}>
        <h2 style={{...styles.ctaTitle, fontSize: isMobile ? '2rem' : '2.5rem'}}>
          Ready to Excel in Your Studies?
        </h2>
        <p style={{...styles.ctaText, marginBottom: '30px', fontSize: isMobile ? '1rem' : '1.2rem'}}>
          Contact us today to schedule a tutoring session and start your journey toward academic success.
        </p>
        <div style={styles.buttonContainer}>
          <button 
            style={{
              ...styles.ctaButton, 
              backgroundColor: 'white', 
              color: '#1a3a8f',
              padding: isMobile ? '12px 24px' : '15px 40px',
              minHeight: isMobile ? '50px' : 'auto',
            }}
            onClick={onButtonClick}
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

// Updated Styles
const styles = {
  hero: {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
  },
  sliderContainer: {
    position: 'relative',
    height: '400px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textContent: {
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.2',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  heroSubtitle: {
    fontWeight: '400',
    marginBottom: '40px',
    opacity: '0.95',
    lineHeight: '1.6',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  sliderDots: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  sliderDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: '#4a9dff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#3a8de8',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
    }
  },
  section: {
    padding: '60px 20px',
  },
  sectionDark: {
    backgroundColor: '#f8fafc',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#0a1a4d',
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#64748b',
    maxWidth: '800px',
    margin: '0 auto 60px',
    lineHeight: '1.7',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    margin: '40px 0',
  },
  statCard: {
    textAlign: 'center',
    padding: '20px',
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#4a9dff',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#0a1a4d',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '320px',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    }
  },
  serviceIcon: {
    fontSize: '2.5rem',
    color: '#4a9dff',
    marginBottom: '20px',
  },
  serviceTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#0a1a4d',
  },
  serviceDescription: {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '20px',
    flexGrow: 1,
  },
  learnMoreButton: {
    backgroundColor: 'transparent',
    color: '#4a9dff',
    border: '2px solid #4a9dff',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#4a9dff',
      color: 'white',
    }
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  featureCard: {
    borderRadius: '10px',
    padding: '30px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    }
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '15px',
  },
  featureDescription: {
    lineHeight: '1.7',
  },
  ctaSection: {
    backgroundImage: 'linear-gradient(rgba(179, 197, 249, 0.1), rgba(26, 58, 143, 0.9)), url("https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
  },
  ctaTitle: {
    fontWeight: '700',
    marginBottom: '20px',
  },
  ctaText: {
    maxWidth: '800px',
    margin: '0 auto 30px',
    lineHeight: '1.7',
    opacity: '0.9',
  },
};

// Main Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection onButtonClick={() => navigate('/contact')} />
    </div>
  );
};

export default Home;