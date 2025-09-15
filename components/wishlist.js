import React from 'react'
import Image from 'next/image'

function Wishlist() {
  return (
 <div className="w-full flex flex-col gap-6 px-4 py-6 md:py-0">
            <h4 className="text-neutral-07 text-lg font-semibold">
              My Wishlist
            </h4>

            <table className="hidden md:block  ">
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
  )
}

export default Wishlist
