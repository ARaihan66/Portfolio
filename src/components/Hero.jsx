import shakil from "../assets/Raihan.png";
import resume from "../assets/resume.pdf";
import backgroundVideo from "../assets/bgVideo.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-[90%] object-cover"
        autoPlay
        loop
        muted
        src={backgroundVideo}
      >
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col justify-between items-center gap-5 md:flex-row relative bg-opacity-50 p-5 md:p-10">
        <div className="mx-5 basis-1/2 md:mx-20">
          <h1 className="text-white font-extrabold text-3xl my-5">
            Hi, I am Abu Raihan
          </h1>
          <p className="text-white font-bold text-l">
            I am a full-stack web developer with 2 years of experience in
            ReactJS, ExpressJS, and MongoDB. I have worked on several
            production-level projects.
          </p>
          <div className="my-10 flex md:justify-between gap-10">
            <a
              href="#contact"
              className="no-underline font-bold text-sm md:text-l text-white bg-orange-900 rounded-lg p-2 md:p-5 outline-none hover:bg-white hover:text-orange-700"
            >
              Contact Me
            </a>
            <a
              href={resume}
              download="Abu_Raihan"
              className="no-underline text-sm md:text-l font-bold text-white bg-orange-900 rounded-lg cursor-pointer p-2 md:p-5 outline-none hover:bg-white hover:text-orange-700"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col items-center ralative">
          <img
            src={shakil}
            alt="Abu Raihan Shakil"
            className="absolute rounded-full mb-5 h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
