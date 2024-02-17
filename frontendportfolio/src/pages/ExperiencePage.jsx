import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/ExperiencePage.css'; // Import a CSS file for styling
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ExperiencePage = () => {
    const { t } = useTranslation(); // Use the t function for translations

    return (
        <div className="experience-page">
            <Navbar />
            <div className="experience-content">
            <h1 className="welcome-title">{t('Experience')}</h1>

                <Link to="/experience/work" className="experience-link">
                    <section className="experience-section">
                        <h2>{t('experience.job')}</h2>
                        <p>{t('experience.jobDescription')}</p>
                        {t('experience.exploreJob')}
                    </section>
                </Link>

                <Link to="/experience/class" className="experience-link">
                    <section className="experience-section">
                        <h2>{t('experience.class')}</h2>
                        <p>{t('experience.classDescription')}</p>
                        {t('experience.exploreClass')}
                    </section>
                </Link>

                <Link to="/experience/education" className="experience-link">
                    <section className="experience-section">
                        <h2>{t('experience.education')}</h2>
                        <p>{t('experience.educationDescription')}</p>
                        {t('experience.exploreEducation')}
                    </section>
                </Link>
            </div>
     
        </div>
    );
}

export default ExperiencePage;
