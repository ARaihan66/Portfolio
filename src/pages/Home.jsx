import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  );
};

export default Home;
