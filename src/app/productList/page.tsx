'use client';

import React, { useState } from 'react';
import GridProductCard from '@/globalComponents/cards/GridProductCard';
import ListProductCard from '@/globalComponents/cards/ListProductCard';
import { products } from '@/data/mockProducts';

const ProductList = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const gridProducts = products.map(product => ({
    productId: product.id,
    productImg: product.images[0],
    productName: product.title,
    productprice: product.price,
    discountedPrice: product.price * 0.7, // 30% discount
    discount: 30,
    productShip: "Free"
  }));

  const listProducts = products.map(product => ({
    productId: product.id,
    productImg: product.images[0],
    productName: product.title,
    productprice: product.price,
    discountedPrice: product.price * 0.7, // 30% discount
    discount: 30,
    discountOffer: 30,
    productDescription: product.description
  }));

  return (
    <div className="w-full px-16 lg:px-10 smm:px-4 py-4">
      <div className="flex justify-end mb-4 gap-2">
        <button
          className={`px-4 py-2 rounded border ${viewType === 'grid' ? 'btn-gradient text-white' : 'bg-white text-black'}`}
          onClick={() => setViewType('grid')}
        >
          Grid View
        </button>
        <button
          className={`px-4 py-2 rounded border ${viewType === 'list' ? 'btn-gradient text-white' : 'bg-white text-black'}`}
          onClick={() => setViewType('list')}
        >
          List View
        </button>
      </div>

      {viewType === 'grid' ? (
        <div className="grid grid-cols-5 xl:grid-cols-4 mdd:grid-cols-3 ssm:grid-cols-2 gap-5">
          {gridProducts.map((product) => (
            <GridProductCard
              key={product.productId}
              {...product}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {listProducts.map((product) => (
            <ListProductCard
              key={product.productId}
              {...product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;