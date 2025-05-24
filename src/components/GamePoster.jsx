import React from "react";

const GamePoster = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-84">
        <img
          className="w-full h-full object-cover"
          src={props.img}
          alt="COD Poster"
        />
      </div>
      <div className="mb-1 font-bold text-white">{props.title}</div>
      <div className="text-gray-400">{props.mr}</div>
    </div>
  );
};

export default GamePoster;
