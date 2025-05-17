'use client'
import React, { useState } from 'react';
import GlobalButton from "@/globalComponents/buttons/GlobalButton"
import StarsRating from "@/globalComponents/StarRating/StarRating"
import { useProduct } from '@/context/ProductContext';
import ProductCounter from './ProductCounter';
import Image from 'next/image';
import ProductDetailTabs from '../productDetailTabs/ProductDetailTabs';
import MallImage from "@/assets/pngs/mall-img.png";
import baseketIcon from '@/assets/svgs/shopping-white-cart.svg';
import { Product } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

interface ProductDetailCardProps {
  product: Product;
}

const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  const { selectedColor, setSelectedColor } = useProduct();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const sizes = ["Standard", "Compact", "Extended(out of stock)"];

  const calculateDiscount = () => {
    const discount = Math.round((product.price * 0.3) * 100) / 100;
    return {
      discountedPrice: product.price - discount,
      discountPercentage: 30
    };
  };

  const { discountedPrice, discountPercentage } = calculateDiscount();

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    const selectedColorObj = product.colors.find(c => c.name === selectedColor);
    const payload = {
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: selectedColorObj?.thumbnail || product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };
    dispatch({
      type: 'ADD_ITEM',
      payload,
    });
    toast.success(`Added to cart: ${product.name} (${selectedColor}, ${selectedSize}) - Quantity: ${quantity}`);
  };

  return (
    <div className="flex flex-col gap-[6px] w-full font-normal">
      <div className="flex flex-col gap-4 xs:gap-3 w-full">
        <Image src={MallImage} alt="" height={15} width={35} />
        <h1 className="text-2xl text-blackColor font-bold">
          {product.name}
        </h1>
      </div>
      <span className="flex justify-start items-center gap-4">
        <StarsRating initialValue={product.rating} />
        <p className="text-FlameOrange select-tick text-[13px] smm:text-[11px] cursor-pointer">Reviews: (2)</p>
        <p className="text-darkGray text-[13px] smm:text-[11px]">{product.stock} Sold</p>
      </span>

      <div className="flex justify-start items-center gap-4">
        <span className="bg-blackColor clipper-path px-4 py-2">
          <p className="text-white text-center text-[15px] smm:text-[13px] pl-2">Best Seller</p>
        </span>
        <p className="text-darkGray text-[15px] smm:text-[13px]">In USA</p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <p className="text-darkGray text-[13px] smm:text-[11px]">
          Color Family: <span className='text-[14px] smm:text-[13px] font-[700]'>{selectedColor || "Select a color"}</span>
        </p>
        <div className="flex gap-4 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorSelect(color.name)}
              className="relative w-12 h-12 flex items-center justify-center bg-transparent"
              style={{ padding: 0, border: 'none' }}
            >
              <img
                src={color.thumbnail}
                alt={color.name}
                className="w-full h-full object-contain"
                style={{ borderRadius: 0, boxShadow: 'none', background: 'transparent' }}
              />
              {selectedColor === color.name && (
                <div className="absolute right-0 bottom-[-1] text-white bg-FlameOrange w-[20px] h-[20px] text-xs flex justify-end items-end rounded-br-[4px] tick-clip">
                  <svg width="14" height="14" fill="white" viewBox="0 0 20 20">
                    <path d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.829 6.364-6.364a1 1 0 1 1 1.415 1.415l-7.072 7.071z" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <p className="text-darkGray text-[13px] smm:text-[11px]">
          Size: <span className='text-[14px] smm:text-[13px] font-[600]'>{selectedSize || "Select a size"}</span>
        </p>
        <div className="grid grid-cols-3 smm:grid-cols-2 gap-3 mb-1 h-12">
          {sizes.map((size) => (
            <p
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border border-elegantGray rounded text-nowrap h-10 flex items-center justify-center text-[13px] smm:text-[11px] cursor-pointer ${selectedSize === size
                  ? 'scale-100 bg-FlameOrange select-tick text-white font-semibold border-0'
                  : 'scale-100'
                }`}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-FlameOrange select-tick smm:leading-[30px] font-[700] text-[18px] smm:text-[13px] smm:mt-10">
          ${discountedPrice.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-start items-center gap-2">
        <p className="text-darkGray text-[13px] smm:text-[10px] line-through">${product.price.toFixed(2)}</p>
        <p className="text-blackColor ml-1 font-[700] text-[15px] smm:text-[12px]">-{discountPercentage}%</p>
      </div>

      <p className="text-[#25C077] text-[13px] smm:text-[11px]">
        Available Stock: <span className="text-darkGray">{product.stock}</span>
      </p>

      <div className="flex justify-start items-center gap-3 my-1">
        <p className='text-[14px] smm:text-[11px] text-blackColor'>Quantity:</p>
        <ProductCounter
          className="h-[30px]"
          divClassName='w-[89px]'
          quantity={quantity}
          setQuantity={setQuantity}
          handleUpdateCart={(newQuantity) => {
            setQuantity(newQuantity);
          }}
        />
      </div>

      <div className="flex smm:w-full gap-4 smm:gap-3 xs:grid xs:grid-cols-2">
        <div className='w-[155px] smm:w-full'>
          <GlobalButton
            width="100%"
            height='46px'
            cartIcon={true}
            icon={baseketIcon}
            borderRadius="5px"
            title="Add to cart"
            className="btn-gradient hover:bg-FlameOrange"
            aria-disabled={!selectedColor || !selectedSize}
            disabled={!selectedColor || !selectedSize}
            onClick={handleAddToCart}
          />
        </div>
        <div className='w-[155px] smm:w-full'>
          <GlobalButton
            height='46px'
            title="Buy Now"
            cartIcon={true}
            borderRadius="5px"
            icon={baseketIcon}
            className="bg-blackColor hover:bg-FlameOrange"
          />
        </div>
      </div>

      <div>
        <ProductDetailTabs description={product.description} />
      </div>
    </div>
  );
};

export default ProductDetailCard;