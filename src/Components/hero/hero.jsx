import React from "react";
import hero from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <div className="flex w-[100%] h-[400px] md:h-[500px] lg:h-[600px] px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 text-white">
      {/* --------------------------------hero img------------------- */}
      <img
        src={hero}
        alt=" two  couple rings with gray background"
        className=" w-[100%] h-[100%] object-cover"
      />
      {/* ----------------headings area ----------------------- */}
      <div className=" flex flex-col h-[400px] md:h-[500px] lg:h-[600px] pl-10 md:pl-20 font-playfair absolute z-10 justify-center">
        {/* --------------1st heading------------------------ */}
        <h1 className="flex text-4xl md:text-6xl lg:text-7xl tracking-wider font-playfair font-bold capitalize">
          him & her
        </h1>
        {/* --------------------------2nd heading--------------------- */}
        <h2 className="text-xl md:text-3xl  font-semibold mt-3 md:mt-5 capitalize tracking-wide ">
          love collection
        </h2>
        {/* -----------------------3rd line----------------------- */}
        <p className="mt-5 md:mt-5 font-poppins font-light text-sm md:text-base  w-[75%] md:w-[80%]  text-wrap lg:nowrap">
          Exclusive diamond rings for couples and lovers.
        </p>
        {/* -----------------------button area--------------------- */}
        <button className="flex w-max capitalize mt-10 md:mt-16 lg:mt-20 justify-center items-center font-poppins text-sm md:text-base px-10 md:px-12 py-3 md:py-3  border border-[rgba(161,152,63,0.87)] rounded-full cursor-pointer hover:scale-[0.95] duration-300 hover:bg-[rgba(161,151,63,0.97)] ">
          shop
        </button>
      </div>
    </div>
  );
}
