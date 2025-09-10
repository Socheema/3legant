"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import MoreProductsCard from "./MoreProductsCard";
import ShopNow from "./shopNow";
import RuleDividerCard from "./RuleDividerCard";

function ProductReviewCard() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const productImages = [
    "/images/products/product-tray-table.png",
    "/images/products/product-tray-table1.png",
    "/images/products/product-tray-table2.png",
    "/images/products/product-tray-table3.png",
    "/images/products/product-tray-table4.png",
    "/images/products/product-tray-table5.png",

    // Add more image paths as needed
  ];

  return (
    <div className="py-4 ">
      <div className="flex flex-col md:flex-row w-full md:gap-15 items-start">
        <div className="hidden md:flex flex-1 flex-wrap gap-6 w-full">
          {productImages.map((src, index) => (
            <div key={index} className="w-full max-w-[262px] min-w-[150px] flex-1 relative" style={{ aspectRatio: '3 / 4' }}>
              <Image
                src={src}
                alt={`Product image ${index + 1}`}
                fill
                className="absolute object-cover"
              />
            </div>
          ))}
        </div>
        <div className="py-4 md:py-0 flex flex-col gap-4 w-full md:flex-1">
          {/* REVIEW */}
          <div className="flex flex-col items-start w-full justify-between gap-3 border-b border-[#E8ECEF]">
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
              <p className="text-sm text-[#141718]">11 Reviews</p>
            </div>
            <p className="text-[#141718] text-2xl">Tray Table</p>
            <small className="text-[#6C7275]">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </small>
            <div className="flex items-center gap-2 pb-2">
              <p className="text-black/900 text-lg">$199.99</p>
              <strike className="text-[#6C7275] text-sm">$249.99</strike>
            </div>
          </div>

          {/* OFFER */}
          <div className="flex flex-col items-start w-full justify-between gap-3 border-b border-[#E8ECEF] py-6">
            <small className="text-[#343839]">Offer expires in:</small>
            <table className="w-full self-start">
              <thead>
                <tr className="text-[#141718]  font-semibold text-2xl">
                  <td className="text-center ">02</td>
                  <td className="text-center ">12</td>
                  <td className="text-center ">45</td>
                  <td className="text-center ">05</td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#6C7275] text-sm">
                  <td className="text-center">Days</td>
                  <td className="text-center">Hours</td>
                  <td className="text-center">Minutes</td>
                  <td className="text-center">Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* MEASUREMENTS*/}
          <div className="flex flex-col items-start justify-between gap-3 w-full">
            <div className="flex flex-col items-start mb-6 gap-2">
              <small className="text-[#6C7275]">Measurements</small>
              <p>17 1/2*20 5/8 "</p>
            </div>
            <div className="flex flex-col items-start mb-6 gap-2 w-full">
              <div className="flex items-center gap-3">
                <small className="text-[#6C7275]">Choose Color</small>
                <Image
                  src="/images/products/product-arrow-icon.png"
                  height={8}
                  width={8}
                />
              </div>
              <p>Black</p>
              <Image
                src="/images/products/product-img-options.png"
                height={54}
                width={154}
              />
            </div>
          </div>
          <div>
            {/* WISHLIST */}
            <div className="flex items-start justify-between gap-4 flex-col">
              <div className="flex gap-4 w-full items-center">
                <div className="flex gap-3 items-center  px-4 py-2 bg-[#F3F5F7] rounded-md ">
                  <button className="text-2xl">-</button>
                  <p className="text-lg">2</p>
                  <button className="text-2xl">+</button>
                </div>
                <div className="flex gap-3  px-8 items-center py-2 border rounded-md border-black/900">
                  <Image src="/line.png" height={24} width={24} />
                  <p className="text-lg">Wishlist</p>
                </div>
              </div>
              <button className="text-lg bg-[#141718] text-white rounded-md py-2 w-full">
                Add to Cart
              </button>
            </div>
            {/* CATEGORY */}
            <div className="flex flex-col items-start justify-between py-6 gap-3 w-full">
              <div className="w-full flex items-center gap-5">
                <p className="text-[#6C7275]">SKU</p>
                <p className="text-[#141718]">123456</p>
              </div>
              <div className="w-full flex items-center gap-5">
                <p className="text-[#6C7275]">CATEGORY</p>
                <p className="text-[#141718]">Living Room, Bedroom</p>
              </div>
            </div>
            {/* ADDITIONAL INFO */}
            <div className="flex flex-col items-start gap-2  overflow-y-auto w-full">
              <div className="container flex flex-col items-start gap-2 w-full border-b">
                <div
                  className="flex items-center justify-between w-full py-2 "
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <p className="text-[#141718] text-2xl">
                    Additional Information
                  </p>
                  {isAccordionOpen ? (
                    <Image
                      src="/images/products/chevron-up.png"
                      height={24}
                      width={24}
                    />
                  ) : (
                    <Image src="/chevron-down.png" height={24} width={24} />
                  )}
                </div>
                {isAccordionOpen && (
                  <div className="flex items-start gap-4 w-full flex-col">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Details</p>
                      <p className="text-sm">
                        You can use the removable tray for serving. The design
                        makes it easy to put the tray back after use since you
                        place it directly on the table frame without having to
                        fit it into any holes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Packaging</p>
                      <p className="text-[#141718] text-sm ">
                        Width: 20 " Height: 1 ½ " Length: 21 ½ " <br />
                        Weight: 7 lb 8 oz <br />
                        Package(s): 1
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="container flex flex-col items-start gap-2 w-full border-b">
                <div
                  className="flex items-center justify-between w-full py-2 "
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <p className="text-[#141718] text-2xl">Questions</p>
                  {isAccordionOpen ? (
                    <Image
                      src="/images/products/chevron-up.png"
                      height={24}
                      width={24}
                    />
                  ) : (
                    <Image src="/chevron-down.png" height={24} width={24} />
                  )}
                </div>
                {isAccordionOpen && (
                  <div className="flex items-start gap-4 w-full flex-col">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Details</p>
                      <p className="text-sm">
                        You can use the removable tray for serving. The design
                        makes it easy to put the tray back after use since you
                        place it directly on the table frame without having to
                        fit it into any holes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Packaging</p>
                      <p className="text-[#141718] text-sm">
                        Width: 20 " Height: 1 ½ " Length: 21 ½ " <br />
                        Weight: 7 lb 8 oz <br />
                        Package(s): 1
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="container flex flex-col items-start gap-2 w-full border-b">
                <div
                  className="flex items-center justify-between w-full py-2 "
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <p className="text-[#141718] text-2xl">Reviews (11)</p>
                  {isAccordionOpen ? (
                    <Image
                      src="/images/products/chevron-up.png"
                      height={24}
                      width={24}
                    />
                  ) : (
                    <Image src="/chevron-down.png" height={24} width={24} />
                  )}
                </div>
                {isAccordionOpen && (
                  <div className="flex items-start gap-4 w-full flex-col">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Details</p>
                      <p className="text-sm">
                        You can use the removable tray for serving. The design
                        makes it easy to put the tray back after use since you
                        place it directly on the table frame without having to
                        fit it into any holes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6C7275] text-lg">Packaging</p>
                      <p className="text-[#141718] text-sm">
                        Width: 20 " Height: 1 ½ " Length: 21 ½ " <br />
                        Weight: 7 lb 8 oz <br />
                        Package(s): 1
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ADDITIONAL PRODUCTS */}
      <div className="flex flex-col pt-8 mt-4 gap-10 items-start w-full">
        <div className="flex items-start  md:items-center justify-between w-full">
          <p className="text-3xl">You might also like</p>
          <div className="hidden md:flex">
            <ShopNow text="More Products" fontSize="text-lg" />
          </div>
        </div>
        <MoreProductsCard />
        <RuleDividerCard />
        <div className="md:hidden">
          <ShopNow text="More Products" fontSize="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default ProductReviewCard;
