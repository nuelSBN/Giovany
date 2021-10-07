import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/properties" className="nav-links button">
        <span>BROWSE PROPERTIES NOW</span>
      </Link>
    </div>
  );
}

export default BannerSection;
