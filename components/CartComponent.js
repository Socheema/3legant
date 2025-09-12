"use client";

import CartProductCard from "./cartProductCard";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function CartComponent() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <div>
      {isCartOpen && (
        <>
          {/* Full screen overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart panel */}
          <div className="fixed right-0 top-0 h-screen w-full md:w-96 bg-white z-50 shadow-2xl shadow-black/20">
            <div className="flex flex-col p-8 md:py-4 items-center h-full justify-between">
              {/* HEADING */}
              <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl font-bold text-black">Cart</h1>
                <Image
                  src="/close.png"
                  alt="close"
                  width={28}
                  height={28}
                  onClick={() => setIsCartOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              
              {/* CART ITEMS - Scrollable area */}
              <div className="flex-1 w-full overflow-y-auto my-4 space-y-4">
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
              </div>

              {/* TOTAL & CHECKOUT - Fixed at bottom */}
              <div className="flex flex-col w-full items-center justify-between gap-4 bg-white pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between w-full border-b border-b-[#E8ECEF] pb-2">
                  <h2 className="text-lg font-bold text-[#141718]">Subtotal</h2>
                  <p className="text-xl font-semibold text-black">$129.97</p>
                </div>
                <div className="flex items-center justify-between w-full pb-2">
                  <h2 className="text-2xl font-bold text-[#141718]">Total</h2>
                  <p className="text-xl font-semibold text-black">$529.97</p>
                </div>
                <Link href="/checkout" className="w-full">
                  <button className="py-2 px-4 bg-black text-white rounded-md text-lg w-full cursor-pointer">
                    Checkout
                  </button>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center text-xs cursor-pointer border-b"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartComponent;
