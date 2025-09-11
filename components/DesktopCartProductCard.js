import Image from "next/image";

function DesktopCartProductCard({
  imgSrc,
  title,
  color,
  price,
  quantity,
  subtotal,
}) {
  return (
    <div className="flex py-8 items-start justify-between border-b border-b-[#E8ECEF] w-full gap-4 mt-1">
      {/* CART IMAGE CONTAINER */}
      <div className="flex relative gap-4 w-2/5">
        <Image
          src={imgSrc || "/cart-product-img.png"}
          alt="Product Image"
          width={80}
          height={98}
          className="object-cover"
        />
        <div className="flex flex-col gap-1 flex-1">
          <h5 className="text-semibold text-lg pb-1 text-[#141718]">
            {title || "Tray Table"}
          </h5>
          <p className="text-sm text-[#6C7275] pb-1">
            Color : {color || "Black"}
          </p>
          <div className="flex gap-2">
            <Image
              src="/close.png"
              alt="line"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <small className="text-[#232627]">Remove</small>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="flex items-center justify-between  w-3/5 px-4">
        <div className="flex items-center justify-between w-[80px] h-[32px] border border-[#6c7275] rounded-sm py-1 px-2">
          <button className="text-xl text-[#6C7275] ">-</button>
          <p className="text-lg text-black/900 font-semibold">
            {quantity || 1}
          </p>
          <button className="text-xl text-[#6C7275]">+</button>
        </div>
        <div className="flex flex-col items-end gap-2 h-full">
          <p className="text-lg text-[#6C7275] ">
            ${price || 19.19}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 h-full">
          <p className="text-lg text-black/900 font-semibold">
            ${price || 19.19}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopCartProductCard;
