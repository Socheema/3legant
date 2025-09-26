"use client";
import React, { useEffect, useState } from "react";
import MobileProductCardVariant from "./MobileProductCardVariant";


function MoreProductsCard({ category, currentProductId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        // filter products in the same category, excluding the current one
        const filtered = data.filter(
          (p) => p.category === category && p.id !== currentProductId
        );
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if (category) fetchProducts();
  }, [category, currentProductId]);

  if (!relatedProducts.length) {
    return <p>No more products in this category.</p>;
  }

  return (
    <div className="flex gap-6 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
      {relatedProducts.map((p) => (
        <div key={p.id}>
          {/* ✅ Pass the product into your card component */}
          <MobileProductCardVariant product={p} />
        </div>
      ))}
    </div>
  );
}

export default MoreProductsCard;
