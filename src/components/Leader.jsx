import React from "react";

const Leader = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-7">
        <div className="w-full h-54 lg:h-65">
          <img className="rounded-full object-cover w-full h-full" src={props.img} alt="" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="font-bold text-xl">{props.name}</div>
          <div className="text-sm text-center">{props.role}</div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
