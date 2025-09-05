import React from "react";
import Image from "next/image";
import ShopNow from "./shopNow";

function NewArrivals() {
  return (
    <div
      className="flex flex-col px-8 md:px-25 items-start justify-between mt-8
    gap-4 md:gap-8 w-full border"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        <h1 className="text-[#141718] text-lg md:text-4xl lg:text-6xl font-normal">
          New <br />
          Arrivals
        </h1>
        <div className="hidden md:flex ml-auto">
          <ShopNow text="More Products" fontSize="lg" />
        </div>
      </div>
      <div className="w-full h-[392px] max-w-[308px] md:max-w-[1039.5px] flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex flex-col">
          <div className="w-[231px] h-[307px] md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
            <Image
              src="/product-card.png"
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="flex flex-col items-center gap-2  absolute top-4 left-4 ">
              <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[67px] h-[24px] items-center justify-center text-[12px] font-semibold">
                New
              </p>
              <p className="h-[24px] w-[71px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
                -50%
              </p>
            </div>
            <Image
              src="/addto-wishlist.png"
              alt="add to cart"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer object-cover"
            />
            <button className="absolute bottom-4 left-1/2 bg-[#000] w-[203px] h-[40px] text-white text-[14px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-lg">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src="/star Icon.png"
                    alt="review"
                    width={16}
                    height={16}
                    className="object-cover"
                    key={index}
                  />
                ))}
            </div>
            <p className="">Loveseat Sofa</p>
            <div className="flex items-center gap-2">
              <span className="text-[#141718]">$199.00</span>
              <strike className="text-[#6C7275]">$400.00</strike>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[231px] h-[307px] md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
            <Image
              src="/product-card.png"
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="flex flex-col items-center gap-2  absolute top-4 left-4 ">
              <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[67px] h-[24px] items-center justify-center text-[12px] font-semibold">
                New
              </p>
              <p className="h-[24px] w-[71px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
                -50%
              </p>
            </div>
            <Image
              src="/addto-wishlist.png"
              alt="add to cart"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer object-cover"
            />
            <button className="absolute bottom-4 left-1/2 bg-[#000] w-[203px] h-[40px] text-white text-[14px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-lg">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src="/star Icon.png"
                    alt="review"
                    width={16}
                    height={16}
                    className="object-cover"
                    key={index}
                  />
                ))}
            </div>
            <p className="">Loveseat Sofa</p>
            <div className="flex items-center gap-2">
              <span className="text-[#141718]">$199.00</span>
              <strike className="text-[#6C7275]">$400.00</strike>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[231px] h-[307px] md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
            <Image
              src="/product-card.png"
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="flex flex-col items-center gap-2  absolute top-4 left-4 ">
              <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[67px] h-[24px] items-center justify-center text-[12px] font-semibold">
                New
              </p>
              <p className="h-[24px] w-[71px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
                -50%
              </p>
            </div>
            <Image
              src="/addto-wishlist.png"
              alt="add to cart"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer object-cover"
            />
            <button className="absolute bottom-4 left-1/2 bg-[#000] w-[203px] h-[40px] text-white text-[14px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-lg">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src="/star Icon.png"
                    alt="review"
                    width={16}
                    height={16}
                    className="object-cover"
                    key={index}
                  />
                ))}
            </div>
            <p className="">Loveseat Sofa</p>
            <div className="flex items-center gap-2">
              <span className="text-[#141718]">$199.00</span>
              <strike className="text-[#6C7275]">$400.00</strike>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[231px] h-[307px] md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
            <Image
              src="/product-card.png"
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="flex flex-col items-center gap-2  absolute top-4 left-4 ">
              <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[67px] h-[24px] items-center justify-center text-[12px] font-semibold">
                New
              </p>
              <p className="h-[24px] w-[71px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
                -50%
              </p>
            </div>
            <Image
              src="/addto-wishlist.png"
              alt="add to cart"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer object-cover"
            />
            <button className="absolute bottom-4 left-1/2 bg-[#000] w-[203px] h-[40px] text-white text-[14px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-lg">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src="/star Icon.png"
                    alt="review"
                    width={16}
                    height={16}
                    className="object-cover"
                    key={index}
                  />
                ))}
            </div>
            <p className="">Loveseat Sofa</p>
            <div className="flex items-center gap-2">
              <span className="text-[#141718]">$199.00</span>
              <strike className="text-[#6C7275]">$400.00</strike>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[231px] h-[307px] md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
            <Image
              src="/product-card.png"
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="flex flex-col items-center gap-2  absolute top-4 left-4 ">
              <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[67px] h-[24px] items-center justify-center text-[12px] font-semibold">
                New
              </p>
              <p className="h-[24px] w-[71px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
                -50%
              </p>
            </div>
            <Image
              src="/addto-wishlist.png"
              alt="add to cart"
              width={32}
              height={32}
              className="absolute top-4 right-4 cursor-pointer object-cover"
            />
            <button className="absolute bottom-4 left-1/2 bg-[#000] w-[203px] h-[40px] text-white text-[14px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-lg">
              Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src="/star Icon.png"
                    alt="review"
                    width={16}
                    height={16}
                    className="object-cover"
                    key={index}
                  />
                ))}
            </div>
            <p className="">Loveseat Sofa</p>
            <div className="flex items-center gap-2">
              <span className="text-[#141718]">$199.00</span>
              <strike className="text-[#6C7275]">$400.00</strike>
            </div>
          </div>
        </div>
      </div>
      {/* RULE DIVIDER */}
      <div className="flex px-8 md:px-25 w-full md:hidden">
        <div className="flex h-[3px] border w-full ">
          <div className="flex-2 bg-[#141718]"></div>
          <div className="flex-1 bg-[#6C7275]"></div>
        </div>
      </div>
      <div className="hidden flex h-[3px] border w-full ">
        <div className="flex-2 bg-[#141718]"></div>
        <div className="flex-1 bg-[#6C7275]"></div>
      </div>
      {/* MORE PRODUCTS */}
      <div className="md:hidden">
        <ShopNow text="More Products" fontSize="lg" />
      </div>
    </div>
  );
}

export default NewArrivals;
