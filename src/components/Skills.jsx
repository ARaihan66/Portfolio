import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwindCss.png";
import express from "../assets/express.png";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h2 className="uppercase text-center my-5 md:my-10  text-white">
            Skills
          </h2>
          <div className="flex flex-col gap-3 justify-center items-center text-white">
            <div className="flex flex-col md:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={html} alt="html" />
                <h3>HTML</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={css} alt="css" />
                <h3>CSS</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={tailwind} alt="mongodb" />
                <h3>Tailwind CSS</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={figma} alt="figma" />
                <h3>FIGMA</h3>
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 my-5">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={react} alt="react" />
                <h3>React JS</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={node} alt="node" />
                <h3>Node JS</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={express} alt="mongodb" />
                <h3>Express JS</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={mongodb} alt="mongodb" />
                <h3>MongoDB</h3>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ duration: 1.5 }}
            className="uppercase text-center my-5  text-white"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-3 bg-gray-500 py-5 px-5 md:px-10 mx-5 md:mx-10 rounded-3xl text-justify"
          >
            <p>
              <span className="font-bold">Firm Name:</span> Al Fatah Publication
            </p>
            <p>
              <span className="font-bold">Duration:</span> 1 year +
            </p>
            <p>
              <span className="font-bold">Experience:</span> I am currently
              working as a Frontend Developer at Al Fatah Group (July 2024 –
              Present), where I am responsible for developing a new ERP
              (Enterprise Resource Planning) system for the organization. The
              technology stack includes React.js, Tailwind CSS, and Material UI
              on the frontend, .NET Core on the backend, and SQL Server as the
              database. My work focuses on building interactive user interfaces,
              efficiently managing application state, and integrating RESTful
              APIs to ensure seamless communication between the frontend and
              backend. In addition to ERP development, I also provide technical
              support and maintenance for the company’s legacy system built with
              ASP.NET Web Forms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-3 bg-gray-500 py-5 px-5 md:px-10 mx-5 mt-10 md:mx-10 rounded-3xl text-justify"
          >
            <p>
              <span className="font-bold">Firm Name:</span> Innovative IT
            </p>
            <p>
              <span className="font-bold">Duration:</span> 1 year
            </p>
            <p>
              <span className="font-bold">Experience:</span> Innovative IT has
              been my workplace, where I contributed to projects like G-Spa,
              AfterHoursBD, and Fare.com.bd. These projects involved
              collaborative efforts, where I undertook various roles and
              responsibilities, honing my skills in React development and
              project management. Through these experiences, I've gained
              valuable insights into software development processes and enhanced
              my problem-solving abilities. Reflecting on my journey at
              Innovative IT, I'm motivated to pursue further growth in the
              field, aiming to tackle new challenges and contribute meaningfully
              to future projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
