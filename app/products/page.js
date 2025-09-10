import ProductImageCard from "../../components/ProductImageCard";
import ProductReviewCard from "../../components/ProductReviewCard";

function Products() {
  return (
    <div className="flex flex-col px-8 py-4 md:px-25 w-full">
      <ProductImageCard />
      <ProductReviewCard />
    </div>
  );
}

export default Products;
