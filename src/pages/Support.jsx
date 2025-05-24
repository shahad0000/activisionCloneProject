import React from "react";
import SuppGamePoster from "../components/SuppGamePoster";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Support = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-screen h-15 bg-black">{/* Hero Section */}</div>
      <div className="bg-[#3e9fca] min-h-10 flex justify-around items-center p-2">
        <p className="p">
          NEED HELP RECOVERING A HACKED ACTIVISION ACCOUNT?{" "}
          <a className="underline font-bold" href="#">
            LEARN MORE
          </a>
        </p>
      </div>
      <div className="relative">
        <div className=" w-screen h-[77vh]">
          <img
            className="w-full object-cover h-full"
            src="/imgs/MWIII-Hero-ban-beta.png"
            alt=""
          />
        </div>
        <div className="flex w-full absolute justify-between text-7xl top-1/2 transform -translate-y-1/2 px-6">
          <div className="text-[#aaaaaa] hover:text-white hover:cursor-pointer transition-colors">
            <MdKeyboardArrowLeft />
          </div>
          <div className="text-[#aaaaaa] hover:text-white hover:cursor-pointer transition-colors">
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="  absolute left-1/6 top-1/4 transform -translate-y-1/4 -translate-x-1/6 h-65">
          <img
            className="object-cover w-full h-full"
            src="/imgs/MWIII-logo-1a.png"
            alt=""
          />
        </div>
        <div className="flex flex-col absolute left-1/6 top-3/4 transform -translate-x-1/6 -translate-y-3/4 gap-4 ">
          <div className="flex">
            <div>
              <img src="/imgs/icon_game.png" alt="controller icon" />
            </div>
            <div>
              <p>MODERN WARFARE II INSTALLATION AND SETUP</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="/imgs/icon_support.png" alt="support icon" />
            </div>
            <div>Browse the support page</div>
          </div>
        </div>
      </div>

      {/* Game Posters */}
      <div className="bg-[#2c2c2c] flex justify-center p-5 pb-13">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[80vw]">
          <SuppGamePoster
            title="CALL OF DUTY: BLACK OPS 6"
            img="/SuppGamePosters/BO6-home-tile2.jpg"
          />
          <SuppGamePoster
            title="ACCOUNT & SECURITY"
            img="/SuppGamePosters/account-security-en-silver-tall-2x.jpg"
          />
          <SuppGamePoster
            title="TONY HAWK'S PRO SKATER 3 + 4"
            img="/SuppGamePosters/WZV-home-tile.jpg"
          />
          <SuppGamePoster
            title="CALL OF DUTY: MODERN WARFARE III"
            img="/SuppGamePosters/codmobile-module.jpg"
          />
          <SuppGamePoster
            title="CALL OF DUTY: MODERN WARFARE"
            img="/SuppGamePosters/THPS34-home-tile.png"
          />
          <SuppGamePoster
            title="CALL OF DUTY: BLACK OPS COLD WAR"
            img="/SuppGamePosters/MWIII-home-tile-1c.png"
          />
          <SuppGamePoster
            title="CALL OF DUTY: MODERN WARFARE II"
            img="/SuppGamePosters/MWII-tall-tile.jpg"
          />
          <SuppGamePoster
            title="CALL OF DUTY: MODERN WARFARE"
            img="/SuppGamePosters/MW_module_001.jpg"
          />
          <SuppGamePoster
            title="CALL OF DUTY: BLACK OPS COLD WAR"
            img="/SuppGamePosters/cold-war-home-page-tile.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
