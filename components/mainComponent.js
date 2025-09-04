import React from "react";
import Image from "next/image";
import ShopNow from "./shopNow";

function MainComponent() {
  return (
    <>
      <div className="md:hidden flex px-8 gap-[22px] bg-[#F3F5F7] w-full items-center  py-2  h-9">
        <div className="  w-[360px]  flex items-center justify-center h-5">
          <div className=" h-[24px] flex items-center justify-between gap-2">
            <Image
              src="/ticket-percent.svg"
              alt="logo"
              width={20}
              height={18}
            />
            <div className="">
              <p className="w-[233px] h-[22px] flex items-center text-[14px]">
                30% off storewide - Limited time!
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/close.png"
          width={16}
          height={16}
          className=" cursor-pointer"
        />
      </div>
      <div className="flex flex-col w-full px-8 md:px-25 ">
        {/* CATEGORY CONTAINER */}
        <div className="flex flex-col md:flex-row  w-full h-[770px] md:h-[664px] gap-4">
          {/* LEFT */}
          <div className="w-full md:w-[48%] h-[377px]">
            {/* LIVING ROOM */}
            <div className="flex flex-col h-[377px] md:h-[644px]  relative">
              {/* LIVING ROOM IMAGE */}
              <Image
                src="/living-room.png"
                alt="Living Room"
                layout="fill"
                objectFit="cover"
              />
              {/* DESCRIPTION */}
              <div className="absolute top-8 left-8 flex flex-col items-start gap-1 w-[247px]">
                <p className="text-2xl font-semibold py-1">Living Room</p>
                <ShopNow text="Shop Now" fontSize="xs" />
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col w-full md:w-[48%] gap-4">
            {/* BEDROOM */}
            <div className="flex flex-col w-full h-[180px] md:h-[314px] relative">
              {/* BED ROOM IMAGE */}
              <Image
                src="/bed-room.png"
                alt="Bed Room"
                layout="fill"
                objectFit="cover"
              />
              {/* DESCRIPTION */}
              <div className="absolute bottom-8 left-8 flex flex-col items-start gap-1 w-[247px]">
                <p className="text-2xl font-semibold py-1">Bedroom</p>
                <ShopNow text="Shop Now" fontSize="xs" />
              </div>
            </div>
            {/* KITCHEN */}
            <div className="flex flex-col w-full h-[180px] md:h-[314px] relative">
              {/* KITCHEN IMAGE */}
              <Image
                src="/Paste image.png"
                alt="kitchen"
                layout="fill"
                objectFit="cover"
              />
              {/* DESCRIPTION */}
              <div className="absolute bottom-8 left-8 flex flex-col items-start gap-1 w-[247px]">
                <p className="text-2xl font-semibold py-1">Kitchen</p>
                <ShopNow text="Shop Now" fontSize="xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
