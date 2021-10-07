import React from "react";
import { Link } from "react-router-dom";
import "./aboutSection.css";

function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="aboutContainer">
        <img
          src="https://images.pexels.com/photos/7319478/pexels-photo-7319478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="aboutText">
          <h1>
            From more than 25 years we have provided real estate services with
            honesty trust and transparency
          </h1>
          <div className="aboutTextP">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatum modi eligendi facilis reprehenderit quisquam optio
              consequatur quod rerum numquam soluta, id iste excepturi ab odit
              suscipit maiores debitis doloremque saepe! Similique illum
              provident ipsam tempora vitae porro accusamus vero voluptatem,
              quia necessitatibus illo? Hic vitae at necessitatibus delectus
              nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              magnam doloremque temporibus iste dolorum architecto, amet dolor
              officiis, nemo esse, hic nobis cumque? Provident, ratione itaque
              atque est maiores quod!
            </p>
          </div>
          <Link to="/about" className="nav-links button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
