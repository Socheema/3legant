import React from "react";
import Image from "next/image";
import ShopNow from "./shopNow";
import MobileProductCardVariant from "./MobileProductCardVariant";


function NewArrivals() {
  return (
    <div
      className="flex flex-col px-8 md:px-25 items-start justify-between mt-8
    gap-4 md:gap-8 w-full"
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
      <div className="w-full md:h-[442px]  flex gap-4 overflow-x-auto scrollbar-hide snap-x overflow-y-hidden">
      <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-pillow.png"
                    title="Large Beige Pillow"
                    price={3.99}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-table-lamp.png"
                    title="Table Lamp"
                    price={9.9}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>

                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/bamboo-basket.png"
                    title="Bamboo Basket"
                    price={9.99}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                  <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-product-card.png"
                    title="LoveSeat Sofa"
                    price={199.0}
                    showOldPrice={true}
                    oldPrice={400}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-luxury-sofa.png"
                    title="Luxury Sofa"
                    price={299.0}
                    showOldPrice={true}
                    oldPrice={500}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>

                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-lampp.png"
                    title="Table Lamp"
                    price={99.0}
                    newStock={true}
                    discount={true}
                    discountPrice={70}
                  />
                </div>
      </div>
      {/* RULE DIVIDER */}
      <div className="flex px-8 md:px-25 w-full md:hidden">
        <div className="flex h-[3px] w-full ">
          <div className="flex-2 bg-[#141718]"></div>
          <div className="flex-1 bg-[#6C7275]"></div>
        </div>
      </div>
      <div className="hidden flex h-[3px] w-full ">
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
