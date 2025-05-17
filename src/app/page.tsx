"use client"

import React from "react";

import ProductList from "./productList/page";

const home = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <ProductList />
    </div>
  );
};

export default home;