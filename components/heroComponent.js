import React from "react";
import Image from "next/image";

function HeroComponent() {
  return (
    <div className="px-8 md:px-25 flex flex-col w-full h-[527px] md:h-[760px] ">
      <div className="flex flex-col gap-5 md:gap-8  w-full">
        <div className="w-full relative h-[311px] md:h-[536px] ">
          <Image
            src="/slider-mobile.png"
            fill
            className="md:hidden object-cover"
          />
          <Image
            src="/Slider.png"
            fill
            className="hidden md:block object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 justify-between">
          <h1 className="text-[#141718] text-2xl md:text-4xl lg:text-6xl ">
            Simply Unique{" "}
            <span className="text-[#6C7275] font-extrabold">|</span>
            <br />
            Simply better{" "}
            <span className="text-[#6C7275] font-extrabold">.</span>
          </h1>
          <p className="text-[#6C7275] md:self-center">
            <span className="text-[#343839]">3legant</span> is a gift and
            decoration store based in HcMC, <br /> Vietnam. Est since 2019
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
