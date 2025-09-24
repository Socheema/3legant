"use client";
import React from "react";
import Image from "next/image";
import useCartStore from "../store/cartStore";

function MobileProductCardVariant({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  if (!product) {
    return null; // Don't render until product is available
  }

  return (
    <div className="flex flex-col w-[129px] h-full md:h-[393px] md:w-[242px] rounded-md group">
      <div className="w-[140px] h-[173px]  md:h-[319px] md:w-[232px] bg-[#F3F5F7] relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        <div className="flex flex-col items-center gap-2 absolute top-1 left-1">
         
        </div>
        <button
          className="absolute bottom-18 md:bottom-35 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300
                     bg-black text-white text-sm md:text-xl px-2 py-1 md:px-4 md:py-2 rounded-full w-max cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
      <div className="flex items-start justify-between mt-2">
        <div>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Image
                  src="/star Icon.png"
                  alt="review"
                  width={10}
                  height={10}
                  className="object-cover"
                  key={index}
                />
              ))}
          </div>
          <p className="text-sm truncate w-[100px]">{product.title}</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#141718]">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileProductCardVariant;
