// ContactPage.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../css/ContactPage.css';
import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/github-logo.png';
import emailIcon from '../images/Gmail.jpg';
import phoneIcon from '../images/phone.jpg';
import mapIcon from '../images/map.png';

const ContactPage = () => {
  const { t } = useTranslation(); // Use the t function for translations

  return (
    <div>
      <Navbar />
      <h1>{t('contact.title')}</h1>

      <div className="contact-container">
        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h3>{t('contact.formTitle')}</h3>
          <ContactForm />
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-section">
          <div className="contact-section">
            <h3>{t('contact.infoTitle')}</h3>
            <p>
              <img src={emailIcon} alt="Email Icon" />{' '}
              <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
            </p>
            <p>
              <img src={phoneIcon} alt="Phone Icon" />
              <a href={`tel:${t('contact.phoneNumber')}`}>{t('contact.phoneNumber')}</a>
            </p>
          </div>

          <div className="contact-section">
            <h3>{t('contact.followTitle')}</h3>
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

          <div className="contact-section">
            <h3>{t('contact.addressTitle')}</h3>
            <p>
              <img src={mapIcon} alt="Map Icon" />
              {t('contact.address')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
