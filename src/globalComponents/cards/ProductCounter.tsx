'use client';
import { useState, useEffect } from "react";

type Props = {
  quantity?: number;
  setQuantity?: (val: number) => void;
  className?: string;
  divClassName?: string;
  handleUpdateCart?: (val: number) => void;
  decrementCount?: () => void;
  incrementCount?: () => void;
}

const ProductCounter = ({ 
  className, 
  divClassName, 
  quantity = 1, 
  setQuantity, 
  decrementCount, 
  incrementCount, 
  handleUpdateCart 
}: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = parseInt(value, 10);
    
    if (value === "") {
      setQuantity?.(0);
      handleUpdateCart?.(0);
    } else if (!isNaN(numberValue) && value.length <= 4) {
      const newValue = Math.max(numberValue, 0);
      setQuantity?.(newValue);
      handleUpdateCart?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      setQuantity?.(newValue);
      handleUpdateCart?.(newValue);
      decrementCount?.();
    }
  };

  const handleIncrement = () => {
    const newValue = quantity + 1;
    setQuantity?.(newValue);
    handleUpdateCart?.(newValue);
    incrementCount?.();
  };

  return (
    <div 
      className={`flex gap-1 border ${divClassName} border-softGray h-auto rounded-[5px] overflow-clip flex-row items-center bg-whiteColor`}
      role="spinbutton"
      aria-label="Product quantity"
      aria-valuemin={1}
      aria-valuemax={9999}
      aria-valuenow={quantity}
    >
      <button
        aria-label="Decrease quantity"
        className={`p-4 ${className} bg-lightGray py-[8px] w-[25px] flex items-center justify-center px-[8px] rounded-tl-[4px] rounded-bl-[4px] text-blackColor text-[22px] sm:text-[18px]`}
        onClick={handleDecrement}
        disabled={quantity <= 1}
        aria-disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        className={`${className} text-center px-[1px] placeholder:text-blackColor py-[8px] text-[13px] w-[30px] focus:outline-0 border-none max-[380px]:w-[25px] flex items-center justify-center text-blackColor bg-white border border-gray-300 rounded-[4px]`}
        value={quantity.toString()}
        onChange={handleInputChange}
        aria-label="Quantity input"
        min={1}
        max={9999}
      />
      <button
        aria-label="Increase quantity"
        className={`p-4 ${className} bg-lightGray px-[8px] py-[8px] w-[25px] flex items-center justify-center max-[330px]:rounded-[4px] rounded-tr-[4px] rounded-br-[4px] text-blackColor text-[22px] sm:text-[18px]`}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter; 