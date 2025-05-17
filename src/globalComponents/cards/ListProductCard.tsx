import React from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalButton from "../buttons/GlobalButton";
import baseketIcon from '@/assets/svgs/shopping-white-cart.svg';

type props = {
  discount: number;
  productId: string | number;
  productImg: string;
  productName: string;
  productprice: number;
  discountOffer: number;
  discountedPrice: number;
  productDescription: string;
}

const ListProductCard = ({ discount, productId, productImg, productName, productprice, discountOffer, discountedPrice, productDescription }: props) => {

  return (
    <div className="flex justify-center mb-4 transition-transform duration-500 hover:scale-105">
      <div className="overflow-hidden rounded-lg bg-grayishBlue flex justify-between sxs:flex-col w-full border">

        <Link href={`/productDetail?id=${productId}`} className="relative flex justify-center items-center border-b border-softGray">
          {discount !== 0 && (
            <div className="absolute z-[20] top-3 left-3">
              <span className="bg-[#00CDA8] text-[12px] w-[100px] h-[30px] px-2 py-1 rounded-[6px] text-whiteColor">
                {discountOffer}%
              </span>
            </div>
          )}
          <div className="w-[202px] h-[172px] sxs:h-[320px] xxs:h-[290px] xsx:h-[250px] flex justify-center items-center">
            <Image src={productImg} alt={productName} fill objectFit="cover" />
          </div>
          <div className="absolute right-3 bottom-3 h-[32px] w-[32px] rounded-[10px] flex justify-center items-center group bg-whiteColor">
            <svg tabIndex={1}
              width="18"
              height="16"
              viewBox="0 0 18 16"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-300 stroke-darkGray fill-whiteColor cursor-pointer focus:outline-none group-hover:fill-FlameOrange hover:stroke-FlameOrange hover:text-FlameOrange hover:fill-FlameOrange`}
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15C9 15 1 10.5455 1 5.13637C1 4.18014 1.3332 3.25345 1.9429 2.51396C2.5526 1.77447 3.40114 1.26786 4.34416 1.08033C5.28717 0.8928 6.26641 1.03593 7.11525 1.48537C7.9641 1.93481 8.63012 2.66279 9 3.54546C9.36988 2.66279 10.0359 1.93481 10.8847 1.48537C11.7336 1.03593 12.7128 0.8928 13.6558 1.08033C14.5989 1.26786 15.4474 1.77447 16.0571 2.51396C16.6668 3.25345 17 4.18014 17 5.13637C17 10.5455 9 15 9 15Z"
              />
            </svg>
          </div>
        </Link>

        <div className="flex w-full flex-col justify-center gap-1 relative p-2">
          <Link href={`/productDetail?id=${productId}`}>
            <h3 className="font-[700] text-[15px] text-FlameOrange">{productName}</h3>
          </Link>
          <p className="text-darkGray smm:text-[11px] text-ellipsis line-clamp-3 text-[13px]">
            {productDescription}
          </p>
          <div className="flex justify-between gap-1 mt-2">
            <div className="flex gap-2 items-center">
              <p className="text-[15px] space-x-2 smm:text-[11px]">
                {discount !== 0 ? (
                  <>
                    <span className="line-through text-darkGray font-[400] text-[13px] space-x-2 smm:text-[11px]">
                      ${productprice.toFixed(2)}
                    </span>
                    <span className="font-medium">${discountedPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span>${productprice.toFixed(2)}</span>
                )}
              </p>
            </div>
            <div className='w-[155px] smm:w-full'>
              <GlobalButton
                height='46px'
                title="Buy Now"
                cartIcon={true}
                borderRadius="5px"
                icon={baseketIcon}
                className="btn-gradient hover:bg-FlameOrange"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default ListProductCard;