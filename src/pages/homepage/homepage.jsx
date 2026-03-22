import React from "react";
import Hero from "../../components/hero/hero.jsx";
import Brands from "../../components/brands/brands.jsx";
import ProductList from "../../components/productList/productList.jsx";

const homepage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <ProductList />
    </div>
  );
};

export default homepage;
