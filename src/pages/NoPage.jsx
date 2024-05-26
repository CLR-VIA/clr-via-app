// NotFoundPage.js
import React from 'react';
import {Typography, Container, Button, Box } from '@mui/material';
import Navbar from '../components/nav/NavBar';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar/>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh">
          <Typography variant="h2" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" gutterBottom>
            The page you are looking for does not exist.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleGoHome}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default NotFoundPage;
