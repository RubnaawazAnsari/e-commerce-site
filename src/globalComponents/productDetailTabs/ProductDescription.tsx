import React from 'react';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <div className="py-4">
      <p className="text-darkGray text-[13px] smm:text-[11px] leading-6">
        {description}
      </p>
    </div>
  );
};

export default ProductDescription;

