import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Register from './pages/auth/Register';
import Navbar from './components/nav/appbar';
import NoPage from './pages/NoPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<NoPage />} />
    </Route>
  )
);

function App({ routes }) {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
