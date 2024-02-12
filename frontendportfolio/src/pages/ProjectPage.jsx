// ProjectPage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Select from 'react-select'; // Import react-select
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../css/ProjectPage.css';

const ProjectPage = () => {
  const { t } = useTranslation(); // Use the t function for translations
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://matbackend-9de9524bac3c.herokuapp.com/projects');
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
        <h1>{t('project.title')}</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder={t('project.searchPlaceholder')}
            value={searchTerm}
            onChange={handleSearch}
          />
          <label htmlFor="projectTypeSearch">{t('project.searchLabel')}</label>
          <Select
            id="projectTypeSearch"
            value={{ value: selectedProjectType, label: selectedProjectType }}
            onChange={handleProjectTypeChange}
            options={[
              { value: '', label: t('project.allTypes') },
              { value: 'TEAMWORK', label: t('project.teamwork') },
              { value: 'INDIVIDUAL', label: t('project.individual') },
            ]}
          />
        </div>
        {filteredProjects.map((project) => (
          <div key={project.project_id} className="project-item">
            <section>
              <h2>{t('project.name')}</h2>
              <p>{project.projectName}</p>
            </section>
            <section>
              <h2>{t('project.duration')}</h2>
              <p>{project.projectDuration}</p>
            </section>
            <section>
              <h2>{t('project.description')}</h2>
              <p>{project.projectDescription}</p>
            </section>
            <section>
              <h2>{t('project.type')}</h2>
              <p>{project.projectType}</p>
            </section>
            <section>
              <h2>{t('project.skill')}</h2>
              <p>{project.projectSkill}</p>
            </section>
            <section>
              <h2>{t('project.githubLink')}</h2>
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
