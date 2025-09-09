import Image from "next/image";
import React from "react";

function AboutCard({ title, description, description1, imgSrc }) {
  return (
    <div className="flex w-[170px] md:w-[252px] h-[198px] md:h-[220px] items-start px-4 py-8 md:py-10.5 md:px-8 flex-col gap-4  bg-[#F3F5F7] ">
      <div className=" relative w-10 h-10 md:w-8 md:h-8">
        <Image
          src={imgSrc}
          alt="Free Shipping"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px] md:text-[12px] text-[#141718]">{title}</h3>
        <p className="text-[#6C7275] text-sm md:text-[8px]">
          {description} <br />
          {description1}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
