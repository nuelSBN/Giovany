import React from "react";
import SliderProducts from "../../../sliderProducts/SliderProducts";
import "./propertiesSection.css";

function PropertiesSection() {
  return (
    <div className="propertiesSection">
      <div className="propertiesSectionHeading">
        <h1>
          Display Latest & Featured <span>Properties</span>
        </h1>
      </div>
      <div className="propertiesSectionText">
        <p className="propertiesSectionTextMainText">
          There Have been few things in my life which have had more genial
          effect on my than the possession of a piece of land
        </p>
        <p className="propertiesSectionTextSubText">-Harriet martineau</p>
      </div>
      <SliderProducts />
    </div>
  );
}

export default PropertiesSection;
