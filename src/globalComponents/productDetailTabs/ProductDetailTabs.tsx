import React, { useState } from "react";
import ProductDescription from "../productDetailTabs/ProductDescription";
import ProductFeature from "../productDetailTabs/ProductFeature";
import ProductSpecification from "../productDetailTabs/ProductSpecification";

interface ProductDetailTabsProps {
  description: string;
}

const ProductDetailTabs = ({ description }: ProductDetailTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const DentistryTabs = [
    {
      id: 1,
      label: "Description",
      content: <ProductDescription description={description} />,
    },
    { id: 2, label: "Features", content: <ProductFeature /> },
    { id: 3, label: "Specification", content: <ProductSpecification /> },
  ];

  return (
    <div>
      <div className="bg-whiteColor border border-elegantGray rounded-md mt-2">
        <div className="h-12 px-2 bg-grayishBlue flex items-center gap-2 rounded-tr-md rounded-tl-md">
          {DentistryTabs.map((tab, index) => (
            <button
              aria-label={tab.label}
              key={tab.id}
              className={`${
                activeTab === index
                  ? "text-FlameOrange font-medium text-[15px] smm:text-[12px] h-9 bg-whiteColor rounded-md"
                  : "text-darkGray font-medium text-[15px] smm:text-[12px]"
              } w-[150px]`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-2 px-3">{DentistryTabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default ProductDetailTabs;
