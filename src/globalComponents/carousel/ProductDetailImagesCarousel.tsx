'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useProduct } from '@/context/ProductContext';
import { Product } from '@/types/product';

interface ProductDetailImagesCarouselProps {
  product: Product;
}

const ProductDetailImagesCarousel = ({ product }: ProductDetailImagesCarouselProps) => {
  const { selectedColor } = useProduct();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomEnabled, setIsZoomEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsZoomEnabled(window.innerWidth >= 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImages = selectedColor
    ? product.colors.find(color => color.name === selectedColor)?.images || product.images
    : product.images;

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full' role="region" aria-label="Product image gallery">
      {isZoomEnabled ? (
        <div role="img" aria-label={`${product.name} - Zoom enabled`}>
          <InnerImageZoom
            src={currentImages[selectedIndex]}
            zoomSrc={currentImages[selectedIndex]}
            zoomPreload={false}
            width={800}
            height={600}
            zoomScale={1}
            hasSpacer={true}
            hideCloseButton={true}
            fullscreenOnMobile={true}
            zoomType="hover"
            className="rounded border border-elegantGray"
          />
        </div>
      ) : (
        <Image
          src={currentImages[selectedIndex]}
          alt={`${product.name} - Main product image`}
          width={800}
          height={600}
          className="rounded border mx-auto border-elegantGray object-contain"
          priority={selectedIndex === 0}
          quality={85}
        />
      )}

      <div 
        className="flex items-center gap-2 border border-elegantGray p-2 rounded-[5px] mt-4"
        role="toolbar"
        aria-label="Image gallery controls"
      >
        <button
          onClick={() => scrollThumbnails('left')}
          className="px-2 py-1 border border-elegantGray rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Scroll thumbnails left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 7l-5 5m0 0l5 5" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar max-w-full"
          role="list"
          aria-label="Product thumbnails"
        >
          {currentImages.map((img, idx) => (
            <button
              key={`thumb-${idx}`}
              onClick={() => setSelectedIndex(idx)}
              className={`h-[60px] w-[60px] flex-shrink-0 rounded-[4px] ${
                idx === selectedIndex ? 'ring-2 ring-primary' : 'border border-elegantGray'
              }`}
              aria-label={`View ${product.name} image ${idx + 1}`}
              aria-current={idx === selectedIndex}
            >
              <Image
                width={400}
                height={400}
                src={img}
                alt={`${product.name} - Thumbnail ${idx + 1}`}
                className="h-full w-full object-cover rounded-[4px]"
                loading={idx === 0 ? "eager" : "lazy"}
                quality={75}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollThumbnails('right')}
          className="px-2 py-1 border border-elegantGray rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Scroll thumbnails right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 17l5-5m0 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailImagesCarousel;
