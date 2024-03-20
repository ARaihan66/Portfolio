import React from "react";

const LinkNotAvailable = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-white gap-4">
      <h1>OOops!!!!</h1>
      <h4>GitHub link is not available</h4>
      <p className="text-center">
        The project is reserved by myself and link is private.
      </p>
    </div>
  );
};

export default LinkNotAvailable;
