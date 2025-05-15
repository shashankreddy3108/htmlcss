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

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0572',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(https://i.pinimg.com/474x/dd/26/d7/dd26d7385f6709ad0f43d181b705b313.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0,
          position: 'relative',
          height: '100vh',
        },
      },
    },
  },
});

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Reset error

    if (!email || !password) {
      setError('Please fill in all fields.'); // Set error message if fields are empty
      return;
    }

    axios.get("http://localhost:8080/signin", {
      params: {
        email: email,
        password: password
      }
    }).then((res) => {
      console.log(res.data);

      if (res.data === "user") {
        navigate("/usernav");
        alert("Sign in successful!");
      } else if (res.data === "admin") {
        navigate("/adminnav");
        alert("Admin login successful!!");
      } else {
        setError("Password or email incorrect!!");
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          zIndex: 1,
          marginTop: '64px',
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
            background: 'linear-gradient(135deg, rgba(242,113,33,1) 0%, rgba(233,64,87,1) 50%, rgba(138,35,135,1) 100%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
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
                    value={email} // Bind to state
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
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
                    value={password} // Bind to state
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
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
                Sign In
              </Button>
              {error && (
                <Typography color="error" variant="body2" align="center">
                  {error}
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#FFC107' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2" sx={{ color: '#FFC107' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4, color: '#fff' }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
