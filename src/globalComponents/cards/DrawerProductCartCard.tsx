'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ProductCounter from './ProductCounter';

type props = {
  id: number | string;
  image: StaticImageData | string;
  name: string;
  quantity: number;
  originalPrice: number;
  discountedPrice: number;
  color?: string;
  size?: string;
  onRemove?: () => void;
  onQuantityChange?: (newQuantity: number) => void;
};

const DrawerProductCartCard = ({ id, image, name, quantity, discountedPrice, originalPrice, color, size, onRemove, onQuantityChange }: props) => {
  return (
    <div className='flex justify-start items-center p-2 bg-softGray'>
      <Image
        src={image}
        alt={name}
        height={400}
        width={400}
        className='h-[70px] w-[70px] rounded-[5px]'
      />
      <div className='flex justify-between items-center p-2 bg-softGray w-full'>
        <div>
          <p className='w-full text-ellipsis overflow-hidden font-medium line-clamp-1 text-[15px] text-FlameOrange smm:text-[13px]'>
            {name}
          </p>
          {(color || size) && (
            <p className='text-[12px] text-gray-500'>
              {color && <span>Color: {color}</span>}
              {color && size && <span> | </span>}
              {size && <span>Size: {size}</span>}
            </p>
          )}
          <div className="my-2">
            <ProductCounter
              quantity={quantity}
              handleUpdateCart={onQuantityChange}
              className="h-[24px]"
              divClassName="w-[70px]"
            />
          </div>
          <div className='flex gap-2 items-baseline'>
            <p className='text-blackColor text-[13px] smm:text-[11px]'>{quantity}</p>
            <span className='text-blackColor text-[13px] smm:text-[11px]'>x</span>
            <p className='line-through text-darkGray font-[400] text-[13px] smm:text-[11px]'>
              ${originalPrice}
            </p>
            <p className='text-blackColor font-[500] text-[15px] smm:text-[11px]'>
              ${discountedPrice}
            </p>
          </div>
        </div>

        <button onClick={onRemove} aria-label="Remove from cart" className="p-1 ml-2 rounded hover:bg-gray-200 transition">
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 17"
            stroke="#929FA5"
            className="hover:stroke-FlameOrange cursor-pointer transition-all duration-200 ease-in"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 4L4 13"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 13L4 4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DrawerProductCartCard;
