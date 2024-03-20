import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import fare from "../assets/Fare.png";
import afterhours from "../assets/AfterHours.png";
import gspa from "../assets/G-spa.png";
import law_client from "../assets/Law.png";
import law_admin from "../assets/Law_Admin.png";
import portfolio from "../assets/portfolio.png";
import HungryHub from "../assets/HungryHub.png";
import { Link } from "react-router-dom";

const Project = () => {
  const data = [
    {
      project: "Fare",
      technology:
        "React, Tailwind CSS, React Hook, React-Router-Dom, Lottiefile, Flaticon, React Icon",
      live: "https://fare.com.bd/",
      gitLink: "/git-link",
      imgUrl: fare,
      details: "",
    },

    {
      project: "AfterHours",
      technology:
        "React,CSS, React Hook, React-Router-Dom, Stytled Component, Flaticon, React Icon",
      live: "https://www.afterhoursbd.com/",
      gitLink: "/git-link",
      imgUrl: afterhours,
      details: " ",
    },

    {
      project: "G-Spa",
      technology:
        "React, CSS, React Hook, React-Router-Dom, Flaticon, React Icon",
      live: "https://www.gspa.xyz/",
      gitLink: "/git-link",
      imgUrl: gspa,
      details: " ",
    },

    {
      project: "Law-Firm-Client",
      technology:
        "React, Tailwind CSS,Redux Toolkit, React-Router-Dom, React Hook, Lottiefile, Flaticon, React Icon, Express Js, Mongodb",
      live: "https://law-client-taupe.vercel.app/",
      gitLink: "/not-available-link",
      imgUrl: law_client,
      details: " ",
    },

    {
      project: "Law-Firm-Admin",
      technology:
        "React, Tailwind CSS,Redux Toolkit, React-Router-Dom, React Hook, Lottiefile, Flaticon, React Icon, Express Js, Mongodb",
      live: "https://law-firm-admin-omega.vercel.app/",
      gitLink: "/not-available-link",
      imgUrl: law_admin,
      details: " ",
    },

    {
      project: "Portfolio",
      technology:
        "React, Tailwind CSS, React Hook, React-Router-Dom, Lottiefile, Flaticon, React Icon",
      live: "https://portfolio-virid-five-83.vercel.app/",
      gitLink: "https://github.com/ARaihan66/Portfolio",
      imgUrl: portfolio,
      details: " ",
    },

    {
      project: "HungryHub",
      technology:
        "React, Tailwind CSS,Redux Toolkit, React-Router-Dom, React Hook, Lottiefile, Flaticon, React Icon",
      live: "https://hungry-hub-mu-sage.vercel.app/",
      gitLink: "https://github.com/ARaihan66/HungryHub",
      imgUrl: HungryHub,
      details: " ",
    },
  ];
  return (
    <section id="projects">
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Projects
      </h2>
      <div className="flex flex-col flex-wrap justify-center items-center gap-5 md:flex-row">
        {data &&
          data.map(
            ({
              index,
              project,
              technology,
              details,
              live,
              imgUrl,
              gitLink,
            }) => {
              return (
                <div key={index} className="w-[90%] md:w-[300px] my-5">
                  <Card className=" bg-gray-500">
                    <CardHeader color="blue-gray" className="relative h-52">
                      <img
                        src={imgUrl}
                        alt="card-image"
                        className="w-[100%] h-[100%]"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {project}
                      </Typography>
                      <Typography className="text-black">
                        <p>
                          <span className="font-bold">Technology:</span>{" "}
                          {technology}
                        </p>
                        <p>
                          <span className="font-bold">Details:</span> {details}
                        </p>
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex gap-3 justify-between">
                      <a
                        href={live}
                        target="_blank"
                        className="no-underline font-semibold  text-white bg-orange-900 rounded-lg px-5 py-2 outline-none hover:bg-white hover:text-orange-700"
                      >
                        Demo
                      </a>
                      {project === "Fare" ||
                      project === "AfterHours" ||
                      project === "G-Spa" ? (
                        <Link
                          to={gitLink}
                          className="no-underline font-semibold  text-white bg-orange-900 rounded-lg px-5 py-2 outline-none hover:bg-white hover:text-orange-700"
                        >
                          GitHub Link
                        </Link>
                      ) : project === "Law-Firm-Client" ||
                        project === "Law-Firm-Admin" ? (
                        <a
                          href={gitLink}
                          className="no-underline font-semibold  text-white bg-orange-900 rounded-lg px-5 py-2 outline-none hover:bg-white hover:text-orange-700"
                        >
                          GitHub Link
                        </a>
                      ) : (
                        <a
                          href={gitLink}
                          target="_blank"
                          className="no-underline font-semibold  text-white bg-orange-900 rounded-lg px-5 py-2 outline-none hover:bg-white hover:text-orange-700"
                        >
                          GitHub Link
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
};

export default Project;
