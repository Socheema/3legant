"use client";
import React from "react";
import Image from "next/image";
import ShopNow from "./shopNow";
import MobileProductCardVariant from "./MobileProductCardVariant";
import RuleDividerCard from "./RuleDividerCard";
import { useState, useEffect } from "react";
import { getProducts } from "../api/products";

function NewArrivals() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
  

    fetchProducts();
  }, []);

  return (
    <div
      className="flex flex-col px-8 md:px-25 items-start justify-between mt-8
    gap-4 md:gap-8 w-full"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        <h1 className="text-[#141718] text-lg md:text-4xl lg:text-6xl font-normal">
          New <br />
          Arrivals
        </h1>
        <div className="hidden md:flex ml-auto">
          <ShopNow text="More Products" fontSize="lg" />
        </div>
      </div>
      <div className="w-full md:h-[442px]  flex gap-4 overflow-x-auto scrollbar-hide snap-x overflow-y-hidden">
        <div className="flex gap-8 md:gap-16 snap-x">
          {products.slice(0, 5).map((product) => (
            <MobileProductCardVariant key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* RULE DIVIDER */}
      <div className="flex px-8 md:px-25 w-full md:hidden">
        <RuleDividerCard />
      </div>
      {/* <div className="hidden flex h-[3px] w-full ">
        <div className="flex-2 bg-[#141718]"></div>
        <div className="flex-1 bg-[#6C7275]"></div>
      </div> */}
      {/* MORE PRODUCTS */}
      <div className="md:hidden">
        <ShopNow text="More Products" fontSize="lg" />
      </div>
    </div>
  );
}

export default NewArrivals;
