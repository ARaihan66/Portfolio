import React, { Fragment } from 'react';
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
      <Fragment>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Services />
        <Project />
        <Contact />
      </Fragment>
    </div>
  );
}

export default App;
