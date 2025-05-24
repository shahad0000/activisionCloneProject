import React from "react";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import BlueBtn from "./BlueBtn";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen flex justify-center p-3 border-b border-b-orange-50 bg-[rgba(0,0,0,0.79)] text-gray-200 z-12 overflow-hidden">
      <div className="lg:hidden absolute top-2 left-2 text-4xl">
        <RxHamburgerMenu />
      </div>
      <Link to="/">
        <img
          className="w-30 mx-7"
          src="imgs/activisionLogo.png"
          alt="Activision Logo"
        />
      </Link>

      <div className="hidden lg:flex items-center justify-between  w-[70%]">
        <ul className="flex gap-7 items-center text-md ">
          <li className="hover:text-white hover:cursor-pointer hover:font-bold">GAMES</li>
          <li className="flex items-center gap-3 group hover:text-white hover:cursor-pointer hover:font-bold">
            <Link to="/about">ABOUT</Link>
            <div className="text-xl  group-hover:rotate-180  duration-500">
              <IoIosArrowDown />
            </div>
          </li>
          <li className="flex items-center gap-3 group hover:text-white hover:cursor-pointer hover:font-bold">
            <Link to="/careers">CAREERS</Link>
            <div className="text-xl  group-hover:rotate-180  duration-500">
              <IoIosArrowDown />
            </div>
          </li>
          <li className="flex items-center gap-3 group hover:text-white hover:cursor-pointer hover:font-bold">
            <Link to="/support">SUPPORT</Link>
            <div className="text-xl  group-hover:rotate-180  duration-500">
              <IoIosArrowDown />
            </div>
          </li>
        </ul>
        <div className="flex gap-5">
          <BlueBtn label="SIGN UP" />
          <button className="hover:cursor-pointer">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
