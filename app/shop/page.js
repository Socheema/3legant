import MobileProductCardVariant from "../../components/MobileProductCardVariant";
import Image from "next/image";
import React from "react";
import Newsletter from "../../components/newsletter";
import Breadcrumb from "../../components/BreadCrumb";

function Shop() {
  return (
    <>
      {/* MOBILE VIEW */}
      <div className="flex flex-col items-center justify-between  gap-8 md:px-25  px-8 md:hidden">
        {/* IMAGE CONTAINER */}
        <div className="flex w-full h-[308px] md:h-[392px] relative">
          <Image
            src="/mobile-shop-img.png"
            alt="Product Image"
            fill
            objectFit="cover"
            className="md:hidden"
          />
          <Image
            src="/shopdesktopimageplaceholder.png"
            alt="Product Image"
            fill
            objectFit="cover"
            className="hidden md:flex"
          />
          <div className="flex flex-col items-center justify-between absolute top-19 w-full h-[152px]">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
            />
            <p className="text-black/900 text-2xl flex self-center pl-3">
              Let's design the place you always imagined
            </p>
          </div>
        </div>
        {/* CONTENT */}
        <div className="flex flex-col w-full">
          {/* FILTER */}
          <div className="flex justify-between flex-col gap-2">
            {/* TOP */}
            <div className="flex items-center justify-between h-[56px] p-1 border-b border-t border-[#E8ECEF] md:border-none">
              <div className="flex items-center gap-2">
                <Image
                  src="/filter.png"
                  alt="search"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <p>Filter</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/filterbtn.png"
                  alt="search"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <Image
                  src="/filterbtn1.png"
                  alt="search"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex items-center justify-between h-[56px] p-1">
              <p className="text-lg text-black">Living Room</p>
              <div className="flex items-center gap-2">
                <p className="text-black/900">Sort by</p>
                <Image
                  src="/chevron-down.png"
                  alt="search"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCT */}
        <div className="flex items-center justify-between w-full gap-4 flex-col">
          <div className="flex items-center w-full  h-[281px] justify-between">
            <div>
              <MobileProductCardVariant
                imgSrc="/product-card.png"
                title="LoveSeat Sofa"
                price={199.0}
                oldPrice={350.0}
              />
            </div>
            <div>
              <MobileProductCardVariant
                imgSrc="/Image Placeholder(2).png"
                title="Luxury Sofa"
                price={299.0}
              />
            </div>
          </div>
          <div className="flex items-center w-full  h-[281px] justify-between">
            <div>
              <MobileProductCardVariant
                imgSrc="/Image placeholder(1).png"
                title="Table Lamp"
                price={99.0}
              />
            </div>
            <div>
              <MobileProductCardVariant
                imgSrc="/bed-cabinet.png"
                title="Bed Cabinet"
                price={9.0}
              />
            </div>
          </div>
          <div className="flex items-center w-full h-[281px] justify-between">
            <div>
              <MobileProductCardVariant
                imgSrc="/table-red.png"
                title="Table"
                price={350.0}
              />
            </div>
            <div>
              <MobileProductCardVariant
                imgSrc="/Image Placeholder(3).png"
                title="Lamp"
                price={59.0}
              />
            </div>
          </div>
          <div className="flex items-center w-full  h-[281px] justify-between">
            <div>
              <MobileProductCardVariant
                imgSrc="/pillow.png"
                title="Sofa Pillow"
                price={699.0}
              />
            </div>
            <div>
              <MobileProductCardVariant
                imgSrc="/table-lamp.png"
                title="Table Lamp"
                price={299.0}
              />
            </div>
          </div>
        </div>
        <button className="items-center border rounded-full border-[#141718] px-4 py-1 cursor-pointer">
          Show more
        </button>
      </div>
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col  items-center justify-between  gap-8 md:px-25  px-8 ">
        {/* IMAGE CONTAINER */}
        <div className="flex w-full h-[308px] md:h-[392px] relative">
          <Image
            src="/mobile-shop-img.png"
            alt="Product Image"
            fill
            objectFit="cover"
            className="md:hidden"
          />
          <Image
            src="/shopdesktopimageplaceholder.png"
            alt="Product Image"
            fill
            objectFit="cover"
            className="hidden md:flex"
          />
          <div className="flex flex-col items-center justify-between absolute top-19 w-full h-[152px]">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
            />
            <p className="text-black/900 text-2xl flex self-center pl-3">
              Let's design the place you always imagined
            </p>
          </div>
        </div>
        {/* CONTENT */}
        <div className="flex mt-15 gap-6 w-full">
          {/* LEFT FILTER */}
          <div className="h-[582px] w-[262px] flex flex-col gap-8">
            <div className="flex items-start gap-2">
              <Image
                src="/filter.png"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <p className="text-black/900 font-semibold text-[12px]">Filter</p>
            </div>
            <div className="w-full h-[264px] flex flex-col gap-2 overflow-y-hidden ">
              <p className="text-black/900 text-[12px] font-semibold">
                CATEGORIES
              </p>
              <div className="flex items-center justify-between">
                <div flex className="flex flex-col gap-2">
                  <p className="text-[#6C7275] text-sm">All Rooms</p>
                  <p className="text-black/900 text-sm">Living Room</p>
                  <ul className="flex flex-col gap-2 text-[#6C7275] list-disc text-xs cursor-pointer ">
                    <li className="list-none">BedRoom</li>
                    <li className="list-none">Kitchen</li>
                    <li className="list-none">Bathroom</li>
                    <li className="list-none">Dinning</li>
                    <li className="list-none">Outdoor</li>
                  </ul>
                </div>
                <div className="flex h-full w-[4px] flex-col border rounded-[6px] ">
                  <div className="flex-2 bg-[#141718]"></div>
                  <div className="flex-1 bg-[#6C7275]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black/900 font-semibold text-[12px]">PRICE</p>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="all price">All Price</label>
                <input type="checkbox" name=" all price" id="all price" />
              </div>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="$0.00 - 99.99">$0.00 - 99.99</label>
                <input
                  type="checkbox"
                  name=" $0.00 - 99.99"
                  id="$0.00 - 99.99"
                />
              </div>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="$100 - 199.99">$100 - 199.99</label>
                <input
                  type="checkbox"
                  name=" $100 - 199.99"
                  id="$100 - 199.99"
                />
              </div>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="$200 - 299.99">$200 - 299.99</label>
                <input
                  type="checkbox"
                  name=" $200 - 299.99"
                  id="$200 - 299.99"
                />
              </div>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="$300 - 399.99">$300 - 399.99</label>
                <input
                  type="checkbox"
                  name=" $300 - 399.99"
                  id="$300 - 399.99"
                />
              </div>
              <div className="flex items-center justify-between text-[#6c7275] text-xs">
                <label for="$400+">$400+</label>
                <input type="checkbox" name=" $400+" id="$400+" />
              </div>
            </div>
          </div>
          {/* RIGHT PRODUCT LIST */}
          <div className="ml-auto w-full flex flex-col items-center gap-10 ">
            <div className="flex items-start justify-between h-[56px] w-full">
              <p className="text-lg text-black">Living Room</p>
              <div className="flex items-center gap-1">
                <p className="text-black/900">Sort by</p>
                <Image
                  src="/chevron-down.png"
                  alt="search"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <div className=" ml-2 flex items-center gap-2">
                  <Image
                    src="/filterbtn.png"
                    alt="search"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/filterbtn1.png"
                    alt="search"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex md:w-full  gap-4">
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
              <div className="flex md:w-full  gap-4">
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-bedcabinet.png"
                    title="White Drawer unit"
                    price={89.9}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-tray-table.png"
                    title=" Black Tray Table"
                    price={19.99}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                    addToCart={true}
                    showWishList={true}
                    wishlistSrc="/addto-wishlist.png"
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-lamp.png"
                    title="Lamp"
                    price={39.9}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
              </div>
              <div className="flex md:w-full  gap-4">
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
              </div>
            </div>
            <button className="items-center border rounded-full border-[#141718] px-4 py-1 cursor-pointer">
              Show more
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Shop;
