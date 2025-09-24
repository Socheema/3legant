"use client"
import Image from "next/image";
import useCartStore from "../store/cartStore";

function CartProductCard({ imgSrc, title, color, price, quantity, id }) {
 const removeFromCart = useCartStore((s) => s.removeFromCart);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const quantityInCart = quantity || 1

  return (
    <div className="flex py-8 items-start justify-between border-b border-b-[#E8ECEF] w-full gap-4 mt-1">
      {/* CART IMAGE CONTAINER */}
      <div className="flex relative">
        <Image
          src={imgSrc || "/cart-product-img.png"}
          alt="Product Image"
          width={80}
          height={98}
          className="object-cover"
        />
      </div>
      {/* PRODUCT DETAILS */}
      <div className="flex items-start justify-between h-[98px] w-full">
        <div className="flex flex-col gap-1  h-full">
          <h5 className="text-semibold text-lg pb-1 text-[#141718] truncate w-[100px]">
            {title || "Tray Table"}
          </h5>
          <p className="text-sm text-[#6C7275] pb-1">
            Color : {color || "Black"}
          </p>
          <div className="flex items-center justify-between w-[80px] h-[32px] border border-[#6c7275] rounded-sm py-1 px-2">
            <button className="text-xl text-[#6C7275] " onClick={() => decreaseQuantity(id)}>-</button>
            <p className="text-lg text-black/900 font-semibold">
              {quantityInCart}
            </p>
            <button className="text-xl text-[#6C7275]" onClick={() => updateQuantity(id, quantityInCart + 1)}>+</button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 h-full">
          <p className="text-lg text-black/900 font-semibold">
            ${(price * quantityInCart).toFixed(2)}
          </p>
          <Image
            src="/close.png"
            alt="line"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
