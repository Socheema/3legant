import React from "react";
import Image from "next/image";
import Breadcrumb from "../../components/BreadCrumb";
import ArticleCard from "../../components/articleCard";
import Newsletter from "../../components/newsletter";

function BlogPage() {
  return (
    <>
      <div className="flex items-center flex-col px-8 md:px-25 w-full gap-8 max-w-7xl mx-auto">
        <div className="h-[308px] md:h-[392px] relative w-full">
          <Image
            src="/images/blog-banner.png"
            alt="Blog"
            layout="fill"
            objectFit="cover"
            className="absolute md:hidden"
          />
          <Image
            src="/images/desktop-blog-banner.png"
            alt="Blog"
            layout="fill"
            objectFit="cover"
            className="absolute hidden md:block"
          />
          <div className="absolute left-0 top-0 md:left-[35%] flex flex-col items-center justify-between gap-30 md:px-4 py-20">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            />
            <p className="text-black/900 text-xl w-full items-center justify-center pl-4">
              Home idea and design inspiration
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          <select
            name="blog"
            id="blog"
            className="md:hidden border border-gray-300 rounded-md py-4 px-2 outline-none w-full"
          >
            <option>Blog</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
          <div className="hidden md:flex items-center justify-between h-[56px] p-1">
            <div className="flex items-center gap-2">
              <p className="sm text-black">Living Room</p>
              <p className="text-xs text-gray-500">Featured</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-black/900">Sort by</p>
              <Image
                src="/chevron-down.png"
                alt="search"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/filterbtn.png"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/filterbtn1.png"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            <div className="flex justify-center">
              <div className="w-full max-w-[357px] h-auto md:h-[433px]">
                <ArticleCard
                  title="7 ways to decor your home"
                  imgSrc="/img.png"
                  alt="7 ways to decor your home"
                  date="24th March 2022"
                />
              </div>
            </div>

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
                  title="Decorate your bedroom"
                  imgSrc="/img container (1).png"
                  alt="Decorate your bedroom"
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
                  imgSrc="/images/products/img (2).png"
                  alt="Modern texas home is beautiful and completely kid-friendly"
                  date="24th October 2020"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-white border rounded-full text-black text-lg py-2 px-4 cursor-pointer">
              Show More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Newsletter />
      </div>
    </>
  );
}

export default BlogPage;
