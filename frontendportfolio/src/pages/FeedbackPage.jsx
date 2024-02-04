// SubmitFeedbackPage.js

import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/FeedbackPage.css'; // Make sure to create this CSS file for styling

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement your feedback submission logic here
      console.log('Rating:', rating);
      console.log('Feedback:', feedback);
      // You may want to send the feedback to your server or perform other actions
    };
  
    return (
      <div>
        <Navbar />
        <div className="feedback-form-container">
          <h1>Submit Feedback</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
  
            <label htmlFor="rating">Rate your experience:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
  
            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default FeedbackPage;