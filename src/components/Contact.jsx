import { useState } from "react";
import contact from "../file_animation/Contact.json";
import Lottie from "react-lottie";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [type, setType] = useState("message");
  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yof2bos", "template_as79n4m", form.current, {
        publicKey: "795fKXV1nYWFOGoTA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10">
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Contact
      </h2>
      <div className="flex flex-wrap flex-col justify-center items-center bgBlue p-5 md:flex-row md:p-15">
        <div className="basis-1/2">
          <Card className=" w-[330px] bg-indigo-900 md:w-full">
            <CardBody>
              <Tabs value={type} className="overflow-hidden">
                <TabsHeader className="relative z-0 ">
                  <Tab
                    value="message"
                    onClick={() => setType("message")}
                    className="uppercase text-center text-sm font-bold md:text-xl"
                  >
                    Send Message
                  </Tab>
                  <Tab
                    value="contact"
                    onClick={() => setType("contact")}
                    className="uppercase text-center text-sm font-bold md:text-xl"
                  >
                    Contact me
                  </Tab>
                </TabsHeader>
                <TabsBody
                  //  className="!overflow-x-hidden !overflow-y-visible"
                  animate={{
                    initial: {
                      x: type === "message" ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: type === "message" ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value="message" className="p-0 h-[360px]">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="mt-12 flex flex-col gap-5 text-white"
                    >
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Enter Name"
                        className="border-none py-5 px-10 outline-none rounded-lg"
                      />
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Enter Your Mail"
                        className="border-none py-5 px-10 outline-none rounded-lg"
                      />
                      <textarea
                        type="text"
                        cols="5"
                        rows="5"
                        name="message"
                        placeholder="Message"
                        className="border-none py-5 px-10 outline-none rounded-lg"
                      />
                      <input
                        type="submit"
                        value="Submit"
                        onClick={() => {
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                        }}
                        className="border-none font-bold bg-orange-400 py-5 px-10 outline-none rounded-lg cursor-pointer hover:bg-white"
                      />
                    </form>
                  </TabPanel>
                  <TabPanel value="contact" className="p-0 h-[360px]">
                    <div className="mt-12 text-white">
                      <h3>Phone No. </h3>
                      <p>+8801767013859</p>
                      <h3>Whatsapp No. </h3>
                      <p>+8801767013859</p>
                      <h3>Email </h3>
                      <p>md.abu.raihan7793@gmail.com</p>
                      <h3>Address </h3>
                      <p>Mohammadpur, D-Block, Dhaka-1214</p>
                      <div className="flex gap-4 my-5">
                        <a
                          href="https://web.facebook.com/abu.raihanshakil.75?_rdc=1&_rdr"
                          target="_blank"
                        >
                          <img src={facebook} className="w-[40px] h-[40px]" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/md-abu-raihan-799599230/"
                          target="_blank"
                        >
                          <img src={linkedin} className="w-[40px] h-[40px]" />
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
        <div className=" basis-1/2 flex justify-center items-center">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] p-10 md:mt-10 lg:mt-0  lg:ml-20 ">
            <Lottie options={defaultSendMessage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
