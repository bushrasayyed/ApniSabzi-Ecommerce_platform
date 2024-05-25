import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid ,Link} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {  Link as RouterLink, useNavigate } from 'react-router-dom';
// import Layout from '../components/Layout/Layout'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (credentials.password !== credentials.cpassword) {
        setMessage("Passwords do not match");
        enqueueSnackbar("Passwords do not match", { variant: 'error' });
      }
      else if (credentials.password.length < 5) {
        setMessage("Password must be at least 5 characters long");
        enqueueSnackbar("Password must be at least 5 characters long", { variant: 'error' });
      }  
      else {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            cpassword: credentials.cpassword,
            userType: 'user',
          }),
        });
        const json = await response.json();
        if (response.ok) {
          setMessage("Registration Successful");
          enqueueSnackbar("Registration Successful!!!!!", { variant: 'success' });
          // localStorage.setItem('token', json.authtoken);
          setCredentials({
            name: '',
            email: '',
            password: '',
            cpassword: '',
          });
        //   navigate('/login');
        } else {
          setMessage(json.error || "Something went wrong. Please try again.");
          enqueueSnackbar(json.error || "Something went wrong. Please try again.", { variant: 'error' });
        }
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setMessage("Something went wrong. Please try again.");
      enqueueSnackbar("Something went wrong. Please try again.", { variant: 'error' });
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <SnackbarProvider maxSnack={3}>
    {/* <Layout> */}
    <Container maxWidth="xs" style={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="cpassword"
              value={credentials.cpassword}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        Already have an account? <Link component={RouterLink} to="/login">Login</Link>
      </Typography>
    </Container>
    {/* </Layout> */}
    </SnackbarProvider>
  );
};

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Register />
    </SnackbarProvider>
  );
};

export default App;
