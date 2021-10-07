import React from "react";
import AboutSection from "./Body/AboutSection/AboutSection";
import BannerSection from "./Body/BannerSection/BannerSection";
import ChooseUs from "./Body/ChooseUS/ChooseUs";
import PropertiesSection from "./Body/propertiesSection/PropertiesSection";
import Header from "./Header/Header";

function Homepage() {
  return (
    <div>
      <Header />
      <BannerSection />
      <PropertiesSection />
      <AboutSection />
      <ChooseUs />
    </div>
  );
}

export default Homepage;
