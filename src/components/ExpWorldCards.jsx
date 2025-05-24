import React from "react";
import BlueBtn from "./BlueBtn";

const ExpWorldCards = (props) => {
  return (
    <div>
      <div className="bg-black flex flex-col min-h-[68vh] items-center justify-between pb-9">
        <div className="w-full h-64">
          <img className="w-full h-full object-cover" src={props.img} alt="" />
        </div>
        <div className="flex flex-col justify-between h-full flex-1 items-center mt-4">
          <div className="font-bold text-3xl mb-4">{props.title}</div>
          <BlueBtn
            label="LEARN MORE"
            className="w-40 py-[0.8rem] [&:not(:hover)]:bg-transparent [&:not(:hover)]:shadow-none [&:not(:hover)]:border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpWorldCards;
