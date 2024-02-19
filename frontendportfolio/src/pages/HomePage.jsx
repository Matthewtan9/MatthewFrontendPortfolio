// HomePage.js
import React, { useEffect, useRef, useState } from 'react';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import AboutMePage from './AboutMePage';
import profilePicture from '../images/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HomePage = ({ name }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [typingText, setTypingText] = useState('');
  const { t } = useTranslation();
  const [isTyping, setIsTyping] = useState(true);
  // const description = "I am a Software Developer";
  const description = t('homePage.type');
  const typingDelay = 100;
  const retypeDelay = 3000;
  const pauseDuration = 3000;

  const aboutMeRef = useRef(null);

  useEffect(() => {
    setFadeIn(true);
    typeText(description, 0);

    function typeText(text, index) {
      if (index <= text.length) {
        setTypingText(text.substring(0, index));
        setTimeout(() => {
          typeText(text, index + 1);
        }, typingDelay);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setTypingText('');
          setIsTyping(true);
          typeText(description, 0);
        }, pauseDuration);
      }
    }

    return () => clearInterval();
  }, []);

  const scrollToAbout = () => {
    if (aboutMeRef.current) {
      window.scrollTo({
        top: aboutMeRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="homepage-border">
      <div className={`homepage-container ${fadeIn ? 'fade-in' : ''}`}>
        <NavBar scrollToAbout={scrollToAbout} />
        <h1 className='Title'>{t('homePage.greeting')}</h1>
        <div className="content">
          <div className="text">
            <h1 className="welcome">Matthew Tan</h1>
            <h2 className={`name ${isTyping ? 'typing-animation' : ''}`}>
              {typingText}
              <span className={`vertical-line ${!isTyping ? 'blink-animation' : ''}`}>|</span>
            </h2>
            <div className="social-icons">
              <a href="https://github.com/Matthewtan9" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/matthew-tan-b53b63289/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
        <span className="scroll-text">{t('homePage.scroll')}</span>
      </div>
      
      <AboutMePage ref={aboutMeRef}/>
    </div>
  );
};

export default HomePage;
