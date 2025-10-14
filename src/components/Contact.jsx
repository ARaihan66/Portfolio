import { useState, useRef } from "react";
import Lottie from "react-lottie";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import contact from "../file_animation/Contact.json";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  const [type, setType] = useState("message");
  const form = useRef();

  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const fromName = form.current.from_name.value.trim();
    const fromEmail = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!fromName || !fromEmail || !message) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_yof2bos",
        "template_as79n4m",
        form.current,
        "795fKXV1nYWFOGoTA"
      )
      .then(
        () => {
          toast.success("Message submitted successfully.");
          console.log("SUCCESS!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          toast.error("Failed to submit the message.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10">
      <h2 className="uppercase text-center my-5 md:my-10 text-white">
        Contact
      </h2>
      <div className="flex flex-wrap flex-col justify-center items-center bgBlue p-5 md:flex-row md:p-15">
        <div className="basis-1/2">
          <Card className="w-[300px] bg-indigo-900 md:w-full">
            <CardBody>
              <Tabs value={type} className="overflow-hidden">
                <TabsHeader className="relative z-0">
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
                    Contact Me
                  </Tab>
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { x: type === "message" ? 400 : -400 },
                    mount: { x: 0 },
                    unmount: { x: type === "message" ? 400 : -400 },
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
                        cols="5"
                        rows="5"
                        name="message"
                        placeholder="Message"
                        className="border-none py-5 px-10 outline-none rounded-lg"
                      />
                      <input
                        type="submit"
                        value="Submit"
                        className="border-none font-bold bg-orange-400 py-5 px-10 outline-none rounded-lg cursor-pointer hover:bg-white"
                      />
                    </form>
                  </TabPanel>
                  <TabPanel value="contact" className="p-0 h-[360px]">
                    <div className="mt-12 text-white">
                      <h3>Phone No.</h3>
                      <p>+8801767013859</p>
                      <p>+8801704843884</p>
                      <h3>Whatsapp No.</h3>
                      <p>+8801767013859</p>
                      <h3>Email</h3>
                      <p>md.abu.raihan7793@gmail.com</p>
                      <h3>Address</h3>
                      <p>Mohammadpur, D-Block, Dhaka-1214</p>
                      <div className="flex gap-4 my-5">
                        <a
                          href="https://web.facebook.com/abu.raihanshakil.75?_rdc=1&_rdr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={facebook}
                            className="w-[40px] h-[40px]"
                            alt="Facebook"
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/md-abu-raihan-799599230/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={linkedin}
                            className="w-[40px] h-[40px]"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] p-10 md:mt-10 lg:mt-0 lg:ml-20">
            <Lottie options={defaultSendMessage} />
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default Contact;
