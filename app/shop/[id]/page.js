"use client";
import { useEffect, useState } from "react";
import ProductImageCard from "../../../components/ProductImageCard";
import ProductReviewCard from "../../../components/ProductReviewCard";
import { useParams } from "next/navigation";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row md:gap-15 px-8 py-4 md:px-25 w-full md:h-screen">
      <div className="md:w-[30%]">
        {" "}
        <ProductImageCard product={product} />
      </div>
      <ProductReviewCard product={product} />
    </div>
  );
}

export default SingleProductPage;
