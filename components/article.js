import React from "react";
import ShopNow from "./shopNow";
// import AboutCard from "./aboutCard";

import ArticleCard from "./articleCard";

function Article() {
  return (
    <div className=" mx-8 md:px-25 flex flex-col mt-8 gap-4">
      {/* ARTICLE HEADING */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-semibold text-[#141718]">Articles</h2>
        <ShopNow text="More Articles" />
      </div>

      {/* ARTICLE CARD */}
     <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8">
      <ArticleCard title="7 ways to decor your home" imgSrc="/img.png" alt="7 ways to decor your home" ShopNowStatus={true} shopnow="Shop Now" />
      <ArticleCard title="Kitchen organization" imgSrc="/img container.png" alt="Kitchen organization" ShopNowStatus={true} shopnow="Shop Now" />
      <ArticleCard title="Decorate your bedroom" imgSrc="/img container (1).png" alt="Decorate your bedroom" ShopNowStatus={true} shopnow="Shop Now" />
     </div>
    </div>
  );
}

export default Article;
