import React from "react";
import BlueBtn from "../components/BlueBtn";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div className="text-white bg-black">
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          className="absolute w-full  h-screen object-cover scale-[1.2] "
          playsInline
          loop
          muted
          autoPlay
        >
          <source
            src="https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,_#000000_0%,_rgba(0,0,0,0.15)_48.85%)] z-9"></div>
      </div>
      <div className="absolute w-full top-[30%] z-9 lg:mx-10 p-4">
        <div className="lg:w-[40%] flex flex-col gap-6 p-4 items-center">
          <img
            className="w-full"
            src="/imgs/black-ops-6-full-logo.png"
            alt="Black Ops 6 Logo"
          />
          <div className="text-white text-2xl text-center font-semibold">
            Forced to go rogue. Hunted from Within. <br /> This is Black Ops 6.
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div>
              <BlueBtn className="w-60 py-3" label="PLAY WITH GAME PASS" />
            </div>
            <div>
              <BlueBtn
                className="w-60 py-[0.8rem] [&:not(:hover)]:bg-transparent [&:not(:hover)]:shadow-none [&:not(:hover)]:border-gray-300"
                label="Visit Site"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0  top-16 lg:bottom-3 lg:top-auto">
        <img className="w-40" src="/imgs/cod-hub-esrb-en.png" alt="Logo" />
      </div>
      <div className="mb-11 lg:mb-0 w-80 absolute bottom-10 left-1/2 bg-[rgba(0,0,0,0.5)] p-4 rounded-full transform -translate-x-1/2 flex justify-between items-center z-10 text-xl text-gray-300">
        <div className="">
          <FaArrowLeftLong />
        </div>
        <div className="flex gap-2">
          <div>
            <GoDot />
          </div>
          <div>
            <GoDot />
          </div>
          <div>
            <GoDot />
          </div>
          <div>
            <GoDotFill />
          </div>
          <div>
            <GoDot />
          </div>
          <div>
            <GoDot />
          </div>
        </div>
        <div>
          <FaArrowRight />
        </div>
      </div>

      <div className="bg-black lg:bg-[radial-gradient(90%_90%_at_top,_#444,_#000)] text-center pt-25 pb-11 flex flex-col  items-center gap-6">
        <div className="lg:hidden absolute bottom-0 z-20 w-screen h-30">
          <img
            className="object-cover h-full w-full  object-left"
            src="/imgs/rainbow-lines.svg"
            alt=""
          />
        </div>
        <div className="font-bold text-4xl">LATEST NEWS & ARTICLES</div>
        <div className="flex items-center justify-center gap-6 border-b border-t border-white w-full">
          <div className="h-20 lg:border-b-6 lg:border-[#0767af] lg:bg-[#182735] flex items-center p-5">
            <div className="font-bold text-2xl ">ALL NEWS</div>
          </div>
          <div className="hidden lg:flex gap-5">
            <div className="w-40 h-20 flex items-center hover:border-b-6 hover:border-[#0767af] hover:bg-[#182735] p-4">
              <img className="w-full " src="/imgs/activisionLogo.png" alt="" />
            </div>
            <div className="w-40 h-20 flex items-center hover:border-b-6 hover:border-[#0767af] hover:bg-[#182735] p-4">
              <img className="w-full" src="/imgs/cod-logo.svg" alt="" />
            </div>
            <div className="w-40 h-20 flex items-center hover:border-b-6 hover:border-[#0767af] hover:bg-[#182735] p-4">
              <img
                className="w-full grayscale hover:grayscale-0"
                src="/imgs/PC_LOGO_PRIMARY_NEG_241121.svg"
              />
            </div>
            <div className="w-40 h-20 flex items-center hover:border-b-6 hover:border-[#0767af] hover:bg-[#182735] p-4">
              <img
                className="w-full grayscale hover:grayscale-0"
                src="/imgs/crash-bandicoot-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Games */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <BlogCard
          img="/imgs/tonyHawkPoster.png"
          date="May 09, 2025"
          title="Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre"
        />
        <BlogCard
          img="/imgs/COD-BO6-RICOCHET-S03R-TOUT-A.webp"
          date="May 07, 2025"
          title="#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone"
        />
        <BlogCard
          img="/imgs/CODE-MAM-2025-IMAGE-TOUT.webp"
          date="May 01, 2025"
          title="C.O.D.E. celebrates Military Appreciation Month with USAA"
        />
        <BlogCard
          img="/imgs/BO6-S03R-ANNOUNCEMENT-TOUT.webp"
          date="Apr 29, 2025"
          title="Black Ops 6 Season 03 Reloaded: All the Details"
        />
        <BlogCard
          img="/imgs/CODM-S4-ANNOUNCE-TOUT.webp"
          date="Apr 17, 2025"
          title="Introducing Call of Duty: Mobile Season 4 — Infinity Realm"
        />
        <BlogCard
          img="/imgs/BO6-SEASON-03-BATTLEPASS-TOUT.webp"
          date="Apr 02, 2025"
          title="Black Ops 6 Season 03 Battle Pass, BlackCell, and Bundles"
        />
      </div>

      <div className="hidden lg:flex justify-center p-22">
        <BlueBtn
          label="VIEW ALL"
          className="w-60 py-[0.8rem] [&:not(:hover)]:bg-transparent [&:not(:hover)]:shadow-none [&:not(:hover)]:border-gray-300"
        />
      </div>

      <div>
        {/* first banner*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 -50 items-center justify-center border-b-1 border-t-1 border-gray-300">
          <div className="col-span-2 h-80 lg:order-2">
            <img
              className="object-cover w-full h-full"
              src="/imgs/support-banner-v3.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-7 p-5 justify-center items-center ">
            <div className="text-2xl lg:w-90 lg:text-left text-center font-bold">
              WE'RE HERE TO HELP!
            </div>

            <div className="lg:w-90 text-center lg:text-left">
              We're here to help! Get answers to frequently asked questions,
              check server status, and engage with a support expert
            </div>
            <BlueBtn
              label="VISIT SUPPORT"
              className="w-60 py-[0.8rem] [&:not(:hover)]:bg-transparent [&:not(:hover)]:shadow-none [&:not(:hover)]:border-gray-300"
            />
          </div>
        </div>
        {/* second banner*/}
        <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-3 lg:h-81 justify-center border-b-1 border-t-1 border-gray-300  w-screen">
          <div className="flex lg:hidden w-full h-[44vh] z-10">
            <img
              className="object-cover w-full h-full"
              src="/imgs/joinus-banner-img-spyro.png"
              alt="Join Us Spyro Banner"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,_#000000_0%,_rgba(0,0,0,0.15)_48.85%)] z-11"></div>

          <div className="flex flex-col lg:flex-row w-screen justify-between p-11 ">
          <div className="flex flex-col  gap-7 p-5 justify-center items-center z-11 left-10 order-2 ">
            <div className="text-5xl lg:w-90 lg:text-left text-center font-bold text-[#0767af]">
              HAVE FUN
            </div>
            <div className="lg:w-90 text-center lg:text-left text-3xl">
              Learn more about job opportunities
            </div>
            <BlueBtn
              label="JOIN US"
              className="w-60 py-[0.8rem] [&:not(:hover)]:bg-transparent [&:not(:hover)]:shadow-none [&:not(:hover)]:border-gray-300"
            />
          </div>


          <div className="flex flex-col col-start-3 items-center justify-center gap-5 z-30 order-3 ">
            <div className="w-100 text-3xl font-bold text-center lg:text-left">OUR TEAMS</div>
            <div>
              <div className="flex gap-9 text-md font-bold">
                <ul className="flex flex-col gap-3">
                  <li>GAME DESIGN</li>
                  <li>ART OF ANIMATION</li>
                  <li>BRAND MANAGEMENT</li>
                  <li>PRODUCTION</li>
                  <li>QUALITY ASSURANCE</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li>CUSTOMER SUPPORT</li>
                  <li>STUDIO OPERATIONS</li>
                  <li>PROGRAMMING</li>
                  <li>FINANCE & ACCOUNTING</li>
                  <li>HUMAN RESOURCES</li>
                </ul>
              </div>
            </div>
          </div>
          </div>

          <div className=" hidden lg:block absolute col-span-3 w-full h-80">
            <img
              className="object-cover w-[100vw] h-full"
              src="/imgs/joinus-banner-img-spyro.png"
              alt="Join Us Spyro Banner"
            />
          </div>


          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(270deg,_#000000_0%,_rgba(0,0,0,0.15)_51%)] z-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
