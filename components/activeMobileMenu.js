"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CartComponent from "./CartComponent";

function ActiveMobileMenu() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isHomePage = (href) =>
    pathname === href ? "text-[#141718]" : "text-[#6C7275]";
  return (
    <>
      {openMenu ? (
        <div className="flex flex-col p-8 absolute left-0 top-0 z-20 bg-[#FFFFFF] w-full h-[calc(100vh-80px)] gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {isCartOpen && <CartComponent />}
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
              onClick={() => setOpenMenu(false)}
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
              )} border-b border-[#E8ECEF] w-full py-2 `}
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
                    onClick={() => setIsCartOpen(!isCartOpen)}
                  />
                  <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#6C7275]">Whishlist</p>
                <div className="flex items-center gap-2 ml-auto">
                  <Image src="/line.png" alt="cart" width={24} height={24} />
                  <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex items-center flex-col w-full gap-2">
             <a href="/login " className="w-full">
              <button className="w-full bg-black text-white h-[40px] rounded-md">
                Sign In
              </button>
             </a>
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
      ) : null}
    </>
  );
}

export default ActiveMobileMenu;
