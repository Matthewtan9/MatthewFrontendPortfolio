import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../css/ContactPage.css';

const ContactPage = () => {
  return (
    <div>
      <Navbar /><h1>Contact Me</h1>

    <div className="contact-container">    
  {/* Contact Form Section */}
    <div className="contact-form-section">
          <h3>Contact Form</h3>
          <ContactForm />
        </div>
        {/* Contact Information Section */}
        <div className="contact-info-section">
          <div className="contact-section">
            <h3>Contact Information</h3>
            <p>Email: <a href="mailto:matthew999099@gmail.com">matthew999099@gmail.com</a></p>
            <p>Phone: <a href="tel:+14383880273">+1 438 388 0273</a></p>
          </div>

          <div className="contact-section">
            <h3>Follow Me</h3>
            <p><a href="https://www.linkedin.com/in/matthew-tan-b53b63289/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/Matthewtan9" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>

          <div className="contact-section">
            <h3>Address</h3>
            <p>820 Croissant, Quebec, Canada</p>
          </div>
        </div>

       
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
