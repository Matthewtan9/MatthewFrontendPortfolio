// EducationPage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/EducationPage.css';

const EducationPage = () => {
  const [education, setEducation] = useState([
    {
      education_id: '1',
      institution: 'Champlain College',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      graduation_year: '2023',
    },
    // Add more education entries as needed
    {
      education_id: '2',
      institution: 'Antoine-Brossard',
      degree: 'High School Diploma',
      
      graduation_year: '2019',
    },
  ]);

  useEffect(() => {
    // You can fetch data from an API or other source here if needed
    // For simplicity, data is initialized in the state above
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Navbar />
      <div className="education-container">
        <h1>Education</h1>
        {education.map((edu) => (
          <div key={edu.education_id} className="education-item">
            <section>
              <h2>Institution</h2>
              <p>{edu.institution}</p>
            </section>
            <section>
              <h2>Degree</h2>
              <p>{edu.degree}</p>
            </section>
            <section>
              <h2>Major</h2>
              <p>{edu.major}</p>
            </section>
            <section>
              <h2>Graduation Year</h2>
              <p>{edu.graduation_year}</p>
            </section>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;
