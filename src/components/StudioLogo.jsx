import React from "react";

const StudioLogo = (props) => {
  return (
    <div className="w-full">
      <img
        className="w-full h-full object-contain"
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default StudioLogo;
