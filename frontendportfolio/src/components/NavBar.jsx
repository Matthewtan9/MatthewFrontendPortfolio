// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faUser, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import icons from FontAwesome library

import { withTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';
import '../css/NavBar.css';

const Navbar = ({ t }) => {
  const [activeLink, setActiveLink] = useState("");

  // Function to handle click on nav links
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
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
              className={`navbar-link ${activeLink === "/" && "active"}`} 
              onClick={() => handleNavLinkClick("/")}
            >
              <FontAwesomeIcon icon={faHome} /> {t("navBar.Home")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/about" 
              className={`navbar-link ${activeLink === "/about" && "active"}`} 
              onClick={() => handleNavLinkClick("/about")}
            >
              <FontAwesomeIcon icon={faUser} /> About Me
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/experience" 
              className={`navbar-link ${activeLink === "/experience" && "active"}`} 
              onClick={() => handleNavLinkClick("/experience")}
            >
              <FontAwesomeIcon icon={faBriefcase} /> {t("navBar.Experience")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/project" 
              className={`navbar-link ${activeLink === "/project" && "active"}`} 
              onClick={() => handleNavLinkClick("/project")}
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> {t("navBar.Projects")}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/contact" 
              className={`navbar-link ${activeLink === "/contact" && "active"}`} 
              onClick={() => handleNavLinkClick("/contact")}
            >
              <FontAwesomeIcon icon={faEnvelope} /> {t("navBar.Contact")}
            </NavLink>
          </li> 
        </ul> 
        <div className="footer-bottom">
        <p>&copy; 2024 {t("footer.Matthew Tan's Portfolio. All rights reserved.")}</p>
      </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 {t("footer.Matthew Tan's Portfolio. All rights reserved.")}</p>
      </div>
    </nav>
  );
};

export default withTranslation()(Navbar);
