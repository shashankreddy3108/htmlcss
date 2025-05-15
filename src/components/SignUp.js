import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
      default: '#ffebcd', // Matching light background color
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

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post("http://localhost:8080/signup",{
      firstname:data.get('firstName'),
      lastname:data.get('lastName'),
      email:data.get('email'),
      password:data.get('password')
    }).then((res)=>{
console.log(res.data)
navigate("/signin")
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          backgroundImage: 'url(https://i.pinimg.com/474x/dd/26/d7/dd26d7385f6709ad0f43d181b705b313.jpg)', // Image kept as it is
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: 5,
            borderRadius: 3,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            background: 'linear-gradient(135deg, rgba(242,113,33,1) 0%, rgba(233,64,87,1) 50%, rgba(138,35,135,1) 100%)', // Gradient background for the form
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: '#fff' }}>
            Sign up
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
                    style: { color: '#fff' },
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#fff',
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
                    style: { color: '#fff' },
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#fff',
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
                    style: { color: '#fff' },
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#fff',
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
                    style: { color: '#fff' },
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#fff',
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2" sx={{ color: '#fff' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Copyright sx={{ mt: 5, color: '#fff' }} />
    </ThemeProvider>
  );
}