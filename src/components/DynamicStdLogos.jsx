import React from "react";

const DynamicStdLogos = (props) => {
  return (
    <div className="w-full">
      <img
        className="w-full h-full object-contain brightness-60 hover:brightness-100 transition-all duration-300 hover:cursor-pointer"
        src={props.img}
        alt="Studio Logo"
      />
    </div>
  );
};

export default DynamicStdLogos;
