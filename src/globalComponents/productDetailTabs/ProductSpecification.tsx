import React from 'react';

const specifications = [
  { label: "Bluetooth Version", value: "5.3" },
  { label: "Battery Life", value: "Up to 30 hours (with case)" },
  { label: "Charging Port", value: "USB Type-C" },
  { label: "Noise Reduction", value: "ENC (Environmental Noise Cancellation)" },
  { label: "Water Resistance", value: "IPX5" },
  { label: "Driver Size", value: "10mm Dynamic Drivers" },
  { label: "Touch Controls", value: "Yes" },
  { label: "Voice Assistant", value: "Supported" },
];

const ProductSpecification = () => {
  return (
    <section className="p-2 bg-whiteColor">
      <h2 className="text-[18px] text-blackColor font-semibold mb-2  smm:text-[15px] ">Specifications</h2>
      <div className="grid grid-cols-1  gap-4">
        {specifications.map((spec, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium text-blackColor text-[15px] smm:text-[11px]">{spec.label}</span>
            <span className="text-right text-blackColor text-[15px] smm:text-[11px]">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecification;
