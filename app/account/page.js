"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { useState } from "react";

function AccountPage() {
  const accountDetails = ["Account", "Address", "Orders", "Wishlist", "Logout"];

  const [showDiscountBanner, setShowDiscountBanner] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("Account");

  useEffect(() => {
    setShowDiscountBanner(true);
  }, []);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
    console.log("Selected:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to render content based on selected option
  const renderSelectedContent = () => {
    switch (selectedAccount) {
      case "Account":
        return (
          <>
            <form
              onSubmit={handleSubmit}
              className=" w-full flex flex-col gap-6 px-4 py-6 md:py-0 rounded-md"
            >
              <h4 className="text-neutral-07 text-lg font-semibold">
                Account details
              </h4>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-neutral-07 text-sm">
                  FIRST NAME *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.firstName && (
                  <p className="text-red text-xs">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-neutral-07 text-sm">
                  LAST NAME *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.lastName && (
                  <p className="text-red text-xs">{errors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="displayName"
                  className="text-neutral-07 text-sm"
                >
                  DISPLAY NAME *
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  placeholder="Display Name"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                <small className="italic text-[#6C7275]">
                  This will be how your name will displayed in the account
                  section and in reviews.{" "}
                </small>
                {errors.displayName && (
                  <p className="text-red text-xs">{errors.displayName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-neutral-07 text-sm">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
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

            <form
              onSubmit={handleSubmit}
              className=" w-full flex flex-col gap-6 px-4 mb-10 rounded-md"
            >
              <h4 className="text-neutral-07 text-lg font-semibold">
                Password
              </h4>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="oldPassword"
                  className="text-neutral-07 text-sm"
                >
                  OLD PASSWORD
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  placeholder="Old Password"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.oldPassword && (
                  <p className="text-red text-xs">{errors.oldPassword}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="newPassword"
                  className="text-neutral-07 text-sm"
                >
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.newPassword && (
                  <p className="text-red text-xs">{errors.newPassword}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="repeatPassword"
                  className="text-neutral-07 text-sm"
                >
                  REPEAT PASSWORD
                </label>
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  className="border border-neutral-03 px-4 py-2 rounded-md outline-none placeholder:text-neutral-04 w-full"
                  required
                />
                {errors.repeatPassword && (
                  <p className="text-red text-xs">{errors.repeatPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md cursor-pointer w-max"
              >
                Save Changes
              </button>
            </form>
          </>
        );

      case "Address":
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6 md:py-0">
            <h4 className="text-neutral-07 text-lg font-semibold">
              Address Book
            </h4>
            <p className="text-neutral-06">
              Manage your shipping and billing addresses
            </p>
            <div className="flex items-start justify-between border border-neutral-03 p-4 rounded-md">
              <div className="flex flex-col items-start justify-between gap-2 ">
                <h5 className="font-medium mb-2">Billing Address</h5>
                <small>123 Main Street</small>
                <small>Lagos, Nigeria</small>
                <small>09153079292</small>
              </div>
              <button className="flex items-center text-lg cursor-pointer">
                <Image
                  src="/images/edit-2.svg"
                  alt="Edit"
                  width={20}
                  height={20}
                />
                <small>Edit</small>
              </button>
            </div>
            <div className="flex items-start justify-between border border-neutral-03 p-4 rounded-md">
              <div className="flex flex-col items-start justify-between gap-2 ">
                <h5 className="font-medium mb-2">Shipping Address</h5>
                <small>123 Main Street</small>
                <small>Lagos, Nigeria</small>
                <small>09153079292</small>
              </div>
              <button className="flex items-center text-lg cursor-pointer">
                <Image
                  src="/images/edit-2.svg"
                  alt="Edit"
                  width={20}
                  height={20}
                />
                <small>Edit</small>
              </button>
            </div>
          </div>
        );

      case "Orders":
        return (
          <div className="w-full flex flex-col  gap-6 px-4 py-6 md:py-0">
            <h4 className="text-neutral-07 text-lg font-semibold">
              Order History
            </h4>
            <div className="flex flex-col gap-6 md:hidden">
              <div className="flex flex-col gap-2 items-center border-b border-[#E8ECEF] md:self-center w-full md:w-1/3">
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Order ID
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    #1723_6453456
                  </small>
                </div>
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Date:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    12th March 2023
                  </small>
                </div>
                <div flex className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Total:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    $1,345.00
                  </small>
                </div>
                <div flex className="flex  border-[#E8ECEF] w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    status
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    Delivered
                  </small>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center border-b border-[#E8ECEF] md:self-center w-full md:w-1/3">
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Order ID
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    #1723_6453456
                  </small>
                </div>
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Date:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    12th March 2023
                  </small>
                </div>
                <div flex className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Total:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    $1,345.00
                  </small>
                </div>
                <div flex className="flex  border-[#E8ECEF] w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    status
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    Delivered
                  </small>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center border-b border-[#E8ECEF] md:self-center w-full md:w-1/3">
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Order ID
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    #1723_6453456
                  </small>
                </div>
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Date:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    12th March 2023
                  </small>
                </div>
                <div flex className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Total:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    $1,345.00
                  </small>
                </div>
                <div flex className="flex  border-[#E8ECEF] w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    status
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    Delivered
                  </small>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center border-b border-[#E8ECEF] md:self-center w-full md:w-1/3">
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Order ID
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    #1723_6453456
                  </small>
                </div>
                <div className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Date:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    12th March 2023
                  </small>
                </div>
                <div flex className="flex  w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    Total:
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    $1,345.00
                  </small>
                </div>
                <div flex className="flex  border-[#E8ECEF] w-full md:border-0">
                  <small className="flex text-[#6C7275] p-1 w-full md:text-[8px] md:p-0">
                    status
                  </small>
                  <small className=" flex text-[#141718] p-1 w-full font-semibold md:text-[8px] md:p-0">
                    Delivered
                  </small>
                </div>
              </div>
            </div>
            <table className="hidden md:block  ">
              <thead>
                <tr className="text-[10px]">
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Number ID
                  </th>
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Dates
                  </th>
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Status
                  </th>
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[8px]">
                  <td className="p-4 border-b border-[#E8ECEF]">
                    #1723_6453456
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">
                    12th March 2023
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">Delivered</td>
                  <td className="p-4 border-b border-[#E8ECEF]">$1,345.00</td>
                </tr>
                <tr className="text-[8px]">
                  <td className="p-4 border-b border-[#E8ECEF]">
                    #1723_6453_456
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">
                    8th March 2023
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">Delivered</td>
                  <td className="p-4 border-b border-[#E8ECEF]">$1,045.00</td>
                </tr>
                <tr className="text-[8px]">
                  <td className="p-4 border-b border-[#E8ECEF]">
                    #23_6453_456
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">
                    8th January 2023
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">Delivered</td>
                  <td className="p-4 border-b border-[#E8ECEF]">$45.00</td>
                </tr>
                <tr className="text-[8px]">
                  <td className="p-4 border-b border-[#E8ECEF]">#172453_456</td>
                  <td className="p-4 border-b border-[#E8ECEF]">
                    8th September 2023
                  </td>
                  <td className="p-4 border-b border-[#E8ECEF]">Delivered</td>
                  <td className="p-4 border-b border-[#E8ECEF]">$1,945.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Wishlist":
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6 md:py-0">
            <h4 className="text-neutral-07 text-lg font-semibold">
              My Wishlist
            </h4>

            <table>
              <thead>
                <tr className="text-[10px]">
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Product
                  </th>
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Price
                  </th>
                  <th className="text-left text-[#6C7275] hidden md:table-cell p-4 border-b border-[#E8ECEF]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[8px] border-b border-[#E8ECEF]">
                  <td>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/close.png"
                        alt="Close"
                        width={20}
                        height={20}
                      />
                      <div className="flex items-start gap-3">
                        <Image
                          src="/table-red.png"
                          alt="Product"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col gap-2">
                          <h5 className="font-medium">Tray Table</h5>
                          <p className="text-neutral-06">Color: Red</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-neutral-06 ml-6">$99.99</p>
                  </td>
                  <td>
                    <button className=" bg-black text-white text-[8px] px-2 py-1 rounded-md w-max ml-5">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-[8px] border-b border-[#E8ECEF]">
                  <td>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/close.png"
                        alt="Close"
                        width={20}
                        height={20}
                      />
                      <div className="flex items-start gap-3">
                        <Image
                          src="/table-red.png"
                          alt="Product"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col gap-2">
                          <h5 className="font-medium">Tray Table</h5>
                          <p className="text-neutral-06">Color: Red</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-neutral-06 ml-6">$99.99</p>
                  </td>
                  <td>
                    <button className=" bg-black text-white text-[8px] px-2 py-1 rounded-md w-max ml-5">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-[8px] border-b border-[#E8ECEF]">
                  <td>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/close.png"
                        alt="Close"
                        width={20}
                        height={20}
                      />
                      <div className="flex items-start gap-3">
                        <Image
                          src="/table-red.png"
                          alt="Product"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col gap-2">
                          <h5 className="font-medium">Tray Table</h5>
                          <p className="text-neutral-06">Color: Red</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-neutral-06 ml-6">$99.99</p>
                  </td>
                  <td>
                    <button className=" bg-black text-white text-[8px] px-2 py-1 rounded-md w-max ml-5">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-1 gap-4 md:hidden">
              <div className="border-b border-[#E8ECEF] p-4">
                <div className="flex items-center gap-4">
                  <Image src="/close.png" alt="Close" width={20} height={20} />
                  <div className="flex items-start gap-3">
                    <Image
                      src="/table-red.png"
                      alt="Product"
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-medium">Tray Table</h5>
                      <p className="text-neutral-06">Color: Red</p>
                      <p className="text-neutral-06">$99.99</p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm w-full">
                  Add to Cart
                </button>
              </div>
              <div className="border-b border-[#E8ECEF] p-4">
                <div className="flex items-center gap-4">
                  <Image src="/close.png" alt="Close" width={20} height={20} />
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/products/product-tray-table.png"
                      alt="Product"
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-medium">Tray Table</h5>
                      <p className="text-neutral-06">Color: Black</p>
                      <p className="text-neutral-06">$199.00</p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm w-full">
                  Add to Cart
                </button>
              </div>
              <div className="border-b border-[#E8ECEF] p-4">
                <div className="flex items-center gap-4">
                  <Image src="/close.png" alt="Close" width={20} height={20} />
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/products/product-tray-table3.png"
                      alt="Product"
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-medium">Tray Table</h5>
                      <p className="text-neutral-06">Color: Red</p>
                      <p className="text-neutral-06">$99.99</p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm w-full">
                  Add to Cart
                </button>
              </div>
              <div className="border-b border-[#E8ECEF] p-4">
                <div className="flex items-center gap-4">
                  <Image src="/close.png" alt="Close" width={20} height={20} />
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/products/product-tray-table4.png"
                      alt="Product"
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-medium">Tray Table</h5>
                      <p className="text-neutral-06">Color: Red</p>
                      <p className="text-neutral-06">$99.99</p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm w-full">
                  Add to Cart
                </button>
              </div>
              <div className="border-b border-[#E8ECEF] p-4">
                <div className="flex items-center gap-4">
                  <Image src="/close.png" alt="Close" width={20} height={20} />
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/products/product-tray-table5.png"
                      alt="Product"
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-medium">Tray Table</h5>
                      <p className="text-neutral-06">Color: Red</p>
                      <p className="text-neutral-06">$99.99</p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-md text-sm w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );

      case "Logout":
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6 items-center">
            <h4 className="text-neutral-07 text-lg font-semibold">Logout</h4>
            <p className="text-neutral-06 text-center">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral-03 text-neutral-07 px-6 py-2 rounded-md"
                onClick={() => setSelectedAccount("Account")}
              >
                Cancel
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md">
                Logout
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full flex flex-col gap-6 px-4 py-6">
            <p>Select an option from the dropdown</p>
          </div>
        );
    }
  };

  return (
    <>
      {showDiscountBanner && (
        <div className=" flex md:hidden px-8 gap-[22px] bg-[#F3F5F7] w-full items-center  py-2  h-9">
          <div className="  w-[360px]  flex items-center justify-center h-5">
            <div className=" h-[24px] flex items-center justify-between gap-2">
              <Image
                src="/ticket-percent.svg"
                alt="logo"
                width={20}
                height={18}
              />
              <div className="">
                <p className="w-[233px] h-[22px] flex items-center text-[14px]">
                  30% off storewide - Limited time!
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/close.png"
            width={16}
            height={16}
            className=" cursor-pointer"
            alt="close"
            onClick={() => setShowDiscountBanner(!showDiscountBanner)}
          />
        </div>
      )}
      <Navbar />
      <div className="pt-4 gap-10 flex flex-col  w-full px-8 md:px-25 items-center md:pb-8">
        <div className="flex gap-2 items-center self-start md:hidden">
          <Image
            src="/images/products/vector.png"
            alt="cart"
            width={8}
            height={8}
          />
          <p className="black/600">back</p>
        </div>
        <h2 className="text-[32px] leading-[40px] font-bold">My Account</h2>
        <div className="flex flex-col md:flex-row w-full md:gap-10 md:px-5">
          <div className="flex flex-col md:w-1/4  gap-10 py-10 px-6 w-full bg-[#E8ECEF] rounded-md items-center justify-center md:h-max">
            <div className="flex flex-col gap-2  items-center justify-center w-full">
              <Image
                src="/images/avatar.png"
                alt="cart"
                width={50}
                height={50}
              />
              <p>Azubuike Chima</p>
              <select
                name="account"
                id="account-select"
                value={selectedAccount}
                onChange={handleAccountChange}
                className="md:hidden px-4 py-3 rounded-md border border-neutral-03 outline-none bg-white text-neutral-07 w-full"
              >
                {accountDetails.map((item, index) => (
                  <option value={item} key={index} className="text-sm">
                    {item}
                  </option>
                ))}
              </select>
              {/* List of account options for larger screens */}
              <div className="hidden md:flex flex-col gap-1 w-max self-start ">
                {accountDetails.map((item, index) => (
                  <p
                    key={index}
                    className={` text-[10px] text-[#6C7275] cursor-pointer ${
                      selectedAccount === item ? "text-[10px] border-b" : ""
                    }`}
                    onClick={() => setSelectedAccount(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full md:w-3/4">
            {/* Conditional content based on selected option */}
            {renderSelectedContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
