import React from "react";
import profileImg from "../assets/profileImg.webp";

const Hero = () => {


  return (
    <section  className="relative flex items-center justify-center overflow-hidden">
      {/* Main content wrapper  */}
      <div className="relative mb-20 sm:mt-36 lg:mt-24 xl:mt-36 w-full px-6 py-8 flex flex-col sm:flex-row items-center sm:items-end justify-between">
        {/* TOP-CENTER heading*/}
        <h1 className="hero-title font-h mt-12 sm:mt-0 uppercase leading-none tracking-tighter text-center sm:absolute sm:left-1/2 sm:translate-y-[-95px] sm:top-6 sm:-translate-x-1/2 lg:-translate-y-[60px] xl:-translate-y-[90px] text-[14vw]  sm:whitespace-nowrap z-20 pointer-events-none">
          Creative Developer
        </h1>
        <div className="absolute  md:size-72 xl:size-96 top-6 bg-gray-300 z-[-2]"></div>
        <div className="absolute md:size-72 xl:size-96 bottom-6 right-8 bg-gray-500 z-[-2]"></div>

        {/*Left column */}
        <div className="hero-left font-b text-lg xl:text-3xl text-center sm:text-left sm:w-1/3  space-y-0 sm:space-y-4 mt-12 sm:mt-0 mb-4">
          <p>/ ART DIRECTION</p>
          <p>/ WEB DEVELOPMENT</p>
        </div>

        {/*Center block image */}
        <div className="relative mx-auto flex-1 sm:ml-[7%] md:ml-[5.5%] lg:ml-0 flex items-center justify-center lg:w-1/3 z-10 w-auto">
          <div className="w-[280px] lg:w-[400px] relative flex items-center justify-center">
            <img
              src={profileImg}
              alt="Rohit"
              loading="lazy"
              className="object-cover w-full h-full grayscale rounded-xl"
            />
          </div>
          <div className="absolute h-[400px] w-[400px] lg:w-[500px] bg-gray-400 z-[-1]"></div>
        </div>

        {/* Bottom-Right text*/}
        <div className="hero-right text-center sm:text-left mt-12 lg:mt-0 lg:w-1/3 font-b text-sm xl:text-2xl tracking-wider lg:whitespace-nowrap transform sm:translate-y-[90px] z-10 xl:pb-6">
          <p>Crafting elegant,</p>
          <p>responsive,</p>
          <p>and human-centered digital experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
