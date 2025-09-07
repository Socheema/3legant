import Image from 'next/image'
import React from 'react'


function Shop() {
  return (
    <div className='flex flex-col items-center justify-between mt-4 px-8'>
      {/* IMAGE CONTAINER */}
      <div className='flex w-full h-[308px] relative'>
        <Image
          src='/mobile-shop-img.png'
          alt='Product Image'
          fill
          objectFit='cover'
        />
        <div className='flex flex-col items-center justify-between absolute top-19 w-full h-[152px] md:hidden'>
          <p className='text-black/900 text-lg'>
            Home {' > '} Shop
          </p>
          <p className='text-black/900 text-2xl flex self-center pl-3'>Let's design the place you always imagined</p>
        </div>
      </div>
    </div>
  )
}

export default Shop
