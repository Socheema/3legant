"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = (href) =>
    pathname === href ? "text-[#141718]" : "text-[#6C7275]";

  return (
    <>
    {/* LIMITED OFFER */}
      <div className="hidden  bg-[#F3F5F7] w-full md:flex items-center ">
        <div className="mr-auto"></div>
        <div className="  w-[360px] h-[24px] flex items-center justify-center">
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
        />
      </div>
      <div className=" hidden md:flex flex-col mx-25">
        <div className="flex items-center justify-between h-[60px]">
          <Image src="/3legant.png" alt="logo" width={105} height={24} />
          <div className="flex items-center justify-between gap-4 h-[18px] max-w-[545px]">
            <Link href="/" className={`${isHomePage("/")}`}>
              Home
            </Link>
            <Link href="/shop" className={`${isHomePage("/shop")}`}>
              Shop
            </Link>
            <Link href="/products" className={`${isHomePage("/products")}`}>
              Products
            </Link>
            <Link href="/contact" className={`${isHomePage("/contact")}`}>
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/search 02.svg"
              alt="search"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/user-circle.svg"
              alt="profile"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <div className="flex items-center gap-1">
              <Image
                src="/shopping bag.svg"
                alt="cart"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full h-[60px] px-8 py-4 flex items-center justify-between relative">
        <div className="w-[102] h-[24px] flex items-center justify-center gap-2">
          <Image
            src="/menu-line-horizontal.svg"
            alt="menu icon"
            width={24}
            height={24}
            onClick={() => setIsMenuOpen(true)}
          />
          <Image src="/3legant.png" alt="logo" width={70} height={24} />
        </div>
        <div className="flex items-center gap-2 h-[28px] w-[50px]">
          <Image
            src="/shopping bag.svg"
            alt="shopping cart"
            width={24}
            height={24}
          />
          <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col p-8 absolute left-0 top-0 z-20 bg-[#FFFFFF] w-full h-[calc(100vh-80px)] gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center  justify-between">
              <Image
                src="/3legant.png"
                alt="logo"
                width={70}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/close.png"
                alt="logo"
                width={24}
                height={24}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer ml-auto"
              />
            </div>
            <form
              action=""
              className="flex items-center gap-2 border rounded-md p-2"
            >
              <Image src="/search 02.svg" alt="search" width={20} height={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md outline-0 text-[#6C7275] "
              />
            </form>
            <div className="flex flex-col items-start justify-between gap-2 mb-auto">
              <Link
                href="/"
                className={`${isHomePage(
                  "/"
                )} border-b border-[#6C7275] w-full py-2 `}
              >
                Home
              </Link>
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/shop"
                  className={`${isHomePage(
                    "/shop"
                  )} border-b border-[#E8ECEF] w-full py-2 `}
                >
                  Shop
                </Link>
                <Image
                  src="/chevron-down.png"
                  alt="more options"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/products"
                  className={`${isHomePage(
                    "/products"
                  )} border-b border-[#E8ECEF] w-full py-2 `}
                >
                  Products
                </Link>
                <Image
                  src="/chevron-down.png"
                  alt="more options"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
              <Link
                href="/contact"
                className={`${isHomePage(
                  "/contact"
                )} border-b border-[#E8ECEF] w-full py-2 `}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col items-start gap-4">
              {/* TOP */}
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#6C7275]">Cart</p>
                  <div className="flex items-center gap-2 ml-auto">
                    <Image
                      src="/shopping bag.svg"
                      alt="cart"
                      width={24}
                      height={24}
                    />
                    <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#6C7275]">Whishlist</p>
                  <div className="flex items-center gap-2 ml-auto">
                    <Image
                      src="/line.png"
                      alt="cart"
                      width={24}
                      height={24}
                    />
                    <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </div>
                
              </div>
              {/* BOTTOM */}
              <div className="flex items-center flex-col w-full gap-2">
                <button className="w-full bg-black text-white h-[40px] rounded-md">
                  Sign In
                </button>
                <div className="flex self-start gap-4">
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  <Image
                    src="/youtube.svg"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
