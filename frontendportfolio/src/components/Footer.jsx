// pages/Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:matthew999099@gmail.com">matthew999099@gmail.com</a></p>
          <p>Phone: <a href="tel:+14383880273">+1 438 388 0273</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <p><a href="https://www.linkedin.com/in/matthew-tan-b53b63289/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/Matthewtan9" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>820 Croissant, Quebec, Canada</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Matthew Tan's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
