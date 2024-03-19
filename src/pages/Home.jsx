import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Project />
    </div>
  );
};

export default Home;
