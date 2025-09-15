"use client";
import React from "react";
import Image from "next/image";
import ArticleCard from "../../../components/articleCard";
import ShopNow from "../../../components/shopNow";
import Newsletter from "../../../components/newsletter";
import { useRouter } from "next/navigation";

function SingleBlogPost() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col px-8 md:px-25 w-full gap-8 max-w-7xl mx-auto py-2">
        <div className="flex flex-col md:flex-row gap-12 w-full">
          <div
            className="flex gap-2 items-center self-start md:hidden cursor-pointer"
            onClick={() => router.push("/blog")}
          >
            <Image
              src="/images/products/vector.png"
              alt="cart"
              width={8}
              height={8}
            />
            <p className="black/600">back</p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h2 className=" font-bold uppercase text-lg">Title</h2>
            <p className="text-[#141718] text-6xl hidden md:block">
              How to make a busy bathroom <br /> a place to relax
            </p>
            <p className="text-[#141718] text-4xl md:hidden">
              How to make a busy bathroom a place to relax
            </p>
            <div className=" flex w-full items-center justify-between md:justify-start md:gap-8 ">
              <div className="flex gap-2">
                <Image
                  src="/user-circle.svg"
                  alt="cart"
                  width={20}
                  height={20}
                />
                <p className="text-[#6C7275] text-sm">Azubuike Chima</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/products/calendar1.png"
                  alt="cart"
                  width={20}
                  height={20}
                />
                <p className="text-[#6C7275] text-sm">October 16, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="h-[407px] md:h-[646px] w-full relative">
              <Image
                src="/images/blog-img1.png"
                fill
                className="absolute object-cover md:hidden"
              />
              <Image
                src="/images/products/blog-desktop-img.png"
                fill
                className="absolute object-cover hidden md:block"
              />
            </div>
            <div>
              <p>
                Your bathroom serves a string of busy functions on a daily
                basis. See how you can make all of them work, and still have
                room for comfort and relaxation.
              </p>
              <h4 className="text-2xl font-semibold">
                A cleaning hub with built-in ventilation
              </h4>
              <p>
                Use a rod and a shower curtain to create a complement to your
                cleaning cupboard. Unsightly equipment is stored out of sight
                yet accessibly close – while the air flow helps dry any
                dampness.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:hidden">
            <div className="h-[407px] w-full relative">
              <Image
                src="/images/products/blog-img2.png"
                fill
                className="absolute object-cover"
              />
            </div>
            <div>
              <h4 className="text-4xl font-semibold">
                {" "}
                Storage with a calming effect
              </h4>
              <p>
                Having a lot to store doesn’t mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they’ll
                thrive in the humid air).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:hidden">
            <div className="h-[407px] w-full relative">
              <Image
                src="/images/products/blog-img3.png"
                fill
                className="absolute object-cover"
              />
            </div>
            <div>
              <h4 className="text-4xl font-semibold">
                Kit your clutter for easy access
              </h4>
              <p>
                Even if you have a cabinet ready to swallow the clutter, it’s
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment’s notice.
              </p>
            </div>
          </div>
          {/* DESKTOP IMAGE */}
          <div className="hidden md:block gap-8 w-full ">
            <div className="flex w-full gap-6">
              <div className="relative md:min-h-[450px] md:max-h-[729px]  md:w-[548px]">
                <Image
                  src="/images/products/Paste image (2).png"
                  fill
                  className="absolute object-cover "
                />
              </div>
              <div className="relative md:min-h-[450px] md:max-h-[729px] md:w-[548px]">
                <Image
                  src="/images/products/Image Placeholder (2).png"
                  fill
                  className="absolute object-cover "
                />
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-2xl font-semibold">
                  {" "}
                  Storage with a calming effect
                </h4>
                <p>
                  Having a lot to store doesn’t mean it all has to go in a
                  cupboard. Many bathroom items are better kept out in the open
                  – either to be close at hand or are nice to look at. Add a
                  plant or two to set a calm mood for the entire room (and
                  they’ll thrive in the humid air).
                </p>
                <h4 className="text-2xl font-semibold">
                  Kit your clutter for easy access
                </h4>
                <p>
                  Even if you have a cabinet ready to swallow the clutter, it’s
                  worth resisting a little. Let containers hold kits for
                  different activities – home spa, make-up, personal hygiene –
                  to bring out or put back at a moment’s notice.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row w-full md:gap-6">
            <div className="h-[407px] md:min-h-[450px] md:max-h-[729px] w-full relative md:flex-1">
              <Image
                src="/images/products/blog-img4.png"
                fill
                className="absolute object-cover md:hidden"
              />
              <Image
                src="/images/products/blog-desktop-img4.png"
                fill
                className="absolute object-cover hidden md:block"
              />
            </div>
            <div className="flex flex-col md:flex-1 w-full md:gap-10">
              <div>
                <h4 className="text-4xl font-semibold">
                  An ecosystem of towels
                </h4>
                <p>
                  Racks or hooks that allow air to circulate around each towel
                  prolong their freshness. They dry quick and the need for
                  frequent washing is minimized.
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-semibold">
                  Make your mop disappear
                </h4>
                <p>
                  Having your cleaning tools organized makes them easier to both
                  use and return to. When they’re not needed, close the curtain
                  and feel the peace of mind it brings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">You may also like</h2>
            <div className="w-max py-2 hidden md:block">
              <ShopNow text="More Articles" frontSize="lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            <div className="flex justify-center">
              <div className="w-full max-w-[357px] h-auto md:h-[433px]">
                <ArticleCard
                  title="Kitchen organization"
                  imgSrc="/img container.png"
                  alt="Kitchen organization"
                  date="24th September 2025"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[357px] h-auto md:h-[433px]">
                <ArticleCard
                  title="Modern texas home is beautiful and completely kid-friendly"
                  imgSrc="/images/modern-home-img.png"
                  alt="Modern texas home is beautiful and completely kid-friendly"
                  date="24th September 2020"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[357px] h-auto md:h-[433px]">
                <ArticleCard
                  title="Modern texas home is beautiful and completely kid-friendly"
                  imgSrc="/images/modern-home-img.png"
                  alt="Modern texas home is beautiful and completely kid-friendly"
                  date="24th September 2020"
                />
              </div>
            </div>
          </div>
          <div className="w-max py-2 md:hidden">
            <ShopNow text="More Articles" frontSize="lg" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Newsletter />
      </div>
    </>
  );
}

export default SingleBlogPost;
