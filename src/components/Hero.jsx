import shakil from "../assets/Raihan.png";
import resume from "../assets/Abu_Raihan_(Resume).pdf";
import backgroundVideo from "../assets/bgVideo.mp4";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="h-[95%]">
      {/* <video
        className="absolute top-0 left-0 w-full h-[100%] object-cover"
        autoPlay
        loop
        muted
        src={backgroundVideo}
      >
        Your browser does not support the video tag.
      </video> */}

      <div className="flex flex-col justify-between items-center gap-5 md:flex-row  bg-opacity-50 ">
        <div className="mx-2 basis-1/2 md:mx-20">
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1.5 }}
            className="text-white font-extrabold text-3xl my-5"
          >
            Hi, I am Abu Raihan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, x: -10 }}
            transition={{ duration: 1.5 }}
            className="text-white text-justify line-5"
          >
            I am a creative Frontend Web Developer with over 2 years of hands-on
            experience in building modern, responsive, and efficient web
            applications. My technical expertise includes React.js, Next.js,
            Tailwind CSS, React Router, Redux Toolkit, RTK Query, and Material
            UI. I have contributed to several production-level projects,
            showcasing my ability to deliver clean, maintainable, and scalable
            code. Currently, I am working at Al Fatah Group (July 2024 –
            Present), where my primary responsibility is to develop a new ERP
            (Enterprise Resource Planning) system for the organization. The
            application utilizes React.js, Tailwind CSS, and Material UI on the
            frontend, with a .NET Core backend and SQL Server database. As a
            Frontend Developer, I focus on creating user-friendly interfaces,
            managing state efficiently, and integrating APIs to ensure seamless
            communication between the frontend and backend. In addition, I
            provide technical support and maintenance for the company’s legacy
            system, which is built using ASP.NET Web Forms. Previously, I worked
            at Innovative IT (January 2023 – December 2023), where I contributed
            to multiple projects such as G-Spa, AfterHoursBD, and Fare.com.bd.
            During this period, I gained valuable experience in React
            development, UI design, and project collaboration, working closely
            with team members to deliver high-quality software solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, x: -10 }}
            transition={{ duration: 1.5 }}
            className="my-10 flex md:justify-between gap-10"
          >
            {/* <a
              href="#contact"
              className="no-underline font-bold text-sm md:text-l text-white bg-orange-900 rounded-lg p-2 md:p-5 outline-none hover:bg-white hover:text-orange-700"
            >
              Contact Me
            </a> */}
            <a
              href={resume}
              download="Abu_Raihan"
              className="no-underline text-sm md:text-l font-bold text-white bg-orange-900 rounded-lg cursor-pointer p-2 md:p-x-2 outline-none hover:bg-white hover:text-orange-700"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.5 }}
          //whileHover={{ scale: 1.1 }}
          className="p-2 border-20 border-red-500 rounded-full inline-block"
        >
          <img
            src={shakil}
            alt="Abu Raihan Shakil"
            className="rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
