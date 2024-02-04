import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Select from 'react-select'; // Import react-select
import '../css/ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProjectTypeChange = (selectedOption) => {
    setSelectedProjectType(selectedOption.value);
  };

  const filteredProjects = projects.filter((project) => {
    const typeMatch =
      selectedProjectType === '' || project.projectType.toLowerCase() === selectedProjectType.toLowerCase();

    return (
      typeMatch &&
      project.projectSkill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar />
      <div className="project-container">
        <h1>Projects</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by project skill"
            value={searchTerm}
            onChange={handleSearch}
          />
          <label htmlFor="projectTypeSearch">Search by Project Type:</label>
          <Select
            id="projectTypeSearch"
            value={{ value: selectedProjectType, label: selectedProjectType }}
            onChange={handleProjectTypeChange}
            options={[
              { value: '', label: 'All Types' },
              { value: 'TEAMWORK', label: 'TEAMWORK' },
              { value: 'INDIVIDUAL', label: 'INDIVIDUAL' },
            ]}
          />
        </div>
        {filteredProjects.map((project) => (
          <div key={project.project_id} className="project-item">
            <section>
              <h2>Name</h2>
              <p>{project.projectName}</p>
            </section>
            <section>
              <h2>Duration</h2>
              <p>{project.projectDuration}</p>
            </section>
            <section>
              <h2>Description</h2>
              <p>{project.projectDescription}</p>
            </section>
            <section>
              <h2>Type</h2>
              <p>{project.projectType}</p>
            </section>
            <section>
              <h2>Skill</h2>
              <p>{project.projectSkill}</p>
            </section>
            <section>
              <h2>Github Link</h2>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </section>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
