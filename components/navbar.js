"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ActiveMobileMenu from "./activeMobileMenu";
import CartComponent from "./CartComponent";
import DiscountBannerCard from "../components/DiscountBannerCard";

function Navbar({ showBanner = false }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const isHomePage = (href) =>
    pathname === href ? "text-[#141718]" : "text-[#6C7275]";

  return (
    <>
      {/* LIMITED OFFER */}
      <div className="hidden md:flex">
        {showBanner && <DiscountBannerCard />}
      </div>

      <div className=" hidden md:flex flex-col mx-25 mb-8">
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
          {showSearch && (
            <form action="">
              <input
                type="text"
                placeholder="Search..."
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
              />
            </form>
          )}
          <div className="flex items-center gap-4">
            <Image
              src="/search 02.svg"
              alt="search"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
            <Image
              src="/user-circle.svg"
              alt="profile"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => router.push("/login")}
            />
            <div className="flex items-center gap-1">
              <Image
                src="/shopping bag.svg"
                alt="cart"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
              <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <CartComponent />}
      <div className="md:hidden w-full h-[60px] px-8 py-4 flex items-center justify-between relative">
        <div className="w-[102] h-[24px] flex items-center justify-center gap-2">
          <Image
            src="/menu-line-horizontal.svg"
            alt="menu icon"
            width={24}
            height={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Image src="/3legant.png" alt="logo" width={70} height={24} />
        </div>
        <div className="flex items-center gap-2 h-[28px] w-[50px]">
          <Image
            src="/shopping bag.svg"
            alt="shopping cart"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          <span className=" bg-black text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        {isMenuOpen && <ActiveMobileMenu />}
      </div>
    </>
  );
}

export default Navbar;
