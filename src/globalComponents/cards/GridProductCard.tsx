import React from "react";
import Link from "next/link";
import Image from "next/image";


type props = {
  discount: number;
  productId: string | number;
  productImg: string;
  productShip: string;
  productName: string;
  productprice: number;
  discountedPrice: number;
}

const GridProductCard = ({ discount, productId, productImg, productShip, productName, productprice, discountedPrice }: props) => {

  return (
    <div className={`flex flex-col h-auto border border-softGray border-b-0 rounded-[10px] overflow-hidden transform transition-transform duration-500 hover:scale-105`}>
      <span className="cursor-pointer rounded-full absolute z-[1] p-2 top-[10px]  right-[10px] flex justify-center items-center bg-whiteColor" >
        <svg tabIndex={1}
          className={`transition duration-300 stroke-darkGray fill-white cursor-pointer focus:outline-none group-hover:fill-FlameOrange hover:stroke-red-500 hover:text-FlameOrange hover:fill-FlameOrange`}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 17.7188C10.5 17.7188 2.29688 13.125 2.29688 7.54688C2.29688 6.56077 2.63853 5.60512 3.26371 4.84252C3.88889 4.07992 4.75898 3.55748 5.72594 3.36409C6.6929 3.1707 7.697 3.3183 8.5674 3.78179C9.4378 4.24527 10.1207 4.996 10.5 5.90626C10.8793 4.996 11.5622 4.24527 12.4326 3.78179C13.303 3.3183 14.3071 3.1707 15.2741 3.36409C16.241 3.55748 17.1111 4.07992 17.7363 4.84252C18.3615 5.60512 18.7031 6.56077 18.7031 7.54688C18.7031 13.125 10.5 17.7188 10.5 17.7188Z"
          />
        </svg>
      </span>
      {discount !== 0 && (
        <div className="absolute top-3 left-3 z-40 bg-[#00CDA8] rounded-[6px] px-2 h-[26px] flex justify-center items-center">
          <span className="text-whiteColor text-[12px] font-[600] tracking-wide">
            {discount}%
          </span>
        </div>
      )}
      <Link href={`/productDetail?id=${productId}`} className="flex justify-center h-[200px] xss:h-[150px] xsx:h-[120px] bg-[#F8F8F8] grid-product-list-img-responsive items-center relative cursor-pointer">
        <Image src={productImg} alt="product" fill style={{ objectFit: 'cover' }} />
      </Link>
      <div className="px-2 pt-2 bg-whiteColor">
        <div className="flex justify-between">
          <div className="flex-col ">
            <Link href={`/productDetail?id=${productId}`}>
              <p className="text-[15px] smm:text-[13px] text-FlameOrange font-[500] smm:w-[115px] w-full text-ellipsis overflow-hidden line-clamp-1 ">{productName}</p>
            </Link>

          </div>

        </div>
        <div className="flex justify-between gap-2 smm:items-center smm:py-1 mb-1">
          <p className="text-[13px] space-x-2 smm:text-[11px]">
            {discount !== 0 ? (
              <>
                <span className="line-through text-darkGray font-[400]">
                  ${productprice.toFixed(2)}
                </span>
                <span>${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span>${productprice.toFixed(2)}</span>
            )}
          </p>
          <p className="text-[13px] text-blackColor smm:text-[11px] mdd:hidden">Ship: {productShip}</p>
        </div>
      </div>
      <button className="flex justify-center cursor-pointer overflow-clip hover:border-0 text-whiteColor hover:bg-btn-gradient-hover btn-gradient items-center gap-2 w-full h-[39px] smm:h-[32px] text-[15px] smm:text-[11px] rounded-b-[10px]">
        <span>
          <svg
            viewBox="0 0 20 19"
            className="h-[20px] w-[20px] smm:h-[16px] smm:w-[16px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M6.9375 17.2188C7.59334 17.2188 8.125 16.6871 8.125 16.0312C8.125 15.3754 7.59334 14.8438 6.9375 14.8438C6.28166 14.8438 5.75 15.3754 5.75 16.0312C5.75 16.6871 6.28166 17.2188 6.9375 17.2188Z"
            />
            <path
              fill="white"
              d="M14.6562 17.2188C15.3121 17.2188 15.8438 16.6871 15.8438 16.0312C15.8438 15.3754 15.3121 14.8438 14.6562 14.8438C14.0004 14.8438 13.4688 15.3754 13.4688 16.0312C13.4688 16.6871 14.0004 17.2188 14.6562 17.2188Z"
            />
            <path
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.13945 5.34375H17.4543L15.4949 12.2016C15.425 12.4504 15.2753 12.6695 15.0688 12.825C14.8623 12.9806 14.6105 13.064 14.352 13.0625H7.2418C6.98328 13.064 6.73143 12.9806 6.52493 12.825C6.31844 12.6695 6.16874 12.4504 6.09883 12.2016L3.41211 2.80547C3.37661 2.68134 3.30161 2.57217 3.19849 2.49449C3.09536 2.41681 2.96973 2.37486 2.84062 2.375H1.59375"
            />
          </svg>
        </span>
        <p className="">Add to Cart</p>
      </button>
    </div >
  );
};

export default GridProductCard;