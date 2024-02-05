// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Make sure to import the correct CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="navbar-name">Matthew Tan</p>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/experience" className="navbar-link">Experience</Link></li>
        <li className="navbar-item"><Link to="/project" className="navbar-link">Projects</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
