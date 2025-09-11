"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

function DiscountBannerCard() {
  const [isVisible, setIsVisible] = useState(true);


  return (
    <>
   { isVisible && ( <div className="flex bg-[#F3F5F7] w-full items-center ">
      <div className="mr-auto"></div>
      <div className="  w-[360px] h-[24px] flex items-center justify-center">
        <div className=" h-[24px] flex items-center justify-between gap-2">
          <Image src="/ticket-percent.svg" alt="logo" width={20} height={18} />
          <div className="">
            <p className="w-[233px] h-[22px] flex items-center text-[14px]">
              30% off storewide - Limited time!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[2px]">
          <p className="w-[62px] text-[#377DFF] flex items-center text-[12px] border-b border-[#377DFF]">
            Shop Now
          </p>
          <Image src="/arrow-right.png" alt="arrow" width={12} height={12} />
        </div>
      </div>
      <Image
        src="/close.png"
        width={8}
        height={8}
        className="ml-auto mr-2 cursor-pointer"
        alt="close"
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>)}
    </>
  );
}

export default DiscountBannerCard;
