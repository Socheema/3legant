import React from "react";
import Image from "next/image";
import { useState } from "react";


function Account() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          <label htmlFor="displayName" className="text-neutral-07 text-sm">
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
            This will be how your name will displayed in the account section and
            in reviews.{" "}
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
          {errors.email && <p className="text-red text-xs">{errors.email}</p>}
        </div>
      </form>

      <form
        onSubmit={handleSubmit}
        className=" w-full flex flex-col gap-6 px-4 mb-10 rounded-md"
      >
        <h4 className="text-neutral-07 text-lg font-semibold">Password</h4>
        <div className="flex flex-col gap-2">
          <label htmlFor="oldPassword" className="text-neutral-07 text-sm">
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
          <label htmlFor="newPassword" className="text-neutral-07 text-sm">
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
          <label htmlFor="repeatPassword" className="text-neutral-07 text-sm">
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
}

export default Account;
