"use client";

import CartProductCard from "./cartProductCard";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import EmptyCart from "./EmptyCart";
import useCartStore from "../store/cartStore";
import { useState } from "react";
import { useEffect } from "react";

function CartComponent() {
  const cartItems = useCartStore((s) => s.cart);
  const getTotal = useCartStore((s) => s.getTotal);
  const [isCartOpen, setIsCartOpen] = useState(true);

  let isCartEmpty = cartItems.length === 0;

  useEffect(() => {
    setIsCartOpen[!isCartOpen];
  }, []);

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

              {isCartEmpty ? (
                <EmptyCart onCloseCart={() => setIsCartOpen(false)} />
              ) : (
                <>
                  {/* CART ITEMS - Scrollable area */}
                  <div className="flex-1 w-full overflow-y-auto my-4 space-y-4">
                    {cartItems.map((item) => (
                      <CartProductCard
                        key={item.id}
                        id={item.id}
                        imgSrc={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    ))}
                  </div>

                  {/* TOTAL & CHECKOUT - Fixed at bottom */}
                  <div className="flex flex-col w-full items-center justify-between gap-4 bg-white pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between w-full border-b border-b-[#E8ECEF] pb-2">
                      <h2 className="text-lg font-bold text-[#141718]">
                        Subtotal
                      </h2>
                      <p className="text-xl font-semibold text-black">
                     {`$${getTotal().toFixed(2)}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full pb-2">
                      <h2 className="text-2xl font-bold text-[#141718]">
                        Total
                      </h2>
                      <p className="text-xl font-semibold text-black">
                        {`$${getTotal().toFixed(2)}`}
                      </p>
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
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartComponent;
