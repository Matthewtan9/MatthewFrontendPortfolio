// ClassPage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Select from 'react-select';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../css/ClassPage.css';

const ClassPage = () => {
  const { t } = useTranslation(); // Use the t function for translations
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://matbackend-9de9524bac3c.herokuapp.com/classes');
        setClasses(response.data);

        // Extract all unique skills from classes
        const uniqueSkills = Array.from(
          new Set(response.data.flatMap((classItem) => classItem.skills.split(',').map((s) => s.trim())))
        );

        // Set the unique skills for the skill search options, sorted alphabetically
        setAllSkills(
          uniqueSkills
            .map((skill) => ({ value: skill, label: skill }))
            .sort((a, b) => a.label.localeCompare(b.label))
        );
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const handleSkillChange = (selectedOption) => {
    setSelectedSkill(selectedOption.value);
  };

  const handleSemesterChange = (selectedOption) => {
    setSelectedSemester(selectedOption.value);
  };

  // Function to format semester string
  const formatSemester = (semester) => {
    const numericPart = semester.replace(/[^0-9]/g, '');
    return t('class.semester', { semester: numericPart });
  };

  const filteredClasses = classes.filter((classItem) => {
    const skillMatch =
      selectedSkill === '' || classItem.skills.toLowerCase().includes(selectedSkill.toLowerCase());

    const searchTermMatch =
      classItem.skills.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.teacherName.toLowerCase().includes(searchTerm.toLowerCase());

    const semesterMatch =
      selectedSemester === '' ||
      classItem.semester.toLowerCase().includes(selectedSemester.toLowerCase());

    return skillMatch && searchTermMatch && semesterMatch;
  });

  return (
    <div>
      <Navbar />
      <div className="class-container">
        <h1>{t('class.classes')}</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder={t('class.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <label htmlFor="skillSearch">{t('class.searchSkill')}</label>
          <Select
            id="skillSearch"
            value={{ value: selectedSkill, label: selectedSkill }}
            onChange={handleSkillChange}
            options={[{ value: '', label: t('class.allSkills') }, ...allSkills]}
          />
          <label htmlFor="semesterSearch">{t('class.searchSemester')}</label>
          <Select
            id="semesterSearch"
            value={{ value: selectedSemester, label: selectedSemester }}
            onChange={handleSemesterChange}
            options={[
              { value: '', label: t('class.allSemesters') },
              { value: '1', label: t('class.semester', { semester: '1' }) },
              { value: '2', label: t('class.semester', { semester: '2' }) },
              { value: '3', label: t('class.semester', { semester: '3' }) },
              { value: '4', label: t('class.semester', { semester: '4' }) },
              { value: '5', label: t('class.semester', { semester: '5' }) },
              { value: '6', label: t('class.semester', { semester: '6' }) },
            ]}
          />
        </div>
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="class-details">
            <h2>{classItem.classId}</h2>
            <h2>{formatSemester(classItem.semester)}</h2>
            <h2>{classItem.className}</h2>
            <p>{t('class.teacher')} {classItem.teacherName}</p>
            <p>{t('class.description')} {classItem.description}</p>
            <p>{t('class.skills')} {classItem.skills}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ClassPage;
