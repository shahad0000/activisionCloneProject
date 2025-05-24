import React from "react";

const BlueBtn = ({label, className=""}) => {
  return (
    <button className={`border-2 hover:border-4 hover:shadow-none hover:bg-[rgba(10,72,123,0.93)] rounded-4xl py-1 px-4 bg-[rgba(10,73,123,0.8)] border-[#0767af] shadow-[0_0_0_2px_rgba(10,73,123,0.8)] text-white hover:cursor-pointer font-bold ${className} `}>
      {label}
    </button>
  );
};

export default BlueBtn;
