
import React from "react";
import Image from "next/image";
import ShopNow from "./shopNow";

function ArticleCard({ title, imgSrc ,alt}) {
  return (
    <div className="flex flex-col w-full">
      {/* IMAGE CONTAINER */}
      <div className="  w-full h-[282px] relative">
      <Image
          src={imgSrc}
          alt={alt}
          className="object-cover"
         fill
        />
      </div>
      {/* ARTICLE TITLE */}
      <p className="text-neutral-07">{title}</p>
      <div className="w-max">
        <ShopNow text="Read More" fontSize="sm" />
      </div>
    </div>
  );
}



export default ArticleCard;
