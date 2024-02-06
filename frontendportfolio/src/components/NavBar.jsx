import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { withTranslation } from 'react-i18next'; // Change from useTranslation to withTranslation
import LanguageSelector from './language-selector';

const Navbar = ({ t }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="navbar-name">Matthew Tan</p>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">{t("navBar.Home")}</Link></li>
        <li className="navbar-item"><Link to="/experience" className="navbar-link">{t("navBar.Experience")}</Link></li>
        <li className="navbar-item"><Link to="/project" className="navbar-link">{t("navBar.Projects")}</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">{t("navBar.Contact")}</Link></li>
      </ul>
      <LanguageSelector />
    </nav>
  );
};

export default withTranslation()(Navbar); // Wrap Navbar component with withTranslation HOC
