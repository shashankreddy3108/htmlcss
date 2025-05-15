import React, { useEffect, useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch feedbacks from the backend
    axios
      .get('http://localhost:8080/getfeedback')
      .then((response) => {
        setFeedbacks(response.data); // Assuming the backend returns an array of feedback objects
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching feedback data:', err);
        setError('Failed to load feedback data');
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://i.pinimg.com/474x/d0/fc/f1/d0fcf1e40777561d0d2187631eb314c8.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={styles.tableWrapper}>
        <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>View Feedbacks</h2>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ) : (
          <TableContainer component={Paper} sx={styles.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.cellHeader}><strong>User Email</strong></TableCell>
                  <TableCell style={styles.cellHeader}><strong>Feedback</strong></TableCell>
                  <TableCell style={styles.cellHeader}><strong>Rating</strong></TableCell>
                  <TableCell style={styles.cellHeader}><strong>Experience</strong></TableCell>
                  <TableCell style={styles.cellHeader}><strong>Suggestions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbacks.map((feedback, index) => (
                  <TableRow key={index}>
                    <TableCell style={styles.cell}>{feedback.email}</TableCell>
                    <TableCell style={styles.cell}>{feedback.feedback}</TableCell>
                    <TableCell style={styles.cell}>{feedback.rating}</TableCell>
                    <TableCell style={styles.cell}>{feedback.experience}</TableCell>
                    <TableCell style={styles.cell}>{feedback.suggestions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

// Styles for the ViewFeedback component
const styles = {
  tableWrapper: {
    width: '80%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
  },
  tableContainer: {
    marginTop: '20px',
  },
  cellHeader: {
    width: '20%', // Equal width for all columns
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd',
  },
  cell: {
    width: '20%', // Equal width for all columns
    textAlign: 'center',
    border: '1px solid #ddd',
  },
};

export default ViewFeedback;
