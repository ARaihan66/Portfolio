import React from "react";
import whatsapp from "../file_animation/whatsapp.json";
import phone from "../file_animation/phone.json";
import Lottie from "react-lottie";

const DirectContact = () => {
  const phoneNumber = "01767013859";
  const message = encodeURIComponent(
    "Hey, I am Abu Raihan Shakil. I am highly interested to chat with you. Ask me any question that you want."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const whatsAppSendMessage = {
    loop: true,
    autoplay: true,
    animationData: whatsapp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const phoneSendMessage = {
    loop: true,
    autoplay: true,
    animationData: phone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <div className="fixed bottom-24 md:bottom-2 left-2 w-[110px] h-[110px] z-50">
        <a href={whatsappLink} target="_blank">
          <Lottie options={whatsAppSendMessage} />
        </a>
      </div>
      <div className="fixed bottom-24 md:bottom-2 right-2 w-[100px] h-[100px] z-50 md:hidden">
        <a href={`tel:${phoneNumber}`}>
          <Lottie options={phoneSendMessage} />
        </a>
      </div>
    </div>
  );
};

export default DirectContact;
