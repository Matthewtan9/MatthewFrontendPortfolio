// pages/Footer.js
import React from 'react';
import '../css/Footer.css';
import linkedinLogo from '../images/linkedin-logo.png'; // Replace with the actual path to your LinkedIn logo
import githubLogo from '../images/github-logo.png'; // Replace with the actual path to your GitHub logo
import emailIcon from '../images/Gmail.jpg'; // Replace with the actual path to your email icon
import phoneIcon from '../images/phone.jpg'; // Replace with the actual path to your phone icon
import mapIcon from '../images/map.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            { /* Replace with your email icon */}
            <img src={emailIcon} alt="Email Icon" />
            <a href="mailto:matthew999099@gmail.com">matthew999099@gmail.com</a>
          </p>
          <p>
            { /* Replace with your phone icon */}
            <img src={phoneIcon} alt="Phone Icon" />
            <a href="tel:+14383880273">+1 438 388 0273</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <p>
            <a href="https://www.linkedin.com/in/matthew-tan-b53b63289/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/Matthewtan9" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" />
              GitHub
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
        <img src={mapIcon} alt="map Icon" />
          820 Croissant, Quebec, Canada
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Matthew Tan's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
