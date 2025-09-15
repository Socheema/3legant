import React from 'react'
import Image from 'next/image'

function Address() {
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
  )
}

export default Address
