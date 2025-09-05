import React from "react";
import AboutCard from "./aboutCard";
import Image from "next/image";
import ShopNow from "./shopNow";

function About() {
  return (
    <>
      {/* TOP */}
      <div className="flex flex-col md:flex-row p-8 gap-6 mt-2 md:mt-4 md:px-25 md:py-6">
        {/* MOBILE */}
        {/* TOP */}
        <div className="flex w-[312px] h-[198px] items-center gap-2 md:hidden">
          {/*FREE SHIPPING */}
          <AboutCard
            title="Free Shipping"
            description="Order"
            description1="above $200"
            imgSrc="/fast delivery.svg"
          />
          {/* MONEY BACK */}
          <AboutCard
            title="Money-back"
            description="30 days"
            description1="guarantee"
            imgSrc="/money.svg"
          />
        </div>
        {/*  BOTTOM*/}
        <div className="flex w-[312px] h-[198px] items-center gap-2 md:hidden">
          {/*FREE SHIPPING */}
          <AboutCard
            title="Secure Payments"
            description="Secured "
            description1="by Stripe"
            imgSrc="/fast delivery.svg"
          />
          {/* MONEY BACK */}
          <AboutCard
            title="24/7 support"
            description="Phone and "
            description1="Email support"
            imgSrc="/call.svg"
          />
        </div>
        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between gap-14 w-2/3">
          {/* FREE SHIPPING */}
          <AboutCard
            title="Free Shipping"
            description="Order"
            description1="above $200"
            imgSrc="/fast delivery.svg"
          />
          {/* MONEY BACK */}
          <AboutCard
            title="Money-back"
            description="30 days"
            description1="guarantee"
            imgSrc="/money.svg"
          />
          {/* SECURE PAYMENTS */}
          <AboutCard
            title="Secure Payments"
            description="Secured "
            description1="by Stripe"
            imgSrc="/fast delivery.svg"
          />
          {/* 24/7 SUPPORT */}
          <AboutCard
            title="24/7 support"
            description="Phone and "
            description1="Email support"
            imgSrc="/call.svg"
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row h-[734px] w-full md:h-[300px]">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-[300px]">
          <Image
            src="/catalogue.png"
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-start px-8 py-16 md:py-8 md:pl-10 bg-[#F3F5F7] md:w-1/2 md:h-[300px] ">
          <div className="flex flex-col items-start justify-between gap-4">
            <h2 className="text-[#377DFF] ">SALE UP TO 35% OFF</h2>
            <p className="text-[#141718] font-semibold text-2xl">
              HUNDREDS of <br /> New lower prices!
            </p>
            <p className="text-[#141718] text-lg">
              It's more affordable than ever to give  every <span className="hidden md:flex tracking-tighter leading-1.5"><br/></span> room in your house a stylish makeover
            </p>
            <ShopNow text="Shop Now" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
