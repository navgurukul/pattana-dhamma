import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/header';

import Home from './Pages/home';
import PhotoGallery from './Pages/PhotoGallery/photogallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;