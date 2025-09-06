"use client"

import CartProductCard from "../../components/cartProductCard";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


function CartPage() {
  const pathname = usePathname();

  const [isCartOpen, setIsCartOpen] = useState(true);

  const cartToggler = () => {
    setIsCartOpen(!isCartOpen);
    pathname.href.push("/");
  };

  return (
    <div>
      {isCartOpen && (
        <div className="flex bg-[#6C7275] pl-8 md:pl-0 md:bg-[#FEFEFE] relative">
          <div className="flex flex-col p-8 md:py-4 items-center justify-between w-full md:w-2/5 bg-[#FEFEFE] absolute right-0 top-0">
            {/* HEADING */}
            <div className="flex items-center justify-between w-full">
              <h1 className="text-3xl font-bold text-black/900">Cart</h1>
              <Image
                src="/close.png"
                alt="line"
                width={28}
                height={28}
                onClick={cartToggler}
              />
            </div>
            {/* CART ITEMS */}
            <CartProductCard
              imgSrc="/cart-product-img.png"
              title="Tray Table"
              color="Black"
              quantity="2"
              price="19.99"
            />
            <CartProductCard
              imgSrc="/table-red.png"
              title="Tray Table"
              color="Red"
              quantity="6"
              price="109.99"
            />
            <CartProductCard
              imgSrc="/table-lamp.png"
              title="Table Lamp"
              color="gold"
              quantity="1"
              price="1.99"
            />

            {/* TOTAL & CHECKOUT */}
            <div className="flex flex-col w-full mt-25 items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full border-b border-b-[#E8ECEF] pb-2">
                <h2 className="text-lg font-bold text-[#141718]">Subtotal</h2>
                <p className="text-xl font-semibold text-black/900">$129.97</p>
              </div>
              <div className="flex items-center justify-between w-full pb-2">
                <h2 className="text-2xl font-bold text-[#141718]">Total</h2>
                <p className="text-xl font-semibold text-black/900">$529.97</p>
              </div>
              <Link href="/checkout" className="w-full">
                <button className=" py-2 px-4 bg-black text-white rounded-md text-lg w-full cursor-pointer">
                  Checkout
                </button>
              </Link>
              <Link
                href="/cart"
                className="flex items-
                center text-xs cursor-pointer border-b"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
