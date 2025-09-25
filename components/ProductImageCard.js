"use client";
import Breadcrumb from "./BreadCrumb";
import Image from "next/image";

function ProductImageCard({ product }) {
  if (!product) return null;
  return (
    <div className="flex flex-col gap-4 w-full ">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Product" },
        ]}
      />

      <div className="w-full h-[414px] relative">
        <Image
          src={product?.image}
          alt={product?.title}
          fill
          className="absolute object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}

export default ProductImageCard;
