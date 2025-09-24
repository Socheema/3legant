"use client";
import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import React from "react";
import MobileProductCardVariant from "./MobileProductCardVariant";

function MainComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full px-8 md:px-25 ">
        {/* CATEGORY CONTAINER */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products?.slice(-6).map((product) => (
            <MobileProductCardVariant key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainComponent;
