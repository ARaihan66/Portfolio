import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Skills from './Component/Skills.js';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Project from './Component/Projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/skills' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/project' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
