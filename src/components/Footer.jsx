import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { RiShareBoxFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className='bg-black bg-[url("/imgs/rainbow-lines.svg")] bg-no-repeat bg-[position:left_bottom] bg-[length:350%_20%] lg:bg-[length:140%_40%] min-h-[88vh] pb-40 text-white'>
      <div className="flex flex-col lg:flex-row gap-9 lg:bg-[radial-gradient(90%_90%_at_top,_#444,_#000)] justify-between p-10 pt-12">
        <div className="flex flex-col justify-between text-center lg:text-start items-center lg:items-start">
          <div className="flex flex-col gap-5">
            <div className="font-bold text-md">FOLLOW US</div>
            <div className="flex gap-3 text-lg">
              <div className="border border-gray-300 rounded-full p-2.5 w-fit hover:text-black hover:bg-white transition-colors">
                <FaFacebookSquare />
              </div>
              <div className="border border-gray-300 rounded-full p-2.5 w-fit hover:text-black hover:bg-white transition-colors">
                <FaTwitter />
              </div>
              <div className="border border-gray-300 rounded-full p-2.5 w-fit hover:text-black hover:bg-white transition-colors">
                <FaYoutube />
              </div>
              <div className="border border-gray-300 rounded-full p-2.5 w-fit hover:text-black hover:bg-white transition-colors">
                <FaLinkedinIn />
              </div>
              <div className="border border-gray-300 rounded-full p-2.5 w-fit hover:text-black hover:bg-white transition-colors">
                <TiSocialInstagram />
              </div>
            </div>
          </div>
          <div className="flex gap-3 my-11">
            <img className="w-20  " src="/imgs/esrb-e-m.jpg" alt="" />
            <img className="w-10" src="/imgs/ESRB_updated.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <div className="font-bold text-md">POPULAR GAMES</div>
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-3  justify-center lg:justify-start text-gray-300">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Call of Duty
              </div>
              <div className="text-sm">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm text-center hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Tony Hawk Pro Skater
              </div>
              <div className="text-sm">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Crash Bandicoot
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Spyro
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Sekiro
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <div className="font-bold text-md">COMPANY</div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Press
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Research
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Activision Blizzard
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-300 justify-center lg:justify-start">
              <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
                Contact Us
              </div>
              <div className="text-md">
                <RiShareBoxFill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <div className="font-bold text-md">LEGAL</div>
          <div className="flex flex-col gap-3 text-gray-300 items-center lg:items-start">
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Terms of Use
            </div>
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Privacy Policy
            </div>
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Cookie Policy
            </div>
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Cookie Settings
            </div>
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Online Safety
            </div>
            <div className="text-sm hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              Applicant Privacy Policy
            </div>
            <div className="text-sm flex gap-4 hover:text-white hover:cursor-pointer hover:font-bold transition-colors">
              <div>Your Privacy Choices</div>
              <img
                className="w-10"
                src="/imgs/check-x.png"
                alt="an image of a toggle"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3 items-center text-gray-400 text-sm ">
          <div className="border border-gray-300 rounded-full w-fit p-2 ">
            <FaArrowUp />
          </div>
          <div className="hover:text-white hover:cursor-pointer transition-colors">
            Back to Top
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-4">
        <img
          className="w-5 mb-4"
          src="/imgs/usFlag.png"
          alt="Flag icon of the United States"
        />
        <Link to="/">
          <img
            className="w-55"
            src="/imgs/activisionLogo.png"
            alt="Activision logo"
          />
        </Link>

        <p className="text-sm">Copyright 2025 Activision Publishing, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
