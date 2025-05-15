import React, { useState } from 'react';
import { Box, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios'; // Import axios for HTTP requests

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [email, setEmail] = useState(''); // State for the email field

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend
    const feedbackData = {
      email, // Include the email
      feedback,
      rating,
      experience,
      suggestions,
    };

    // Send feedback to the backend API
    axios.post('http://localhost:8080/addfeedback', feedbackData)
      .then((res) => {
        console.log(res.data);
        alert('Feedback submitted successfully! Thank you!');
        // Reset form fields after successful submission
        setEmail(''); // Reset email field
        setFeedback('');
        setRating(0);
        setExperience('');
        setSuggestions('');
      })
      .catch((err) => {
        console.error('There was an error submitting the feedback!', err);
        alert('Failed to submit feedback. Please try again later.');
      });
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        We Value Your Feedback!
      </Typography>
      <Typography variant="body1" sx={styles.instruction}>
        Please share your thoughts after exploring our Indian Culture and Heritage app.
      </Typography>
      <form onSubmit={handleSubmit} sx={styles.form}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={styles.textField}
        />

        <TextField
          label="Your Feedback"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          sx={styles.textField}
        />

        <Typography variant="subtitle1" sx={styles.ratingLabel}>
          Rate your experience (1-5):
        </Typography>
        <TextField
          type="number"
          variant="outlined"
          inputProps={{ min: 1, max: 5 }}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          sx={styles.ratingInput}
        />

        <Typography variant="subtitle1" sx={styles.questionLabel}>
          How would you describe your overall experience?
        </Typography>
        <RadioGroup
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          row
          sx={styles.radioGroup}
        >
          <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
          <FormControlLabel value="Good" control={<Radio />} label="Good" />
          <FormControlLabel value="Average" control={<Radio />} label="Average" />
          <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
        </RadioGroup>

        <TextField
          label="Any suggestions for improvement?"
          multiline
          rows={2}
          variant="outlined"
          fullWidth
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          sx={styles.suggestionField}
        />

        <Button type="submit" variant="contained" sx={styles.submitButton}>
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

// Styles for the Feedback component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, #f06, #4a90e2)', // Gradient background
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    minHeight: '100vh', // Ensures full viewport height
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#fff', // White text for better visibility
  },
  instruction: {
    marginBottom: '15px',
    textAlign: 'center',
    color: '#fff', // White text for better visibility
  },
  form: {
    width: '100%', // Full width
    maxWidth: '600px', // Max width for larger screens
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background for the form
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  textField: {
    marginBottom: '15px',
  },
  ratingLabel: {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  ratingInput: {
    width: '60px',
    marginBottom: '20px',
  },
  questionLabel: {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  radioGroup: {
    marginBottom: '20px',
  },
  suggestionField: {
    marginBottom: '15px',
  },
  submitButton: {
    backgroundColor: '#00796b',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#004d40',
    },
  },
};

export default Feedback;
