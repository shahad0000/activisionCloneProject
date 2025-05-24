import React from "react";
import BlueBtn from "../components/BlueBtn";
import ExpWorldCards from "../components/ExpWorldCards";
import StudioLogo from "../components/StudioLogo";
import GreenBtn from "../components/GreenBtn";
import JobsCards from "../components/JobsCards";

const jobs = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming/Software Engineering",
    reqId: "R024108",
    description: `Collaborate with designers and animators to create new gameplay systems and expand existing ones. 
Spearhead the development of innovative gameplay experiences. 
Proficiency in 3D math, related to game...`,
  },
  {
    title: "Lead Analytics Engineer",
    category: "Category :Data Analytics",
    reqId: "R024154",
    description: `You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...`,
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: " Programming/Software Engineering",
    reqId: "R024307",
    description: `Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...`,
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Category :Animation",
    reqId: "R022959",
    description: `Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...`,
  },
  {
    title: "Level Designer",
    category: " Category :Game/Level Design",
    reqId: "R024307",
    description: `Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...`,
  },
];

const Careers = () => {
  return (
    <div className="bg-[#121212] text-white pb-6">
      <div className="relative">
        <video
          controlsList="nodownload"
          disablePictureInPicture={true}
          preload="auto"
          playsInline
          loop
          autoPlay
          muted
          tabIndex="-1"
          aria-hidden="true"
        >
          <source
            src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GreenBtn label="SEARCH JOBS" />
        </div>
      </div>
      {/* Careers section */}
      <div className="text-white pt-28">
        <div className="text-3xl text-center font-bold">
          START YOUR GAME CHANGING CAREER
        </div>
        {/* Career grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 p-11 lg:p-30 gap-6">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem11-1710455685013.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem12-1710455727924.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem13-1710455855824.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem14-1710456001039.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="public/careersFigs/EVPIconssubitem15-1710456129634.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem16-1710456257523.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem17-1710456307621.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem18-1710456364531.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/careersFigs/EVPIconssubitem19-1710456408214.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* EXPLORE OUR WORLD */}
      <div className="flex flex-col justify-around items-center p-4">
        <div className="font-bold text-3xl">EXPLORE OUR WORLD</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-9 lg:p-22 gap-7">
          <ExpWorldCards
            img="/imgs/1691566582196_PenFactory-1665997299565.jpg"
            title="Our Locations"
          />
          <ExpWorldCards
            img="/imgs/1691566670572_PenFactory2-1665997596145.jpg"
            title="DE&I"
          />
          <ExpWorldCards
            img="/imgs/1691566841083_EarlyCareersAP-1666643219491.jpg"
            title="Early Careers"
          />
          <ExpWorldCards
            img="/imgs/Capture4-1716042103068.png"
            title="Mission & Talent Brand "
          />
        </div>
      </div>
      {/* Games banner video */}
      <div>
        <video
          width="100%"
          height="auto"
          videosize="contained"
          autoPlay
          muted
          loop
          data-ph-id="ph-widget-element-1669983965310-10"
        >
          <source
            src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
            type="video/mp4"
            data-ph-id="ph-widget-element-1669983965310-11"
          />
        </video>
      </div>

      {/* Our studios */}
      <div className=" flex flex-col justify-center items-center gap-4 p-16 ">
        <div className="text-3xl font-bold text-center">OUR STUDIOS</div>
        <br />
        {/* studios grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 w-[90%]">
          <StudioLogo img="/studiosLogos/logo_treyarch.png" />
          <StudioLogo img="/studiosLogos/logo_infinityward.png" />
          <StudioLogo img="/studiosLogos/logo_highmoon-studios.png" />
          <StudioLogo img="/studiosLogos/logo_sledgehammer.png" />
          <StudioLogo img="/studiosLogos/logo_raven.png" />
          <StudioLogo img="/studiosLogos/logo_atvi-shanghai-studio.png" />
          <StudioLogo img="/studiosLogos/logo_demonware.png" />
          <StudioLogo img="/studiosLogos/1691577163163_ss-logo-labeled-1670261765680.png" />
          <StudioLogo img="/studiosLogos/DLE-Logo-White2-1709023761211.png" />
          <StudioLogo img="/studiosLogos/central_tech_text_7201-1709023955618.png" />
          <StudioLogo img="/studiosLogos/Beenox3-1710257100788.png" />
        </div>
      </div>

      {/* Jobs cards */}
      <div className="flex flex-col gap-5 items-center">
        <div className="text-3xl font-bold">Be the First to Apply</div>
        <div className="grid grid-cols-1 lg:grid-cols-2  text-black gap-5 lg:max-w-[80vw] m-5">
          {jobs.map((job, index) => (
            <div key={index}>
              <JobsCards
                title={job.title}
                category={job.category}
                reqId={job.reqId}
                description={job.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
