import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import fare from "../assets/Fare.png";
import afterhours from "../assets/AfterHours.png";
import gspa from "../assets/G-spa.png";
import law from "../assets/Law.png";
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
      details: " ",
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
      project: "Law Firm",
      technology:
        "React, Tailwind CSS,Redux Toolkit, React-Router-Dom, React Hook, Lottiefile, Flaticon, React Icon, Express Js, Mongodb",
      live: "",
      gitLink: "",
      imgUrl: law,
      details: " ",
    },

    {
      project: "Portfolio",
      technology:
        "React, Tailwind CSS, React Hook, React-Router-Dom, Lottiefile, Flaticon, React Icon",
      live: "",
      gitLink: "",
      imgUrl: portfolio,
      details: " ",
    },

    {
      project: "HungryHub",
      technology:
        "React, Tailwind CSS,Redux Toolkit, React-Router-Dom, React Hook, Lottiefile, Flaticon, React Icon",
      live: "",
      gitLink: "",
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
                        <p>Technology: {technology}</p>
                        <p>Details: {details}</p>
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
