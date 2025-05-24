import React from "react";
import Leader from "../components/Leader";
import BlueBtn from "../components/BlueBtn";
import GamePoster from "../components/GamePoster";
import DynamicStdLogos from "../components/DynamicStdLogos";
const About = () => {
  return (
    <div className="bg-black text-white">
      <div className="mb-10">
        <img src="/imgs/atvi-about-hero.jpg" alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center gap-11 p-22">
        <div className="text-3xl font-bold">OUT MISSION</div>
        <hr className="text-gray-500 w-[88vw]" />
        <div className="text-center">
          At Activision, we strive to create the most iconic brands in gaming
          and entertainment. We’re driven by our mission to deliver unrivaled
          gaming experiences for the world to enjoy, together. Home to iconic
          franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro
          Skater™, we're a global leader in interactive entertainment. Our goal?
          Delight millions with innovative, fun, and engaging games. With a
          legacy of success, we're pushing boundaries with cutting-edge
          technology and inclusive practices. Join us in delivering
          unforgettable entertainment and seize the chance to level up your
          career.
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-11 p-22">
        <div className="text-3xl font-bold text-center">
          ACTIVATE YOUR FUTURE
        </div>
        <hr className="text-gray-500 w-[88vw]" />
        <div className="text-center">
          <ul className="flex flex-col gap-5">
            <li>
              We unite our global player community with epic entertainment,
              focusing on three core pillars:
            </li>
            <li>People - fostering talent and learning opportunities.</li>
            <li>Innovation - consistently pushing to iterate and evolve.</li>
            <li>
              Excellence - delivering high-quality games, consistently year in
              and year out.
            </li>
            <li>
              Join us at Activision, where inclusivity thrives, and together we
              shape the future of entertainment for our players. Explore open
              roles now!
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-11 p-22">
        <div className="text-3xl font-bold text-center">OUR VALUES</div>
        <hr className="text-gray-500 w-[88vw]" />
        <div className="text-center">
          <img src="/imgs/atvi-values.png" alt="" />
        </div>
        <div>
          <BlueBtn label="LEARN MORE" className="px-11 py-3" />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-11 p-6">
        <div className="text-3xl font-bold text-center">
          OUR LEADERSHIP TEAM
        </div>
        <hr className="text-gray-500 w-[88vw]" />
        {/* leadership grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-25 ">
          <Leader
            img="/imgs/rob-kostich.jpg"
            name="Rob Kostich"
            role="President"
          />
          <Leader
            img="/imgs/joshTaub.png"
            name="Josh Taub"
            role="Chief Operating Officer"
          />
          <Leader
            img="/imgs/suzieCarr.png"
            name="Suzie Carr"
            role="Chief People Officer"
          />
          <Leader
            img="/imgs/terriDurham.png"
            name="Terri Durham"
            role="SVP & General Counsel"
          />
          <Leader
            img="/imgs/davidStohl.png"
            name="David Stohl"
            role="Head of Development, Call of Duty"
          />
          <Leader
            img="/imgs/patKelly.png"
            name="Pat Kelly"
            role="Head of Creative, Call of Duty"
          />
          <Leader
            img="/imgs/tylerBahl.png"
            name="Tyler Bahl"
            role="SVP, Head of Marketing"
          />
          <Leader
            img="/imgs/natashaTatarchuk.png"
            name="Natasha Tatarchuk"
            role="SVP, Chief Technology Officer"
          />
          <Leader
            img="/imgs/mattCox.png"
            name="Matt Cox"
            role="GM, Call of Duty"
          />
        </div>
      </div>

      {/* Our games */}
      <div className=" flex flex-col justify-center items-center gap-11 p-6">
        <div className="text-3xl font-bold text-center">OUR GAMES</div>
        <hr className="text-gray-500 w-[88vw]" />
        {/* games grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <GamePoster
            img="/imgs/codPoster.png"
            title="CALL OF DUTY BLACK OPS 6"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/wz-boxart.jpg"
            title="Call of Duty®: Warzone"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/mwiii-boxart.jpg"
            title="Call of Duty Modern Warfare III"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg"
            title="Crash Team Rumble"
            mr="MATURE +10"
          />
          <GamePoster
            img="/imgs/thps-1-2-boxart.png"
            title="Tony Hawk's™ Pro Skater™ 1 + 2"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/codm-boxart.jpg"
            title="Call of Duty®: Mobile"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/sekiroPoster.png"
            title="Sekiro®: Shadows Die Twice"
            mr="MATURE +17"
          />
          <GamePoster
            img="/imgs/spyro-boxart.png"
            title="SPYRO® Reignited Trilogy"
            mr="MATURE +17"
          />
        </div>
      </div>
      {/* Our studios */}
      <div className=" flex flex-col justify-center items-center gap-11 p-6 mb-11">
        <div className="text-3xl font-bold text-center">OUR STUDIOS</div>
        <hr className="text-gray-500 w-[88vw]" />
        {/* studios grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 w-[80vw]">
            <DynamicStdLogos img="/studiosLogos/logo_treyarch.png" />
            <DynamicStdLogos img="/studiosLogos/logo_infinityward.png" />
            <DynamicStdLogos img="/studiosLogos/logo_highmoon-studios.png" />
            <DynamicStdLogos img="/studiosLogos/logo_beenox.png" />
            <DynamicStdLogos img="/studiosLogos/logo_sledgehammer.png" />
            <DynamicStdLogos img="/studiosLogos/logo_raven.png" />
            <DynamicStdLogos img="/studiosLogos/logo-toysforbob.png" />
            <DynamicStdLogos img="/studiosLogos/logo_atvi-shanghai-studio.png" />
            <DynamicStdLogos img="/studiosLogos/logo_demonware.png" />
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-3 lg:h-81 justify-center border-b-1 border-t-1 border-gray-300 w-screen">
          <div className="flex lg:hidden w-full h-[44vh] z-10">
            <img
              className="object-cover w-full h-full"
              src="/imgs/joinus-banner-img-spyro.png"
              alt="Join Us Spyro Banner"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,_#000000_0%,_rgba(0,0,0,0.15)_48.85%)] z-11"></div>

          <div className="flex flex-col lg:flex-row w-screen justify-around p-11 ">
          <div className="flex flex-col gap-7 p-5 justify-center items-center lg:items-start z-12 left-10 order-2 ">
            <div className="text-5xl lg:w-90 lg:text-left text-center font-bold text-[#0767af]">
              HAVE FUN
            </div>
            <div className="lg:w-90 text-center lg:text-left text-md">
              Learn more about job opportunities
            </div >
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
  );
};

export default About;
