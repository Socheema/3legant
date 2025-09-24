import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center md:justify-between w-full  bg-[#141718] px-8 md:px-25 py-12 gap-8">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* TOP */}
        <div className="flex flex-col md:flex-row  items-center justify-center gap-4">
          <h3 className="text-white text-lg">3legant</h3>
          <div className="flex h-[2px] w-6 md:h-4 md:w-[2px] bg-[#6C7275]"> </div>
          <small className="text-[#6C7275] text-sm">
            Gift & Decoration Store
          </small>
        </div>
        {/* BOTOM */}
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm border-b border-[#6C7275] md:border-none pb-4">
          <li className="flex items-center hover:text-white list-none text-sm text-[#6C7275] md:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-white list-none text-sm text-[#6C7275] md:text-white">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-white list-none text-sm text-[#6C7275] md:text-white">
            <Link href="/products">Product</Link>
          </li>
          <li className="hover:text-white list-none text-sm text-[#6C7275] md:text-white">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-white list-none text-sm text-[#6C7275] md:text-white">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col  md:flex-row-reverse items-center justify-between gap-4 w-full">
        
        {/* TOP SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-4 ">
          <Image
            src="/instagram.svg"
            alt="instagram"
            width={18}
            height={18}
            className=" invert"
          />
          <Image
            src="/youtube.svg"
            alt="youtube"
            width={18}
            height={18}
            className=" invert"
          />
          <Image
            src="/facebook.svg"
            alt="facebook"
            width={18}
            height={18}
            className=" invert"
          />
        </div>
        {/* BOTTOM LINKS */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 text-[#6C7275] md:text-[#fff] ">
          <ul className="flex items-center justify-center gap-4">
            <li className="text-[14px]">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="text-[14px]">
              <Link href="/terms">Terms of Use</Link>
            </li>
          </ul>
          <small className="text-[10px] text-[#6C7275]">
            Copyright &copy; 2025 3legant. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
