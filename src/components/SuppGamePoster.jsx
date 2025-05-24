import React from "react";

const SuppGamePoster = (props) => {
  return (
    <div>
      <div className=" flex flex-col gap-3 p-4">
        <h1 className="text-sm text-[#939496] font-bold">{props.title}</h1>
        <div>
          <img
            className="w-full h-full object-cover"
            src={props.img}
            alt="Game poster"
          />
        </div>
      </div>
    </div>
  );
};

export default SuppGamePoster;
