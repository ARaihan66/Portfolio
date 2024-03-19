import Lottie from "react-lottie";
import email from "../file_animation/Email.json";

const Contact = () => {
  const emailSendMessage = {
    loop: true,
    autoplay: true,
    animationData: email,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Contact
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="basis-1/2 ">
          <Lottie options={emailSendMessage} />
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
};

export default Contact;
