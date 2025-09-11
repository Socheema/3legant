"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { useState } from "react";
import CartBreadcrumb from "../../components/CartBreadCrumb";
import CartProductCard from "../../components/cartProductCard";
import DesktopCartProductCard from "../../components/DesktopCartProductCard";

function CartPage() {
  const [showDiscountBanner, setShowDiscountBanner] = useState(false);
  useEffect(() => {
    setShowDiscountBanner(true);
  }, []);

  return (
    <>
      {showDiscountBanner && (
        <div className="md:hidden flex px-8 gap-[22px] bg-[#F3F5F7] w-full items-center  py-2  h-9">
          <div className="  w-[360px]  flex items-center justify-center h-5">
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
          </div>
          <Image
            src="/close.png"
            width={16}
            height={16}
            className=" cursor-pointer"
            alt="close"
            onClick={() => setShowDiscountBanner(!showDiscountBanner)}
          />
        </div>
      )}
      <Navbar />
      <div className="pt-4 pb-10 gap-10 flex flex-col w-full px-8 md:px-25 items-center ">
        <div className="flex gap-2 items-center self-start md:hidden">
          <Image
            src="/images/products/vector.png"
            alt="cart"
            width={8}
            height={8}
          />
          <p className="black/600">back</p>
        </div>
        <div className="flex flex-col w-full gap-6 items-center justify-center">
          <h1 className="px-8 text-4xl font-semibold self-center md:mt-6">Cart</h1>
          <div className="w-full flex items-center justify-center pb-4 overflow-x-auto overflow-visible md:overflow-x-clip">
            <CartBreadcrumb
              items={[
                { label: "Shopping cart" },
                { label: "Checkout", href: "/checkout" },
                { label: "Payment", href: "/payment" },
              ]}
            />
          </div>
        </div>
        {/* PRODUCT */}
        <div className="flex flex-col md:flex-row w-full gap-16">
          <div className="flex flex-col gap-6 w-full md:flex-2">
            <div className="flex items-center w-full">
              <p className="text-lg text-black/900 w-2/5">Product</p>
              <div
                className="items-center justify-between w-3/5
hidden md:flex px-4"
              >
                <p className="text-lg text-black/900 ">Quantity</p>
                <p className="text-lg text-black/900 ">Price</p>
                <p className="text-lg text-black/900 ">Subtotal</p>
              </div>
            </div>
            {/* MOBILE */}
            <div className="md:hidden">
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
            {/* DESKTOP */}
            <div className="hidden md:flex flex-col self-start w-full">
              <DesktopCartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
              <DesktopCartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
              <DesktopCartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
            </div>
            {/* Coupon */}
          </div>
          <div className="flex flex-col md:flex-1">
            {/* CART SUMMARY */}
            <div className="flex flex-col gap-4 py-6 w-full border border-[#E6E8EB] rounded-md px-4">
              <p>Summary</p>
              <div>
                <div className="flex flex-col gap-4 w-full">
                  <div className=" flex items-center justify-between border rounded-md py-2 px-4">
                    <div>
                      <input type="radio" name="payment" id="free-shipping" />
                      <label
                        htmlFor="free-shipping"
                        className="p-2 text-lg text-[#141718]"
                      >
                        Free Shipping
                      </label>
                    </div>
                    <span>$0.00</span>
                  </div>
                  <div className=" flex items-center justify-between border rounded-md py-2 px-4">
                    <div>
                      {" "}
                      <input
                        type="radio"
                        name="payment"
                        id="Express-shipping"
                      />
                      <label
                        htmlFor="Express-shipping"
                        className="p-2 text-lg text-[#141718]"
                      >
                        Express Shipping
                      </label>
                    </div>
                    <span>$15.00</span>
                  </div>
                  <div className=" flex items-center justify-between border rounded-md py-2 px-4">
                    <div>
                      <input type="radio" name="payment" id="pick-up" />
                      <label
                        htmlFor="pick-up"
                        className="p-2 text-lg text-[#141718]"
                      >
                        Pick Up
                      </label>
                    </div>
                    <span>%21.00</span>
                  </div>
                </div>
                {/* TOTAL */}
                <div className="flex flex-col items-center justify-between gap-4 mt-8">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#141718] text-lg font-semibold">
                      Subtotal:
                    </p>
                    <p className="text-[#141718] font-semibold text-lg">
                      1234.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#141718] text-lg font-semibold">
                      Total
                    </p>
                    <p className="text-[#141718] text-lg font-semibold">
                      1345.00
                    </p>
                  </div>
                  <button className="bg-black text-white py-2 px-4 rounded-md w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex flex-col items-center self-start py-8 md:py-0 gap-4 min-w-[300px] max-w-[500px]">
              <div className="flex flex-col gap-2">
                <p className="text-[#141718]">Have a coupon</p>
                <p className="text-[#6C7275]">
                  Add your code for an instant cart discount
                </p>
              </div>
              <div className="flex items center justify-between w-full border border-[#6C7275] px-4 py-2 relative">
                <input
                  type="text "
                  placeholder="Coupon Code "
                  className=" pl-6 border-none outline-none w-full placeholder:text-[#6C7275] "
                />
                <p className="text-black/900 text-lg">Apply</p>
                <Image
                  src="/ticket-percent.svg"
                  width={16}
                  height={16}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
      </div>
    </>
  );
}

export default CartPage;
