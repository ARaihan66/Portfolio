import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Skills from './Component/Skills.js';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Project from './Component/Projects';
import Testimonial from './Component/Testimonial';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
