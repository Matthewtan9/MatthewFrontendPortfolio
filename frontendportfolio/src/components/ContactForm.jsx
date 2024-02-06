// ContactForm.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const ContactForm = () => {
  const { t } = useTranslation(); // Use the t function for translations

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">{t('form.nameLabel')}:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">{t('form.emailLabel')}:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject">{t('form.subjectLabel')}:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">{t('form.messageLabel')}:</label>
      <textarea
        id="message"
        name="message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">{t('form.submitButton')}</button>
    </form>
  );
};

export default ContactForm;
