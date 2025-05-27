import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage/homepage'
import About from './components/thingstoread/thingstoread'
import Navbar from './components/Navbar/navbar'
import Oilpainting from './components/OilPainting/oilpainting';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/oilpainting" element={<Oilpainting />} />
    </Routes>
  </Router>
   
  );
}

export default App;
