import React from "react";
import { Link } from "react-router-dom";
import "./chooseUs.css";
import ItemContainer from "./ItemContainer/ItemContainer";

function ChooseUs() {
  return (
    <div className="pickUs">
      <div className="pickUsText">
        <small>why choose us</small>
        <div className="pickUsTextBig">
          <h1>
            Our property includes all the little details that makes your life a
            lot better
          </h1>
        </div>
      </div>
      <ItemContainer />
      <Link to="/properties" className="nav-links button">
        Browse Properties
      </Link>
    </div>
  );
}

export default ChooseUs;
