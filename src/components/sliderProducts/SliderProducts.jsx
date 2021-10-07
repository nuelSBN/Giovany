import React from "react";
import Products from "./products/Products";
import "./SliderProducts.css";

function SliderProducts() {
  return (
    <div className="propertiesImageSlider">
      <Products />
      <Products />
      <Products />
    </div>
  );
}

export default SliderProducts;
