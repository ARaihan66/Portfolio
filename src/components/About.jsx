import React from "react";
import Lottie from "react-lottie";
import lottieFile from "../file_animation/About.json";
import backend from "../file_animation/Backend.json";
import frontend from "../file_animation/Frontend.json";

const About = () => {
  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const forntEndSendMessage = {
    loop: true,
    autoplay: true,
    animationData: frontend,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const backendSendMessage = {
    loop: true,
    autoplay: true,
    animationData: backend,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section id="about">
      <h1 className="uppercase text-center md:my-0 text-white">About Me</h1>
      <p className="text-white m-5 md:m-10 text-justify">
      My name is Abu Raihan, and I have a Bachelor of Science degree in Computer Science and Engineering from Stamford University Bangladesh. I am very interested in technology and have a strong passion for creating web applications. I have been working in this field for about 8 months at a well-known software company called Innovative IT. In my job, I am responsible for making new and creative web solutions that meet the needs of our clients. I always try to go beyond their expectations. I use several technologies in my work. For the part of the website that users see and interact with, I use React JS. For the part of the website that handles data and server requests, I use Express JS. To store and manage data, I use a database called MongoDB. By using these technologies together, I can build strong, responsive, and scalable web applications that can meet a variety of needs. I am very committed to doing excellent work and always learning new things. I look for every opportunity to improve my skills and stay up-to-date with the latest trends in the industry. My goal is to make positive contributions to the field of web development while delivering excellent results for my clients and stakeholders.
      </p>
      <div className="flex flex-col my-10 md:flex-row">
        <div className="basis-1/2 flex justify-center items-center">
          <div className=" w-[300px] my-10 md:w-[500px]">
            <Lottie options={defaultSendMessage} />
          </div>
        </div>
        <div className="basis-1/2 ">
          <div className="text-center bg-gray-500 mx-5 md:mx-20 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="w-[200px] h-[200px]">
                <Lottie options={forntEndSendMessage} />
              </div>
            </div>
            <h2>Frontend Development</h2>
            <p className="p-5 text-justify">
              In React.js, I leverage Tailwind CSS for rapid UI development,
              combining the power of component-based architecture with
              utility-first styling. With seamless integration and concise
              syntax, I ensure efficient code management and responsive design
              implementation. This approach allows me to create visually
              appealing web applications with ease and flexibility.
            </p>
          </div>
          <div className="text-center bg-gray-500 mx-5 md:mx-20 my-10 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="w-[200px] h-[200px]">
                <Lottie options={backendSendMessage} />
              </div>
            </div>
            <h2>Backend Development</h2>
            <p className="p-5 text-justify">
              As a Node.js Express.js developer, I specialize in building robust
              web applications with scalable backend infrastructure. Leveraging
              Express.js's minimalist framework atop Node.js runtime, I ensure
              efficient API development and routing. With expertise in
              middleware integration and RESTful principles, I deliver
              high-performance server-side solutions tailored to client
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
