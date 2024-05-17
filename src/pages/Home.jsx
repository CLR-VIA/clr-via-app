import React from 'react'
import TestButton from '../components/TestButton';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App'>
      <h1>Home</h1>
      <TestButton>Button</TestButton>
    </div>
  );
};

export default Home;