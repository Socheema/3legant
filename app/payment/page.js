"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { useState } from "react";
import CartBreadcrumb from "../../components/CartBreadCrumb";
import Link from "next/link";
import { useRouter } from "next/navigation";


function PaymentConfirmationPage() {
  const [showDiscountBanner, setShowDiscountBanner] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setShowDiscountBanner(true);
  }, []);

  return (
    <>
      {showDiscountBanner && (
        <div className=" flex md:hidden px-8 gap-[22px] bg-[#F3F5F7] w-full items-center  py-2  h-9">
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
        <div className="flex gap-2 items-center self-start md:hidden" onClick={() => router.push("/checkout")}>
          <Image
            src="/images/products/vector.png"
            alt="cart"
            width={8}
            height={8}
          />
          <p className="black/600">back</p>
        </div>
        <div className="flex flex-col w-full gap-6 items-center justify-center">
          <h1 className="px-8 text-4xl font-semibold self-center md:mt-6">
            Complete!
          </h1>
          <div className="w-full flex items-center justify-center pb-4 overflow-x-auto overflow-visible md:overflow-x-clip">
            <CartBreadcrumb
              items={[
                { label: "Shopping cart", href: "/cart" },
                { label: "Checkout", href: "/checkout" },
                { label: "Payment" },
              ]}
            />
          </div>
          <div className="px-4 flex flex-col gap-10 items-center  py-8 md:py-8 w-full md:w-[600px] lg:w-[700px] rounded-lg shadow-2xl shadow-black/10">
            <div className="flex flex-col gap-4 items-start md:items-center">
              <small className="text-[#6C7275] md:text-lg">Thank you 🎉 </small>
              <h2 className="text-2xl font-semibold md:text-4xl">
                Your Order has been received
              </h2>
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Image
                  src="/table-red.png"
                  alt="red table"
                  width={75}
                  height={150}
                />
                <span className="flex justify-center w-[20] h-[20] rounded-full bg-black text-white items-center absolute text-xs top-0 r-2">
                  1
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/table-red.png"
                  alt="red table"
                  width={75}
                  height={150}
                />
                <span className="flex justify-center w-[20] h-[20] rounded-full bg-black text-white items-center absolute text-xs top-0 r-2">
                  1
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/table-red.png"
                  alt="red table"
                  width={75}
                  height={150}
                />
                <span className="flex justify-center w-[20] h-[20] rounded-full bg-black text-white items-center absolute text-xs top-0 r-2">
                  1
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/table-red.png"
                  alt="red table"
                  width={75}
                  height={150}
                />
                <span className="flex justify-center w-[20] h-[20] rounded-full bg-black text-white items-center absolute text-xs top-0 r-2">
                  1
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:self-center w-full md:w-1/3">
              <div
                flex
                className="flex flex-col md:flex-row border-b border-[#E8ECEF] w-full md:border-0"
              >
                <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                  Order number:
                </small>
                <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                  #1723_6453456
                </small>
              </div>
              <div
                flex
                className="flex flex-col md:flex-row border-b border-[#E8ECEF] w-full md:border-0"
              >
                <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                  Date:
                </small>
                <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                  12th March 2023
                </small>
              </div>
              <div
                flex
                className="flex flex-col md:flex-row border-b border-[#E8ECEF] w-full md:border-0"
              >
                <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                  Total:
                </small>
                <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                  $1,345.00
                </small>
              </div>
              <div
                flex
                className="flex flex-col md:flex-row border-b border-[#E8ECEF] w-full md:border-0"
              >
                <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                  Payment method:
                </small>
                <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                  Credit Card
                </small>
              </div>
            </div>
            <Link href="/shop" className="cursor-pointer">
              <button className="bg-black text-white py-3 px-4 rounded-full w-full md:max-w-max">
                Purchase history
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentConfirmationPage;
