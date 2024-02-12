import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../css/Form.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your public API key
    emailjs.init('_Z6vGFs1xmHGnG6yn');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_uff245j', 'template_d5550rl', e.target);
      console.log('Email sent successfully');
      setFormData({
        name: '',
        senderEmail: '',
        subject: '',
        message: '',
      });
      setNotification('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification('Error sending email');
    }

    // Clear the notification after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      {notification && (
        <div className={`notification ${notification.includes('successfully') ? 'success' : 'error'}`}>
          <p>{notification}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="senderEmail">Your Email:</label>
        <input
          type="email"
          id="senderEmail"
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
