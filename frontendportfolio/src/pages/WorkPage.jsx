import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../css/WorkPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const WorkPage = () => {
  const { t } = useTranslation(); // Use the t function for translations
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://matbackend-9de9524bac3c.herokuapp.com/works');
        setWorks(response.data);
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const goBack = () => {
    window.history.back(); // Navigate back using browser's built-in functionality
  };

  return (
    <div>
      <Navbar />
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </button>
      <div className="work-container">
        <h1>{t('work.work')}</h1>
        {works.map((work) => (
          <div key={work.id} className="work-item">
            <section>
              <h2>{t('work.jobTitle')}</h2>
              <p>{work.workTitle}</p>
            </section>
            <section>
              <h2>{t('work.place')}</h2>
              <p>{work.workPlaceName}</p>
            </section>
            <section>
              <h2>{t('work.location')}</h2>
              <p>{work.location}</p>
            </section>
            <section>
              <h2>{t('work.duration')}</h2>
              <p>{work.duration}</p>
            </section>
            <section>
              <h2>{t('work.status')}</h2>
              <p>{work.status}</p>
            </section>
            <section>
              <h2>{t('work.description')}</h2>
              <p>{work.description}</p>
            </section>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default WorkPage;
