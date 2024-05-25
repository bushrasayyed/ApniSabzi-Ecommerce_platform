import React ,{useState} from 'react'
// import Layout from '../components/Layout/Layout'
import { TextField, Button, Typography, Container, Grid ,Link} from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import { SnackbarProvider, useSnackbar } from 'notistack';
import {  Link as RouterLink, useNavigate } from 'react-router-dom';
// import Header from './Layout/Header';
// import logo from './images/logo.png'


const Login = () => {
  let history = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const [user, userType] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("user",JSON.stringify(json.userData))
      const user = JSON.parse(localStorage.getItem("user"));
      if(user.userType === 'admin'){
      // if (json.user && json.userType === 'admin') {
        history('/adminpage'); // Redirect to admin page
      } else if(user.userType === 'user'){
        history('/login/main'); // Redirect to cart user page
      }
      else{
        history('/vendordashboard');
      }
    } else {
      alert("Invalid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    {/* <Header></Header> */}
    <div style={{ marginTop: '70px' }}>
    <Container  maxWidth="xs" style={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
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
              onChange={onChange}
              required
              fullWidth
            />
          </Grid>
         
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        Forgot Password? <Link component={RouterLink} to="/forgotpassword">Click here</Link>
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        or
      </Typography>
     
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        New Here? <Link component={RouterLink} to="/signup">Sign Up</Link>
      </Typography>
    </Container>
    </div>
    
    <div style={{marginTop:'100px'}}>
    <footer className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                {/* <img src={logo} alt="logo" /> */}
                <div className="social-links mt-5">
                  <ul className="d-flex list-unstyled gap-2">
                    <li>
                      <a href="/" className="btn btn-outline-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
    </>
    
  );
}

export default Login
