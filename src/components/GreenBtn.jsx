import React from "react";

const GreenBtn = (props) => {
  return (
    <button className="px-7 py-3 bg-gray-700 border border-[#3e8808] hover:bg-[#3e8808] text-white hover:cursor-pointer">
      {props.label}
    </button>
  );
};

export default GreenBtn;
