import React from "react";
import "./products.css";

function Products() {
  return (
    <figure className="propertiesImageSliderContainer">
      <img
        src="https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <h3>Apartment</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        voluptatum nemo maiores debitis exercitationem, dolores rem placeat
        natus.
      </p>
      <div className="propertyDescription">
        <div className="desc">
          <i class="fas fa-bed"></i>
          <span>3 bedroom </span>
        </div>
        <div className="desc">
          <i class="fas fa-bed"></i>
          <span>3 bedroom </span>
        </div>
        <div className="desc">
          <i class="fas fa-building"></i>
          <span>100sqr feet </span>
        </div>
      </div>
    </figure>
  );
}

export default Products;
