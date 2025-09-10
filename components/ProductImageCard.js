"use client";
import Breadcrumb from "./BreadCrumb"
import React, { useState } from "react";
import Image from "next/image";

function ProductImageCard() {
  const productImages = [
    "/images/products/product-tray-table.png",
    "/images/products/product-tray-table1.png",
    "/images/products/product-tray-table2.png",
    "/images/products/product-tray-table3.png",
    "/images/products/product-tray-table4.png",
    "/images/products/product-tray-table5.png",

    // Add more image paths as needed
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to previous image
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  // Function to go to next image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full md:hidden">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Living Room", href: "/shop/living-room" },
          { label: "Product" },
        ]}
      />

      <div className="w-full h-[414px] relative">
        <Image
          src={productImages[currentImageIndex]}
          alt={`Product ${currentImageIndex + 1}`}
          fill
          className="absolute object-cover transition-opacity duration-300"
        />

        <div className="flex items-center justify-between p-2 absolute left-7 top-[10rem] w-[311px]">
          <button
            onClick={goToPrevious}
            className="hover:scale-110 transition-transform cursor-pointer"
            aria-label="Previous image"
          >
            <Image
              src="/images/products/product-arrow-left.png"
              alt="Previous"
              width={40}
              height={40}
            />
          </button>

          <button
            onClick={goToNext}
            className="hover:scale-110 transition-transform cursor-pointer"
            aria-label="Next image"
          >
            <Image
              src="/images/products/arrow-right(1).png"
              alt="Next"
              width={40}
              height={40}
            />
          </button>
        </div>

        {/* Optional: Image indicators/dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImageCard;
