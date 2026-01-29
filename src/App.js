import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/header';

import Home from './Pages/home';
import AboutDhamma from './Pages/AboutDhamma/AboutDhamma';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Add more routes here as needed */}
        <Route path="/aboutDhamma" element={<AboutDhamma/>} />
        <Route path="/photoGallery" element={<PhotoGallery/>} />
      </Routes>
    </Router>
  );
}

export default App;