import React from 'react'
import TestButton from '../components/TestButton';
import Layout from '../components/nav/Layout';

const Home = () => {
  return (
    <div className='App'>
      <Layout/>
      <h1>Home</h1>
      <TestButton>Button</TestButton>
    </div>
  );
};

export default Home;