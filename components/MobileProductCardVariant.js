"use client";
import React from "react";
import Image from "next/image";
import useCartStore from "../store/cartStore";
import Link from "next/link";

function MobileProductCardVariant({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col w-[129px] h-full md:h-[393px] md:w-[242px] rounded-md group">
      <Link href={`/shop/${product.id}`} className="w-full">
        <div className="w-[140px] h-[173px] md:h-[319px] md:w-[232px] bg-[#F3F5F7] relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-col items-start gap-2 mt-2">
        <button
          className="bg-black text-white text-xs md:text-xl px-2 py-1 md:px-3 md:py-1 rounded-full w-max cursor-pointer"
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
