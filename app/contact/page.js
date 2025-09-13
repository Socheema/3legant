import Breadcrumb from "../../components/BreadCrumb";
import React from "react";
import Image from "next/image";
import ShopNow from "../../components/shopNow";
import AboutCard from "../../components/aboutCard";

function ContactUs() {
  return (
    <article>
      <div className="flex flex-col px-10 md:px-25 gap-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold md:max-w-[550px]">
            We believe in sustainable span decor. We’re passionate about life at
            home.
          </h1>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className="flex flex-col md:flex-row h-[622px] md:h-[413px]">
          <div className="w-full  relative flex-1">
            <Image
              src="/images/products/contact-img.png"
              alt="Contact Us"
              fill
              objectFit="cover"
            />
          </div>
          <div className="w-full bg-[#F3F5F7] flex-1 flex flex-col items-center justify-center px-4 py-5 md:px-15">
            <div className="flex flex-col items-start gap-4">
              <p className="text-[#141718] text-2xl font-semibold">About Us</p>
              <small className="text-[#343839] text-[14px]">
                3legant is a gift & decorations store based in HCMC, Vietnam.
                Est since 2019. Our customer service is always prepared to
                support you 24/7
              </small>
              <ShopNow text="Shop Now" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-2xl md:text-4xl font-semibold">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full mt-4">
            <div className="flex flex-col  gap-4 items-center justify-between bg-[#F3F5F7] px-8 md:px-15 py-6">
              <Image src="/images/store.png" width={30} height={30} />
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-[#6C7275] text-[16px] font-semibold">
                  ADDRESS
                </p>
                <small className="text-[#141718] text-[14px]">
                  234 Hai Trieu, Ho Chi Minh City, <br /> Viet Nam
                </small>
              </div>
            </div>
            <div className="flex flex-col  gap-4 items-center justify-between bg-[#F3F5F7] px-8 md:px-15 py-6">
              <Image src="/call.svg" width={30} height={30} />
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-[#6C7275] text-[16px] font-semibold">
                  CONTACT US
                </p>
                <small className="text-[#141718] text-[14px]">
                  (+234) 816 307 7401
                </small>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-between bg-[#F3F5F7] px-8 md:px-15 py-6">
              <Image src="/images/mail.png" width={24} height={24} />
              <div className="flex flex-col gap-2 items-center ">
                <p className="text-[#343839] text-[16px] font-semibold">
                  EMAIL
                </p>
                <small className="text-[#141718] ">
                  chimafrancis94@gmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6 w-full">
          <div className=" md:flex-1 w-full min-h-[311px] md:max-h-[548px] relative">
            <Image
              src="/images/map.png"
              fill
              className="object-cover"
              alt="map"
            />
            <Image
              src="/images/location.png"
              width={40}
              height={40}
              className="absolute top-[40%] left-[50%] md:top-[45%] md:left-[55%]"
              alt="pin"
            />
          </div>
          <form action="" className="flex flex-col gap-2 md:flex-1 w-full">
            <div>
              <label for="full name" className="uppercase text-[10px]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-2 px-4 placeholder:text-[10px] border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div>
              <label for="email" className="uppercase text-[10px]">
                email address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-2 px-4 placeholder:text-[10px] border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <label for="message" className="uppercase text-[10px]">
                  message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md outline-none placeholder:text-[10px]"
                ></textarea>
              </div>
              <button className="text-white bg-black py-2 px-4 w-max rounded-md items-center justify-center self-center md:self-start">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 bg-[#F3F5F7] mt-8 md:mt-12 md:px-22">
        <div className="flex w-full items-center justify-between gap-4 ">
          {/*FREE SHIPPING */}
          <div>
            <AboutCard
              title="Free Shipping"
              description="Order"
              description1="above $200"
              imgSrc="/fast delivery.svg"
            />
          </div>
          {/* MONEY BACK */}
          <div>
            <AboutCard
              title="Money-back"
              description="30 days"
              description1="guarantee"
              imgSrc="/money.svg"
            />
          </div>
        </div>
        {/*  BOTTOM*/}
        <div className="flex w-full items-center gap-4  justify-between">
          {/*FREE SHIPPING */}
          <div>
            <AboutCard
              title="Secure Payments"
              description="Secured "
              description1="by Stripe"
              imgSrc="/fast delivery.svg"
            />
          </div>
          {/* MONEY BACK */}
          <div>
            <AboutCard
              title="24/7 support"
              description="Phone and "
              description1="Email support"
              imgSrc="/call.svg"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ContactUs;
