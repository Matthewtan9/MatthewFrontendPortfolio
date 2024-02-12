import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/HomePage.css';
import axios from 'axios';
import profilePicture from '../images/Profile.jpg';

import { useTranslation } from 'react-i18next'; // Import useTranslation

const HomePage = () => {
  const { t } = useTranslation(); // Use the t function for translations
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('aboutMe'); // Initial section
  const [dotNavigation, setDotNavigation] = useState([true, false]); // Initial dots state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://matbackend-9de9524bac3c.herokuapp.com/users');
        setUsers(response.data);
        setIsVisible(true);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const handleSectionChange = () => {
    setCurrentSection(currentSection === 'aboutMe' ? 'hobbies' : 'aboutMe');
    updateDotNavigation(); // Update dots after manual section change
  };

  const updateDotNavigation = () => {
    // Update the dots state based on the current section
    setDotNavigation(prevDots => prevDots.map((_, index) => index === (currentSection === 'aboutMe' ? 1 : 0)));
  };

  const handleDotClick = (index) => {
    // Handle dot click to switch to the corresponding section
    setCurrentSection(index === 0 ? 'aboutMe' : 'hobbies');
    updateDotNavigation();
  };

  // Automatic section switch every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleSectionChange();
      updateDotNavigation();
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [currentSection]);

  return (  
    <div className="homepage-container">
      <Navbar />
 
      <header className="header-section">
        {users.map((user) => (
          <div key={user.user_id} className="user-details">
            {/* Add the image here */}
            <img src={profilePicture} alt="Profile Picture" 
             style={{
              width: '200px', // Adjust the width as needed
              height: '200px', // Adjust the height as needed
              borderRadius: '50%', // Makes it round
            }}/>

            <div className="section-toggle left-arrow" onClick={handleSectionChange}>
              {/* Show "<" symbol here */}
              <span>&lt;</span>
            </div>
            {currentSection === 'aboutMe' && (
              <section className={`about-me-section slide-up ${isVisible ? 'visible' : ''}`}>
                <h2>{t('aboutMe.greeting', { firstName: user.firstName, lastName: user.lastName })}</h2>
                <p>
                  {t('aboutMe.description')}
                </p>
              </section>
            )}
            {currentSection === 'hobbies' && (
              <section className={`hobby slide-up ${isVisible ? 'visible' : ''}`}>
                <h2>{t('hobbies.title')}</h2>
                <p>
                  {t('hobbies.description')}
                </p>
              </section>
            )}
            <div className="dot-navigation">
              {dotNavigation.map((dot, index) => (
                <div
                  key={index}
                  className={`dot ${dot ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
            <div className="section-toggle right-arrow" onClick={handleSectionChange}>
              {/* Show ">" symbol here */}
              <span>&gt;</span>
            </div>
            <section className={`download-cv-section slide-up ${isVisible ? 'visible' : ''}`}>
              <h2>{t('cv.title')}</h2>
              <p>{t('cv.description')}</p>
              <a
                href="https://drive.google.com/file/d/1sRdWYdzG43keUum_0vFJMjUMaNeW0Qdm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download="Matthew_Tan_CV.pdf" // Set the desired filename
              >
                {t('cv.download')}
              </a>
            </section>
          </div>
        ))}
      </header>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
