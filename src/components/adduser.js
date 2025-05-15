import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  
  
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#b5651d', // Warm orange for buttons and icons
    },
    background: {
      default: '#ffebcd', // Light background color
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif", // Font style
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E68369',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0,
          height: '100vh',
        },
      },
    },
  },
});

export default function AddUser() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("http://localhost:8080/adduser", {
      firstname: data.get('firstName'),
      lastname: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password')
    })
    .then((res) => {
      console.log(res.data);
      alert("User added successfully");
      navigate("/admin/adduser"); // Redirect after adding user
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          height: '130vh',
          backgroundImage: 'url(https://i.pinimg.com/736x/16/58/d3/1658d3ea8d25d73cfe68c8985f7ca210.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(250, 235, 215, 0.85)', // Soft almond color for container background
            padding: 5,
            borderRadius: 3,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: '#333', mb: 2 }}>
            Add User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputLabelProps={{
                    style: { color: '#8a4616' }, // Matching input label color
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#8a4616', // Matching input text color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputLabelProps={{
                    style: { color: '#8a4616' }, // Matching input label color
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#8a4616', // Matching input text color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{
                    style: { color: '#8a4616' }, // Matching input label color
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#8a4616', // Matching input text color
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{
                    style: { color: '#8a4616' }, // Matching input label color
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#8a4616', // Matching input text color
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#b5651d',
                '&:hover': {
                  backgroundColor: '#8a4616',
                },
                color: '#fff',
              }}
            >
              Add User
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Container>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}
