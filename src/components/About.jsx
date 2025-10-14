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
      <h1 className="uppercase text-center md:my-0 text-white pt-10">
        About Me
      </h1>
      <p className="text-white m-5 md:m-10 text-justify">
        My name is Abu Raihan, and I hold a Bachelor of Science degree in
        Computer Science and Engineering from Stamford University Bangladesh. I
        am deeply passionate about technology and have a strong interest in
        creating efficient, user-friendly, and modern web applications.I have
        over 2 years of hands-on experience in frontend development,
        specializing in React.js, Next.js, Tailwind CSS, React Router, Redux
        Toolkit, RTK Query, and Material UI. I have worked on several
        production-level projects that demonstrate my ability to build scalable,
        responsive, and visually appealing web applications.Currently, I am
        working as a Frontend Developer at Al Fatah Group (July 2024 – Present).
        My primary responsibility is developing a new ERP (Enterprise Resource
        Planning) system for the organization. The application stack includes
        React.js, Tailwind CSS, and Material UI on the frontend, .NET Core on
        the backend, and SQL Server as the database. I focus on building
        interactive user interfaces, managing application state efficiently, and
        integrating RESTful APIs to ensure smooth communication between the
        frontend and backend. In addition, I provide technical support and
        maintenance for the company’s legacy ASP.NET Web Forms
        system.Previously, I worked at Innovative IT (January 2023 – December
        2023), where I contributed to projects such as G-Spa, AfterHoursBD, and
        Fare.com.bd. My role involved developing creative and functional web
        solutions using React.js, collaborating with team members, and ensuring
        client satisfaction by delivering high-quality products. During this
        time, I gained valuable experience in full-stack development using
        React.js for the frontend, Express.js for the backend, and MongoDB for
        data management.I am a highly motivated developer who strives for
        excellence, continuous learning, and innovation. I am always eager to
        expand my skill set and stay updated with the latest trends in web
        development. My goal is to make a meaningful impact in the tech industry
        by creating efficient, user-centered solutions and contributing to the
        success of my team and organization.
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
            <h2>Creative Frontend Development</h2>
            <p className="p-5 text-justify">
              I am currently working as a Frontend Developer at Al Fatah Group
              (July 2024 – Present), where I am responsible for developing a new
              ERP (Enterprise Resource Planning) system for the organization.
              The technology stack includes React.js, Tailwind CSS, and Material
              UI on the frontend, .NET Core on the backend, and SQL Server as
              the database. My work focuses on building interactive user
              interfaces, efficiently managing application state, and
              integrating RESTful APIs to ensure seamless communication between
              the frontend and backend. In addition to ERP development, I also
              provide technical support and maintenance for the company’s legacy
              system built with ASP.NET Web Forms. Before joining Al Fatah
              Group, I worked at Innovative IT (January 2023 – December 2023),
              where I contributed to several projects, including G-Spa,
              AfterHoursBD, and Fare.com.bd. In this role, I developed creative
              and functional web solutions using React.js, collaborated closely
              with cross-functional teams, and delivered high-quality products
              that met client expectations. During this time, I also gained
              valuable experience in full-stack development, working with
              React.js for the frontend, Express.js for the backend, and MongoDB
              for database management.
            </p>
          </div>
          {/* <div className="text-center bg-gray-500 mx-5 md:mx-20 my-10 rounded-3xl">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
