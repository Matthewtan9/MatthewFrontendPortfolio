import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { withTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';
import '../css/NavBar.css';

const Navbar = ({ t }) => {
  const location = useLocation();

  // Scroll to About Me section
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle click on About Me link
  const handleAboutMeClick = (event) => {
    event.preventDefault();
    scrollToAboutMe();
    // After scrolling, navigate to the home page
    window.location.href = '/#about-me'; // Redirect to the home page with anchor
  };

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
              activeClassName="active"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <FontAwesomeIcon icon={faHome} /> {t("navBar.Home")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <a 
              href="/#about-me" 
              className={`navbar-link ${location.pathname === '/#about-me' ? 'active' : ''}`}
              onClick={handleAboutMeClick}
            >
              <FontAwesomeIcon icon={faUser} /> About Me
            </a>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/experience" 
              className="navbar-link"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faBriefcase} /> {t("navBar.Experience")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/project" 
              className="navbar-link"
              activeClassName="active"
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> {t("navBar.Projects")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/contact" 
              className="navbar-link"
              activeClassName="active"
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
