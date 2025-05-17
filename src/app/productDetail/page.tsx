'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ProductProvider } from '@/context/ProductContext';
import { products } from '@/data/mockProducts';
import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const ProductDetailImagesCarousel = dynamic(
  () => import('@/globalComponents/carousel/ProductDetailImagesCarousel'),
  {
    loading: () => (
      <div role="status" data-testid="loading-skeleton">
        <div className="animate-pulse bg-gray-200 h-[500px] rounded-lg" />
      </div>
    ),
    ssr: false
  }
);

const ProductDetailCard = dynamic(
  () => import('@/globalComponents/cards/ProductDetailCard'),
  {
    loading: () => (
      <div role="status" data-testid="loading-skeleton">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    ),
    ssr: false
  }
);

const LoadingState = () => (
  <div className="animate-pulse px-16 lg:px-10 smm:px-4 mt-6">
    <div className="grid grid-cols-2 gap-x-6 lg2:grid-cols-1 lg2:gap-y-6">
      <div role="status" data-testid="loading-skeleton">
        <div className="bg-gray-200 h-[500px] rounded-lg"></div>
      </div>
      <div role="status" data-testid="loading-skeleton">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <ProductProvider>
      <Suspense fallback={<LoadingState />}>
        <div className='px-16 lg:px-10 smm:px-4 mt-6'>
          <div className='grid grid-cols-2 gap-x-6 lg2:grid-cols-1 lg2:gap-y-6'>
            <div className=''>
              <ProductDetailImagesCarousel product={product} />
            </div>
            <div className=''>
              <ProductDetailCard product={product} />
            </div>
          </div>
        </div>
      </Suspense>
    </ProductProvider>
  )
}

export default ProductDetail;