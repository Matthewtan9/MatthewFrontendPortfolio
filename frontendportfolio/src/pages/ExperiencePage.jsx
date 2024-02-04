
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/ExperiencePage.css'; // Import a CSS file for styling

const ExperiencePage = () => {
    return (
        <div className="experience-page">
            <Navbar />

            <h1>My Experiences</h1>

            <Link to="/experience/work" className="experience-link"><section className="experience-section">
                <h2>Job/Workplace</h2>
                <p>This section provides information about my professional work experience.</p>
                Explore Job Experience
            </section></Link>

            <Link to="/experience/class" className="experience-link"><section className="experience-section">
                <h2>Class</h2>
                <p>This section contains details about my educational experiences completed at Cegep Champlain St-Lambert</p>
               Explore Classes Taken
            </section></Link>


            <Link to="/experience/education" className="experience-link"><section className="experience-section">
                <h2>Educations</h2>
                <p>This section contains details about my school education.</p>
                My education
            </section></Link>

    
            <Footer />
        </div>
    );
}

export default ExperiencePage;
