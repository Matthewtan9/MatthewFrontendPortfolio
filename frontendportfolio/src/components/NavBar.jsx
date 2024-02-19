import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { withTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';
import '../css/NavBar.css';

const Navbar = ({ t }) => {
  const location = useLocation();
  const [aboutMeActive, setAboutMeActive] = useState(false); // State to store whether the "About Me" section is active

  // Scroll event handler to check if the "About Me" section is in view
  const handleScroll = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
      const scrollPosition = window.scrollY;
      const aboutMeTop = aboutMeSection.offsetTop;
      const aboutMeBottom = aboutMeTop + aboutMeSection.offsetHeight;
      const viewportHeight = window.innerHeight;
  
      // Calculate the threshold where "About Me" section starts to enter the viewport
      const threshold = aboutMeTop - 0.5 * viewportHeight; // Adjust 0.5 as needed
  
      if (scrollPosition >= threshold && scrollPosition < aboutMeBottom) {
        setAboutMeActive(true);
      } else {
        setAboutMeActive(false);
      }
    }
  };
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">  
        <LanguageSelector />
        <p className="navbar-name">Matthew Tan</p>
        <ul className="navbar-list">
          <li className="navbar-item">
          <NavLink 
  to="/" 
  exact 
  className="navbar-link"
  onClick={(e) => {
    if (aboutMeActive) {
      e.preventDefault(); // Prevent default link behavior
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setAboutMeActive(false); // Set aboutMeActive to false when the homepage link is clicked
    }
  }}
>
  <FontAwesomeIcon icon={faHome} /> {t("navBar.Home")}
</NavLink>





          </li>
          <li className="navbar-item">
            <a 
              href="/#about-me" 
              className={`navbar-link ${aboutMeActive ? 'active' : ''}`}
              onClick={() => {
                const aboutMeSection = document.getElementById('about-me-section');
                if (aboutMeSection) {
                  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FontAwesomeIcon icon={faUser} /> {t("navBar.About")}
            </a>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/experience" 
              className={`navbar-link ${location.pathname === '/experience' ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={faBriefcase} /> {t("navBar.Experience")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/project" 
              className={`navbar-link ${location.pathname === '/project' ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> {t("navBar.Projects")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={faEnvelope} /> {t("navBar.Contact")}
            </NavLink>
          </li> 
        </ul> 
        <div className="footer-bottom">
          <p>&copy; 2024 {t("footer.Matthew Tan's Portfolio. All rights reserved.")}</p>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation()(Navbar);
