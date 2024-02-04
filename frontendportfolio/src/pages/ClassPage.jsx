import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Select from 'react-select';
import '../css/ClassPage.css';

const ClassPage = () => {
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/classes');
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
    return `Semester ${numericPart}`;
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
        <h1>Classes</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by class name or teacher"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <label htmlFor="skillSearch">Search by Skill:</label>
          <Select
            id="skillSearch"
            value={{ value: selectedSkill, label: selectedSkill }}
            onChange={handleSkillChange}
            options={[{ value: '', label: 'All Skills' }, ...allSkills]}
          />
          <label htmlFor="semesterSearch">Search by Semester:</label>
          <Select
            id="semesterSearch"
            value={{ value: selectedSemester, label: selectedSemester }}
            onChange={handleSemesterChange}
            options={[
              { value: '', label: 'All Semesters' },
              { value: '1', label: 'Semester 1' },
              { value: '2', label: 'Semester 2' },
              { value: '3', label: 'Semester 3' },
              { value: '4', label: 'Semester 4' },
              { value: '5', label: 'Semester 5' },
              { value: '6', label: 'Semester 6' },
            ]}
          />
        </div>
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="class-details">
            <h2>{classItem.classId}</h2>
            <h2>{formatSemester(classItem.semester)}</h2>
            <h2>{classItem.className}</h2>
            <p>Teacher: {classItem.teacherName}</p>
            <p>Description: {classItem.description}</p>
            <p>Skills: {classItem.skills}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ClassPage;
