import React from "react";
import shakil from "../assets/Abu_Raihan.jpg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <>
      <section className="my-20">
        <div className="flex flex-col justify-between items-center gap-5 md:flex-row">
          <div className="mx-5 basis-1/2 md:mx-20">
            <h1 className="text-white font-extrabold text-3xl my-5">
              Hi, I am Abu Raihan
            </h1>
            <p className="text-white font-bold text-l">
              I am a full-stack web developer with 2 years of experience ReactJS
              ExpressJS MongoDB. I have worked with several production lavel
              projects.
            </p>
            <div className="my-10 flex md:max-justify-between gap-10">
              <div>
                <a
                  href="#contact"
                  className="no-underline font-bold text-sm md:text-l text-white bg-orange-900 rounded-lg p-5 outline-none hover:bg-white hover:text-orange-700"
                >
                  Contact Me
                </a>
              </div>
              <div>
                <a
                  href={resume}
                  download="Abu_Raihan"
                  className="no-underline text-sm md:text-l font-bold text-white bg-orange-900
                rounded-lg cursor-pointer p-5 outline-none hover:bg-white
                hover:text-orange-700"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="basis-1/2">
            <img
              src={shakil}
              alt="Abu Raihan Shakil"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
