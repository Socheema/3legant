"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import MoreProductsCard from "./MoreProductsCard";
import ShopNow from "./shopNow";
import RuleDividerCard from "./RuleDividerCard";
import useCartStore from "../store/cartStore";
import ReadMore from "../components/ReadMore";

function ProductReviewCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const cart = useCartStore((s) => s.cart);

  // Find product in the cart
  const cartItem = cart.find((item) => item.id === product?.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) return null;

  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row w-full md:gap-15 items-start">
        {/* PRODUCT INFO */}
        <div className="py-4 md:py-0 flex flex-col gap-4 w-full md:flex-1">
          {/* Reviews + Title */}
          <div className="flex flex-col items-start w-full justify-between gap-3 border-b border-[#E8ECEF]">
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
              <p className="text-sm text-[#141718]">11 Reviews</p>
            </div>
            <p className="text-[#141718] text-2xl">{product?.title}</p>
            <ReadMore text={product?.description} maxLength={120} />
            <div className="flex items-center gap-2 pb-2">
              <p className="text-black/900 text-lg">${product?.price}</p>
              <strike className="text-[#6C7275] text-sm">
                ${product?.price}
              </strike>
            </div>
          </div>

          {/* OFFER */}
          <div className="flex flex-col items-start w-full justify-between gap-3 border-b border-[#E8ECEF] py-6">
            <small className="text-[#343839]">Offer expires in:</small>
            <table className="w-full self-start">
              <thead>
                <tr className="text-[#141718] font-semibold text-2xl">
                  <td className="text-center">02</td>
                  <td className="text-center">12</td>
                  <td className="text-center">45</td>
                  <td className="text-center">05</td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#6C7275] text-sm">
                  <td className="text-center">Days</td>
                  <td className="text-center">Hours</td>
                  <td className="text-center">Minutes</td>
                  <td className="text-center">Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full items-center">
              <div className="flex gap-3 items-center px-4 py-2 bg-[#F3F5F7] rounded-md">
                <button
                  className="text-2xl"
                  onClick={() => {
                    if (quantity > 1) decreaseQuantity(product.id);
                  }}
                >
                  -
                </button>
                {quantity > 0 && <p className="text-lg">{quantity}</p>}
                <button
                  className="text-2xl"
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex gap-3 px-8 items-center py-2 border rounded-md border-black/900">
                <Image src="/line.png" height={24} width={24} alt="wishlist" />
                <p className="text-lg">Wishlist</p>
              </div>
            </div>
            <div className="flex items-center  gap-2 w-full">
              <button
                className="text-lg bg-[#141718] text-white rounded-md py-2 w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="text-lg bg-red-700 text-white rounded-md py-2 w-full"
                onClick={() => addToCart(product)}
              >
                Delete <span className="hidden md:inline-block"> From Cart</span>
              </button>
              <button
                className="text-lg bg-[#141718] text-white rounded-md py-2 w-full"
                onClick={() => addToCart(product)}
              >
                <span className="hidden md:inline-block">Proceed to</span> checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ADDITIONAL PRODUCTS */}
      <div className="flex flex-col pt-8 mt-4 gap-10 items-start w-full">
        <div className="flex items-start md:items-center justify-between w-full">
          <p className="text-3xl">You might also like</p>
          <div className="hidden md:flex">
            <ShopNow text="More Products" fontSize="text-lg" />
          </div>
        </div>
        <MoreProductsCard />
        <RuleDividerCard />
        <div className="md:hidden">
          <ShopNow text="More Products" fontSize="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default ProductReviewCard;
