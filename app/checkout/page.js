"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import DiscountBannerCard from "../../components/DiscountBannerCard";
import CartBreadcrumb from "../../components/CartBreadCrumb";
import CartProductCard from "../../components/cartProductCard";


function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "",
    cardNumber: "",
    expirydate: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Contact Information validation
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    
    // Shipping Address validation
    if (!formData.streetAddress) newErrors.streetAddress = "Street address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
    
    // Payment validation
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = "Card number must be 16 digits";
    if (!formData.expirydate) newErrors.expirydate = "Expiry date is required";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirydate)) newErrors.expirydate = "Format: MM/YY";
    if (!formData.cvc) newErrors.cvc = "CVC is required";
    else if (!/^\d{3,4}$/.test(formData.cvc)) newErrors.cvc = "CVC must be 3-4 digits";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Placeholder for form submission (e.g., API call)
    console.log("Form submitted:", formData);
    // Reset form or redirect to /payment
  };

  return (
    <>
      <div className="md:hidden">
        <DiscountBannerCard />
      </div>
      <Navbar />
      <div className="pt-6 pb-10 gap-10 flex flex-col w-full px-8 md:px-25 items-center">
        <div className="flex gap-2 items-center self-start md:hidden">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-neutral-06"
          >
            <Image
              src="/images/products/vector.png"
              alt="Back to Cart"
              width={8}
              height={8}
              loading="lazy"
            />
            <p>Back</p>
          </Link>
        </div>
        <div className="flex flex-col w-full gap-6 items-center justify-center">
          <h1 className="px-8 text-4xl md:text-4xl md:font-normal self-center md:mt-6 text-neutral-07">
            Check Out
          </h1>
          <div className="w-full flex items-center justify-center pb-4 overflow-x-auto overflow-visible md:overflow-x-clip">
            <CartBreadcrumb
              items={[
                { label: "Shopping cart", href: "/cart" },
                { label: "Checkout" },
                { label: "Payment", href: "/payment" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6">
          <div className="flex flex-col w-full gap-6 flex-2">
               {/* CONTACT INFORMATION */}
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-03 w-full flex flex-col gap-6 px-4 py-6 rounded-md
          "
          >
            {/* CONTACT INFORMATION */}
            <h4 className="text-neutral-07 text-lg font-semibold">
              Contact Information
            </h4>
            <div className="w-full flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstName" className="text-neutral-07">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.firstName && (
                  <p className="text-red text-md">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastName" className="text-neutral-07">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.lastName && (
                  <p className="text-red text-md">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-neutral-07">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                required
              />
              {errors.phoneNumber && (
                <p className="text-red text-xs">{errors.phoneNumber}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-neutral-07">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                required
              />
              {errors.email && (
                <p className="text-red text-xs">{errors.email}</p>
              )}
            </div>
          </form>
          {/* SHIPPING INFORMATION */}
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-03 w-full flex flex-col gap-6 px-4 py-6 rounded-md
          "
          >
            <h4 className="text-neutral-07 text-lg font-semibold">
              Shipping Address
            </h4>
            <div className="flex flex-col gap-2">
              <label htmlFor="streetAddress" className="text-neutral-07 text-sm">
                STREET ADDRESS *
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                required
              />
              {errors.streetAddress && (
                <p className="text-red text-xs">{errors.streetAddress}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-neutral-07 text-sm">
                COUNTRY *
              </label>
              <select
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                required
              >
                <option value="">Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
              {errors.country && (
                <p className="text-red text-xs">{errors.country}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-neutral-07 text-sm">
                TOWN / CITY *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Town / City"
                value={formData.city}
                onChange={handleInputChange}
                className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                required
              />
              {errors.city && <p className="text-red text-xs">{errors.city}</p>}
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="state" className="text-neutral-07 text-sm">
                  STATE
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.state && (
                  <p className="text-red text-xs">{errors.state}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="zipCode" className="text-neutral-07 text-sm">
                  ZIP CODE
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.zipCode && (
                  <p className="text-red text-xs">{errors.zipCode}</p>
                )}
              </div>
            </div>
          </form>

          {/* PAYMENT INFORMATION */}
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-03 w-full flex flex-col gap-8 px-4 py-6 rounded-md
          "
          >
            <div className="flex flex-col gap-6 w-full">
              <h4 className="text-neutral-07 text-lg font-semibold">
                Payment method
              </h4>

              <div className="flex gap-2 border bg-[#E8ECEF] border-neutral-03 rounded-md py-4 pl-2 ">
                <input
                  type="radio"
                  id="cardcredit"
                  name="paymentMethod"
                  value="cardcredit"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="cardcredit" className="text-neutral-07 text-sm">
                  Pay by Card Credit
                </label>
              </div>
              <div className="flex gap-2 border border-neutral-03 rounded-md py-4 pl-2">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="paypal" className="text-neutral-07 text-sm">
                  Paypal
                </label>
              </div>
              {errors.paymentMethod && (
                <p className="text-red text-xs">{errors.paymentMethod}</p>
              )}
            </div>
            <hr />
            <div className="flex flex-col gap-6 w-full ">
              <div className="flex flex-col gap-2">
                <label htmlFor="cardNumber" className="text-neutral-07 text-sm">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.cardNumber && (
                  <p className="text-red text-xs">{errors.cardNumber}</p>
                )}
              </div>
              <div className="w-full flex items-center gap-4 justify-between">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="expirydate" className="text-neutral-07 text-sm">
                    EXPIRATION DATE
                  </label>
                  <input
                    type="text"
                    id="expirydate"
                    name="expirydate"
                    placeholder="MM/YY"
                    value={formData.expirydate}
                    onChange={handleInputChange}
                    className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full uppercase"
                    required
                  />
                  {errors.expirydate && (
                    <p className="text-red text-xs">{errors.expirydate}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="cvc" className="text-neutral-07 text-sm">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                    required
                  />
                  {errors.cvc && (
                    <p className="text-red text-xs">{errors.cvc}</p>
                  )}
                </div>
              </div>
            </div>
          
          </form>
                <Link href="/payment">  <button className="hidden md:flex items-center justify-center rounded-md px-4 py-3 cursor-pointer bg-black text-white w-full">Place Order</button></Link>
          </div>
       
          {/* ORDER SUMMARY */}
          <div className="w-full  flex flex-col gap-3 border border-neutral-03 p-4 rounded-md flex-1 max-h-max">
            <h4 className="text-neutral-07 text-lg font-semibold">
              Order Summary
            </h4>
            <div className="">
              <CartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
              <CartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
              <CartProductCard
                imgSrc="/cart-product-img.png"
                title="Tray Table"
                color="Black"
                quantity="2"
                price="19.99"
              />
              <div className="flex w-full items-center justify-between gap-4"> 
                <div className="flex flex-2 border border-neutral-03 rounded-md px-4 py-3">
                  <input type="text" placeholder="Input" className="border-none outline-none"/>
                </div>
                <button className="flex flex-1 items-center rounded-md px-4 py-3 cursor-pointer bg-black text-white">Apply</button>
              </div>
            </div>
         
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between py-2 border-b border-[#E8ECEF]">
                   <div className="flex items-center gap-2">
                      <Image src="/ticket-percent.svg" alt="logo" width={20} height={18} />
                     <small>JenkateMW</small>
                   </div>
                     <span className="text-[#38CB89] text-sm">-$25.00 [Remove]</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E8ECEF]">
                <p className="text-neutral-07">Shipping</p>
                <p className="text-neutral-07">Free</p>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E8ECEF]">
                <p className="text-neutral-07">Subtotal</p>
                <p className="text-neutral-07">$39.98</p>
              </div>
              <div className="flex justify-between font-semibold py-2 border-b border-[#E8ECEF]">
                <p className="text-neutral-07">Total</p>
                <p className="text-neutral-07">$39.98</p>
              </div>
            </div>
          </div>
        </div>
       <Link href="/payment" className="cursor-pointer w-full">
         <button className="flex md:hidden items-center justify-center rounded-md px-4 py-3 cursor-pointer bg-black text-white w-full">Place Order</button>
       </Link>
      </div>
    </>
  );
}

export default CheckoutPage;
