import Image from "next/image";
import React from "react";

function Newsletter() {
  return (
    <div>
      {/* MOBILE */}
      <div className="md:hidden bg-[#F2F4F6] px-8 py-20 flex flex-col items-center justify-between gap-8 mt-8">
        <div>
          <h3 className="text-[#141718] text-2xl">Join Our Newsletter</h3>
          <small className="text-[#6C7275] text-sm">
            Sign up for deals, new products, and promotions
          </small>
        </div>

        {/* FORM CONTAINER */}
        <div className="flex item-center w-full border-b">
          <form className="flex relative items center justify-between ">
            <Image
              src="/Union.png"
              width={18}
              height={18}
              className="object-contain"
            />
            <input
              type="text"
              placeholder="Enter address"
              className="border-none outline-none px-2 py-1 placeholder:text-[#6C7275]"
            />
          </form>
          <button className="flex px-2 py-1 ml-auto text-[#6C7275]">
            Sign Up
          </button>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex relative mt-10 h-[360px]">
        <Image src="/newsletter-background-img.png" fill objectFit="cover" />
        <div className="  hidden md:flex flex-col items-center gap-5  mt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[166px] w-[540px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#141718] text-2xl">Join Our Newsletter</h3>
            <small className="text-[#6C7275] text-sm">
              Sign up for deals, new products, and promotions
            </small>
          </div>
          {/* FORM CONTAINER */}
          <div className="flex item-center w-full border-b">
            <form className="flex relative items center justify-between ">
              <Image
                src="/Union.png"
                width={18}
                height={18}
                className="object-contain"
              />
              <input
                type="text"
                placeholder="Enter address"
                className="border-none outline-none px-2 py-1 placeholder:text-[#6C7275]"
              />
            </form>
            <button className="flex px-2 py-1 ml-auto text-[#6C7275]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
