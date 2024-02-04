// WorkPage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/WorkPage.css';

const WorkPage = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/works');
        setWorks(response.data);
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Navbar />
      <div className="work-container">
        <h1>Job Worked</h1>
        {works.map((work) => (
          <div key={work.id} className="work-item">
            <section>
              <h2>Title</h2>
              <p>{work.workTitle}</p>
            </section>
            <section>
              <h2>Place</h2>
              <p>{work.workPlaceName}</p>
            </section>
            <section>
              <h2>Location</h2>
              <p>{work.location}</p>
            </section>
            <section>
              <h2>Duration</h2>
              <p>{work.duration}</p>
            </section>
            <section>
              <h2>Status</h2>
              <p>{work.status}</p>
            </section>
            <section>
              <h2>Description</h2>
              <p>{work.description}</p>
            </section>
            
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
