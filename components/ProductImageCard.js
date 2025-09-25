"use client";
import Breadcrumb from "./BreadCrumb";
import Image from "next/image";

function ProductImageCard({ product }) {
  if (!product) return null;

  // State to track current image index
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to previous image
  // const goToPrevious = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
  //   );
  // };

  // Function to go to next image
  // const goToNext = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  return (
    <div className="flex flex-col gap-4 w-full md:hidden">
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

        {/* Optional: Image indicators/dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        </div> */}
      </div>
    </div>
  );
}

export default ProductImageCard;
