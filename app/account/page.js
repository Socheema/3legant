"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Wishlist from "../../components/wishlist";
import Orders from "../../components/orders";
import Address from "../../components/address";
import Account from "../../components/account";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

function AccountPage() {
  const accountDetails = ["Account", "Address", "Orders", "Wishlist", "Logout"];

  const [showDiscountBanner, setShowDiscountBanner] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("Account");

  useEffect(() => {
    setShowDiscountBanner(true);
  }, []);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };




  const renderSelectedContent = () => {
    switch (selectedAccount) {
      case "Account":
        return <Account />;

      case "Address":
        return <Address />;

      case "Orders":
        return <Orders />;

      case "Wishlist":
        return <Wishlist />;

      case "Logout":
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6 items-center">
            <h4 className="text-neutral-07 text-lg font-semibold">Logout</h4>
            <p className="text-neutral-06 text-center">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral-03 text-neutral-07 px-6 py-2 rounded-md"
                onClick={() => setSelectedAccount("Account")}
              >
                Cancel
              </button>
              <Link href="/" className="cursor-pointer">
                <button className="bg-red-600 text-white px-6 py-2 rounded-md">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6">
            <p>Select an option from the dropdown</p>
          </div>
        );
    }
  };

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
      <div className="pt-4 gap-10 flex flex-col  w-full px-8 md:px-25 items-center md:pb-8">
        <div className="flex gap-2 items-center self-start md:hidden">
          <Image
            src="/images/products/vector.png"
            alt="cart"
            width={8}
            height={8}
          />
          <p className="black/600">back</p>
        </div>
        <h2 className="text-[32px] leading-[40px] font-bold">My Account</h2>
        <div className="flex flex-col md:flex-row w-full md:gap-10 md:px-5">
          <div className="flex flex-col md:w-1/4  gap-10 py-10 px-6 w-full bg-[#E8ECEF] rounded-md items-center justify-center md:h-max">
            <div className="flex flex-col gap-2  items-center justify-center w-full">
              <Image
                src="/images/avatar.png"
                alt="cart"
                width={50}
                height={50}
              />
              <p>Azubuike Chima</p>
              <select
                name="account"
                id="account-select"
                value={selectedAccount}
                onChange={handleAccountChange}
                className="md:hidden px-4 py-3 rounded-md border border-neutral-03 outline-none bg-white text-neutral-07 w-full"
              >
                {accountDetails.map((item, index) => (
                  <option value={item} key={index} className="text-sm">
                    {item}
                  </option>
                ))}
              </select>
              {/* List of account options for larger screens */}
              <div className="hidden md:flex flex-col gap-1 w-max self-start ">
                {accountDetails.map((item, index) => (
                  <p
                    key={index}
                    className={` text-[10px] text-[#6C7275] cursor-pointer ${
                      selectedAccount === item ? "text-[10px] border-b" : ""
                    }`}
                    onClick={() => setSelectedAccount(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full md:w-3/4">
            {/* Conditional content based on selected option */}
            {renderSelectedContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
