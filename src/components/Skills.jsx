import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h2 className="uppercase text-center my-5 md:my-10  text-white">
            Skills
          </h2>
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={html} alt="html" />
                <h3>HTML</h3>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={css} alt="css" />
                <h3>CSS</h3>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={figma} alt="figma" />
                <h3>FIGMA</h3>
              </div>
            </div>
            <div className="flex gap-10 my-5">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={react} alt="react" />
                <h3>React</h3>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={node} alt="node" />
                <h3>Node JS</h3>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src={mongodb} alt="mongodb" />
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="uppercase text-center my-5  text-white">Experience</h2>
          <div className="flex flex-col gap-3 bg-gray-500 py-5 px-5 md:px-10 mx-5 md:mx-10 rounded-3xl text-justify">
            <p>
              <span className="font-bold">Firm Name:</span> Innovatine IT
            </p>
            <p>
              <span className="font-bold">Duration:</span> 8 months
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
