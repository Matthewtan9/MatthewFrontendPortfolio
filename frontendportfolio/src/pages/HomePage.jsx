// pages/HomePage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/HomePage.css';
import axios from 'axios';


const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('aboutMe'); // Initial section
  const [dotNavigation, setDotNavigation] = useState([true, false]); // Initial dots state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
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
            <img
  src={process.env.PUBLIC_URL + '/images/Capture.JPG'}
  alt="Your Name"
  className="user-photo"
/>




            <div className="section-toggle left-arrow" onClick={handleSectionChange}>
              {/* Show "<" symbol here */}
              <span>&lt;</span>
            </div>
            {currentSection === 'aboutMe' && (
              <section className={`about-me-section slide-up ${isVisible ? 'visible' : ''}`}>
                <h2>Hello! I'm {user.firstName} {user.lastName},</h2>
                <p>
                  I am a software developer who pursued a major in computer science at Champlain College. I've passionately honed my skills and collaborated on various projects with diverse teams.
                </p>
              </section>
            )}
            {currentSection === 'hobbies' && (
              <section className={`hobby slide-up ${isVisible ? 'visible' : ''}`}>
                <h2>Hobbies</h2>
                <p>
                  What I enjoy doing on my free time is playing video games since I have a passion for it, and I love watching anime, a Japanese form of entertainment that intrigues me.
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
              <h2>My CV</h2>
              <p>Click the link below to download my CV:</p>
              <a
                href="https://drive.google.com/file/d/1sRdWYdzG43keUum_0vFJMjUMaNeW0Qdm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download="Matthew_Tan_CV.pdf" // Set the desired filename
              >
                Download CV
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
