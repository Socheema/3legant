"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function EmptyCart({ onCloseCart }) {
  const router = useRouter();

  const handleExploreProducts = () => {
    // Close the cart first if the function is provided
    if (onCloseCart) {
      onCloseCart();
    }
    
    // Then navigate to shop
    router.push("/shop");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 p-8">
        <Image 
          src="/parcel-bag.png" 
          alt="Empty Cart" 
          width={80} 
          height={80}
          className="opacity-60"
        />
        <div className="text-center">
          <h3 className="text-[#232627] font-semibold mb-1">Your cart is empty</h3>
          <p className="text-[#6C7275] text-sm">
            Looks like you haven't added anything to your cart yet
          </p>
        </div>
        <button
          className="py-3 px-6 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-200 font-medium"
          onClick={handleExploreProducts}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
