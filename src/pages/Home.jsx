import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import DirectContact from "../components/DirectContact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <DirectContact/>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Project />
      {/*<Contact />*/}
    </div>
  );
};

export default Home;
