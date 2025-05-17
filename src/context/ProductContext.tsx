'use client';
import React, { createContext, useContext, useState } from 'react';

interface ProductContextType {
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <ProductContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}; 