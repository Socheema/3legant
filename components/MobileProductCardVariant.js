"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import SuccessMessage from "./SuccessComponent";
import useCartStore from "../store/cartStore";
import { Star } from "lucide-react";

import Link from "next/link";

function MobileProductCardVariant({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const [showSuccess, setShowSuccess] = React.useState(false);

  function handleAddToCart() {
    addToCart(product);
    setShowSuccess(true);
  }

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col w-[129px] h-full md:h-[393px] md:w-[242px] rounded-md group md:mb-8">
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
          className="bg-black text-white text-[8px] md:text-[12px] px-2 py-1 md:px-2 md:py-1 rounded-full w-max cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        {showSuccess && (
          <SuccessMessage
            message={`${
              product.title.length > 20
                ? product.title.slice(0, 20) + "..."
                : product.title
            } added to cart!`}
            clearMessage={() => setShowSuccess(false)}
          />
        )}
      </div>

      <div className="flex items-start justify-between mt-2">
        <div>
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star key={index} size={12} color="#FFC107" />
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
