import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/header';
import DemoName from './Pages/dummy';

import Home from './Pages/home';
import PhotoGallery from './Pages/PhotoGallery/photogallery';
import AboutDhamma from './Pages/AboutDhamma/AboutDhamma';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        {/* Add more routes here as needed */}
      <Route path="/demo" element={<DemoName />} />
      <Route path="/aboutDhamma" element={<AboutDhamma/>} />
      </Routes>
    </Router>
  );
}

export default App;