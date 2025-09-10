import React from 'react'
import MobileProductCardVariant from './MobileProductCardVariant'
import Image from 'next/image'

function MoreProductsCard() {
  return (
     <div className="w-full md:h-[442px]  flex gap-4 overflow-x-auto scrollbar-hide snap-x overflow-y-hidden">
      <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-pillow.png"
                    title="Large Beige Pillow"
                    price={3.99}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-table-lamp.png"
                    title="Table Lamp"
                    price={9.9}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>

                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/bamboo-basket.png"
                    title="Bamboo Basket"
                    price={9.99}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                  <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-product-card.png"
                    title="LoveSeat Sofa"
                    price={199.0}
                    showOldPrice={true}
                    oldPrice={400}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>
                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-luxury-sofa.png"
                    title="Luxury Sofa"
                    price={299.0}
                    showOldPrice={true}
                    oldPrice={500}
                    newStock={true}
                    discount={true}
                    discountPrice={50}
                  />
                </div>

                <div className="flex flex-1">
                  <MobileProductCardVariant
                    imgSrc="/desktop-lampp.png"
                    title="Table Lamp"
                    price={99.0}
                    newStock={true}
                    discount={true}
                    discountPrice={70}
                  />
                </div>
      </div>
  )
}

export default MoreProductsCard
