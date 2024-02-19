import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../css/AboutMePage.css';


const AboutMePage = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://matbackend-9de9524bac3c.herokuapp.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const top = aboutMeRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [skills, setSkills] = useState([
    { name: 'Java', level: 90 },
    { name: 'React', level: 60 },
    { name: 'C#', level: 70 },
    // Add more skills with their respective levels
  ]);
  
  return (
    <div className="homepage-container">
  <Navbar />
  <div className="sections-container">
    <div className="left-section about-me-container box">
      <h1 ref={aboutMeRef} id="about-me-section" className="welcome-title">Introduction</h1>
      {users.map((user) => (
        <header key={user.user_id} className="header-section">
          <div className="user-details">
            <section className={`about-me-section slide-up ${isVisible ? 'visible' : ''}`}>
              <h2>{t('aboutMe.greeting', { firstName: user.firstName, lastName: user.lastName })}</h2>
              <p>{t('aboutMe.description')}</p> 
            </section>
            <section className={`hobby slide-up ${isVisible ? 'visible' : ''}`}>
              <h2>{t('hobbies.title')}</h2>
              <p>{t('hobbies.description')}</p>
            </section>
          </div>
        </header>
      ))}
    </div>
    <div className="right-section cv-container box">
    <div className="cv-wrapper">
  <h1>{t('cv.bigTitle')}</h1>
  <section className={`download-cv-section slide-up ${isVisible ? 'visible' : ''}`}>
    <h2>{t('cv.title')}</h2>
    <p>{t('cv.description')}</p>
    <a
      href="https://drive.google.com/file/d/1sRdWYdzG43keUum_0vFJMjUMaNeW0Qdm/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      download="Matthew_Tan_CV.pdf"
      className="download-cv-link"
    >
      <div className="download-icon">⬇️</div>
      {t('cv.download')}
    </a>
  </section>
</div>

 <h1>{t('skill.title')}</h1>
  <section className="skill-section">
    {skills.map((skill) => (
      <div key={skill.name} className="skill">
      <p>{skill.name}</p>
      <div
        className={`skill-bar ${isVisible ? 'animated' : ''}`}
        style={{ '--skill-level': `${skill.level}%` }}
      >
        <span className="percentage">{skill.level}%</span>
      </div>
    </div>
    
    ))}
  </section>
</div>
  </div>
</div>

  );
};

export default AboutMePage;
