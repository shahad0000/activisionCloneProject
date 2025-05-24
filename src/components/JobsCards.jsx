import React from "react";
import GreenBtn from "./GreenBtn";
import { FaRegHeart } from "react-icons/fa";

const JobsCards = (props) => {
  return (
    <div>
      <div className="flex flex-col bg-white border-4 border-black p-9 min-h-[47vh] flex-1 justify-between rounded-2xl">
        <div className="flex justify-between">
          <div className="text-2xl font-bold w-[85%] hover:text-[#0767af] hover:cursor-pointer">
            {props.title}
          </div>
          <div className=" text-3xl cursor-pointer">
            <FaRegHeart />
          </div>
        </div>
        <div className="text-md text-gray-700 mt-2">
          {props.category} :
          <span className="ml-4">{props.reqId}</span>
        </div>
        <p className="text-md text-gray-900 my-3">
         {props.description}
        </p>
        <div>
          <GreenBtn label="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
