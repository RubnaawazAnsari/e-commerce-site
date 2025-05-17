import React from 'react';

const features = [
  "Bluetooth 5.3 for fast and stable connection",
  "ENC Noise Reduction for clear calls",
  "High-fidelity stereo sound",
  "Ergonomic design with secure fit",
  "Touch controls with voice assistant support",
  "30 hours total playtime with case",
  "Water-resistant (IPX5 rated)",
];

const ProductFeature = () => {
  return (
    <section className="p-2 bg-whiteColor">
      <h2 className="text-[18px] font-semibold mb-2 text-blackColor  smm:text-[15px] ">Key Features</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex  items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
            <path fill="#F0532F" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4"/>
            </svg>
            <span className='text-blackColor text-[15px] smm:text-[11px]'>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeature;
