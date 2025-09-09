import React from "react";
import Image from "next/image";

function MobileProductCardVariant({
  imgSrc,
  title,
  price,
  showOldPrice = false,
  oldPrice,
  wishlistSrc,
  showWishList = false,
  discount = false,
  discountPrice,
  newStock = false,
  addToCart = false,
}) {
  return (
    <div className="flex flex-col w-[169px] h-full md:h-[433px] md:w-[262px] ">
      <div className="w-[170px] h-[203px]  md:h-[349px] md:w-[262px] bg-[#6C7275] relative">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
        <div className="flex flex-col items-center gap-2  absolute top-1 left-1 ">
          {newStock && (
            <p className="flex  flex-col px-2 py-1 rounded-xs text-[#141718] bg-white w-[40px] h-[20px] items-center justify-center text-[10px] font-semibold">
              New
            </p>
          )}
          {discount && discountPrice && (
            <p className="h-[24px] w-[65px] flex items-center justify-center text-white bg-[#38CB89] rounded-xs ">
              {discountPrice}% 
            </p>
          )}
        </div>
        {showWishList && wishlistSrc && (
          <Image
            src={wishlistSrc}
            alt="add to cart"
            width={32}
            height={32}
            className="absolute top-2 right-2 cursor-pointer object-cover"
          />
        )}
        {addToCart && (
          <button className="absolute bottom-2 left-1/2 bg-[#000] w-max text-white text-[10px] font-semibold cursor-pointer transform -translate-x-1/2 rounded-sm items-center px-2 py-1">
            Add to cart
          </button>
        )}
      </div>
      <div className="flex flex-col mt-2 gap-1">
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Image
                src="/star Icon.png"
                alt="review"
                width={16}
                height={16}
                className="object-cover"
                key={index}
              />
            ))}
        </div>
        <p className="">{title}</p>
        <div className="flex items-center gap-2">
          <span className="text-[#141718]">${price}</span>
          {showOldPrice && oldPrice && (
            <strike className="text-[#6C7275]">${oldPrice}</strike>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileProductCardVariant;
