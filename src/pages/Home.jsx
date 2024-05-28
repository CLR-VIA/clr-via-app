import React from 'react';
import Navbar from '../components/nav/NavBar';
import CopyrightFooter from '../components/CopyrightFooter';
import HomeButton from '../components/HomeButton';

const Home = () => {
  return (
    <div className='App'>
      {/* Include the Navbar component */}
      <Navbar />
      {/* Main content header */}
      <h1>Home</h1>
      <p>This page is a work in progress.</p>
      <CopyrightFooter/>
    </div>
  );
};

// Export the Home component as the default export
export default Home; 