"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const seePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/* Background image*/}
      <div className="relative w-full md:w-1/2 h-[430px] md:h-screen  bg-[#6C7275]">
        <Image
          src="/signup-img.png"
          alt="Sign Up"
          fill
          objectFit="cover"
          className="md:hidden"
        />
        <Image
          src="/signup-desktop-img.png"
          alt="Sign Up"
          fill
          objectFit="cover"
          className="hidden md:block"
        />
        <p className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black font-semibold text-lg">
          3legant
        </p>
      </div>
      <div className=" flex flex-col px-8 md:mt-5 py-10 md:py-16 gap-8 md:items-start md:justify-center md:w-[456px] md:h-[520px] ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-[#38CB89]">
              Sign in
            </a>
          </p>
        </div>
        <form action="" className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your name"
            className="outline-none border-gray-300 p-2  w-full placeholder:text-[#6C7275] border-b border-b-[#E8ECEF]"
          />
          <input
            type="text"
            placeholder="Username"
            className="outline-none p-2  w-full placeholder:text-[#6C7275] border-b border-b-[#E8ECEF]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="outline-none p-2  w-full placeholder:text-[#6C7275] border-b border-b-[#E8ECEF]"
          />
          <div className="relative w-full ">
            <input
              type="password"
              placeholder="Password"
              className="outline-none p-2  w-full placeholder:text-[#6C7275] border-b border-b-[#E8ECEF]"
            />
            {passwordVisible ? (
              <Image
                src="/eye-off.svg"
                alt="Toggle Password Visibility"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                width={20}
                height={20}
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            ) : (
              <Image
                src="/eye.png"
                alt="Toggle Password Visibility"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                width={20}
                height={20}
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            )}
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-[10px] text-[#6C7275]">
              I agree with{" "}
              <span className="text-[#141718]">Privacy Policy</span> and{" "}
              <span className="text-[#141718]">Terms of Use</span>
            </label>
          </div>
        </form>
        <button
          type="submit"
          className="bg-[#141718] text-white p-1 rounded-sm w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
