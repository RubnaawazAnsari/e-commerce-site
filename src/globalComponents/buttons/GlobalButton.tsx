'use client'
import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";

type Props = {
  alt?: any;
  icon?: any;
  title: string;
  width?: string;
  font?: string;
  color?: string;
  height?: string;
  bgColor?: string;
  loading?: boolean;
  disabled?: boolean;
  cartIcon?: boolean;
  flexDirection?: any;
  loaderColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  className?: any;
  hover?: {
    bgColor?: string;
    color?: string;
    borderColor?: string;
  };
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  "aria-disabled"?: boolean;
};

const GlobalButton = ({
  icon,
  width,
  title,
  height,
  className,
  borderColor,
  borderWidth,
  font = "600",
  color = "white",
  cartIcon = false,
  disabled = false,
  borderRadius = '5px',
  flexDirection = 'row',
  onClick,
  ...rest
}: Props) => {

  return (
    <button
      type="button"
      style={{
        width,
        color: color || 'white',
        height,
        borderRadius,
        flexDirection,
        fontWeight: font,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        border: `${borderWidth} solid ${borderColor}`,
        userSelect: 'none',
        background: className?.includes('btn-gradient') ? 'linear-gradient(90deg, #FF7E5F 0%, #FD3A69 100%)' : 'transparent',
      }}
      className={`gap-2 ${className} h-[48px] smm:h-[41px] flex justify-center items-center`}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      <div>
        {cartIcon && <Image src={icon} alt={"icon"} />}
      </div>
      <p className={`text-[15px] smm:text-[12px] leading-[22px] tracking-[0.1px]`}>{title}</p>
    </button>
  );
};

export default GlobalButton;