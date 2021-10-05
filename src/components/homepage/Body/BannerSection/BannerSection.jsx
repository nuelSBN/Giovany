import React from "react";
import "./bannerSection.css";

function BannerSection() {
  return (
    <div className="banner">
      <div className="bannerTextContainer">
        <h1 className="bannerText">
          Browse the Top <span>Giovany Homes</span>
        </h1>
        <p className="bannerTextP">
          <span className="color">Giovany Homes</span> is a modular home
          marketplace that helps you find, compare, and purchase
          <span className="break"> a prefab modular home.</span>
        </p>
      </div>
      <button>
        <span>BROWSE PROPERTIES NOW</span>
      </button>
    </div>
  );
}

export default BannerSection;
