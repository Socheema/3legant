"use client";
import MobileProductCardVariant from "../../components/MobileProductCardVariant";
import Image from "next/image";
import Newsletter from "../../components/newsletter";
import Breadcrumb from "../../components/BreadCrumb";
import { getProducts } from "../../api/products";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const inPriceRange =
      !selectedPrice ||
      (product.price >= selectedPrice[0] && product.price <= selectedPrice[1]);
    return inCategory && inPriceRange;
  });

  const bannerImage =
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D";

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="flex flex-col items-center justify-between gap-8 md:px-25 px-8 md:hidden">
        {/* IMAGE CONTAINER */}
        <div className="flex w-full h-[308px] md:h-[392px] relative">
          <Image
            src={bannerImage}
            alt="Banner Image"
            fill
            className="object-cover rounded-md"
          />
          <div className="flex flex-col items-center justify-between absolute top-19 w-full h-[152px] bg-black/40">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
            />
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col w-full gap-4">
          {/* CATEGORY SELECT */}
          <div className="flex items-center justify-between">
            <p className="text-lg text-black font-medium">Category</p>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm 
                         focus:outline-none focus:ring-2 focus:ring-black/70 
                         bg-white appearance-none cursor-pointer"
            >
              <option value="all" className="bg-white hover:bg-gray-100">
                All categories
              </option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-white hover:bg-gray-100 text-sm"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* PRICE SELECT */}
          <div className="flex items-center justify-between">
            <p className="text-lg text-black font-medium">Price</p>
            <select
              onChange={(e) =>
                setSelectedPrice(
                  e.target.value ? JSON.parse(e.target.value) : null
                )
              }
              className="border border-gray-300 rounded-md px-3 py-2 text-sm 
                         focus:outline-none focus:ring-2 focus:ring-black/70 
                         bg-white appearance-none cursor-pointer"
            >
              <option value={null} className="bg-white hover:bg-gray-100">
                All Prices
              </option>
              <option value="[0,99]" className="bg-white hover:bg-gray-100">
                $0 - $99
              </option>
              <option value="[100,199]" className="bg-white hover:bg-gray-100">
                $100 - $199
              </option>
              <option value="[200,299]" className="bg-white hover:bg-gray-100">
                $200 - $299
              </option>
              <option value="[300,9999]" className="bg-white hover:bg-gray-100">
                $300+
              </option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="w-full">
          {products.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <p className="text-gray-500 text-sm">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 px-2">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <MobileProductCardVariant
                    key={product.id}
                    product={product}
                  />
                ))
              ) : (
                <p className="col-span-2 text-center text-gray-500 text-sm">
                  No products match your filters.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col items-center justify-between gap-8 md:px-25 px-8">
        {/* HERO BANNER (split layout) */}
        <div className="flex w-full h-[450px] rounded-md overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="w-1/2 bg-gray-100 flex flex-col justify-center px-12">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
            />
            <h1 className="text-4xl font-bold text-gray-900 mt-6 leading-snug">
              Discover products that <br /> elevate your lifestyle
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              From timeless essentials to trending designs, explore our curated
              collection and find pieces you’ll love.
            </p>
            <button
              className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition "
              onClick={() => window.scrollTo(0, 800)}
            >
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 relative">
            <Image
              src={bannerImage}
              alt="Banner Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* STICKY FILTERS ON TOP */}
          <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                onChange={(e) => setSelectedPrice(JSON.parse(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={null}>All Prices</option>
                <option value="[0,50]">$0 - $50</option>
                <option value="[51,100]">$51 - $100</option>
                <option value="[101,200]">$101 - $200</option>
                <option value="[201,500]">$201 - $500</option>
              </select>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <p>Loading Products...</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <MobileProductCardVariant key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-sm">
                No products match your filters.
              </p>
            )}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}

export default Shop;
