import React, { useEffect, useState } from 'react';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import AboutMePage from './AboutMePage';
import profilePicture from '../images/Profile.png'; // Import your profile picture
import ExperiencePage from './ExperiencePage';

const HomePage = ({ name }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Track whether currently typing or not
  const [showVerticalLine, setShowVerticalLine] = useState(true); // Track whether to show the vertical line or not
  const description = "I am a Software Developer";
  const typingDelay = 100; // Delay between each character
  const retypeDelay = 3000; // Time interval to retype the text
  const pauseDuration = 3000; // Time to pause before resetting typing

  useEffect(() => {
    // Trigger animation after component mounts
    setFadeIn(true);

    // Start typing effect
    typeText(description, 0);

    // Function to handle typing effect and loop
    function typeText(text, index) {
      if (index <= text.length) {
        setTypingText(text.substring(0, index));
        setTimeout(() => {
          typeText(text, index + 1);
        }, typingDelay);
      } else {
        setIsTyping(false); // Typing finished, set isTyping to false
        setTimeout(() => {
          setShowVerticalLine(!showVerticalLine); // Toggle vertical line visibility
          setTypingText('');
          setIsTyping(true);
          setTimeout(() => {
            typeText(description, 0);
          }, typingDelay);
        }, pauseDuration);
      }
    }

    // Clear interval on component unmount
    return () => clearInterval();
  }, []);

  // Smooth scrolling function
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Refs for sections
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);

  return (
    <div className="homepage-border">
      <div className={`homepage-container ${fadeIn ? 'fade-in' : ''}`}>
        <NavBar scrollToAbout={() => scrollToRef(aboutMeRef)} scrollToExperience={() => scrollToRef(experienceRef)} />
        <h1>Welcome To My Portfolio</h1>
        <div className="content">
          <div className="text">
            <h1 className="welcome">Matthew Tan</h1>
            <h2 className={`name ${isTyping ? 'typing-animation' : ''}`}>
              {typingText}
              <span className={`vertical-line ${!isTyping ? 'blink-animation' : ''}`}>|</span>
            </h2>
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
        </div>
      </div>
      <AboutMePage/>
    </div>
  );
};

export default HomePage;
