import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);
  return (
    <div className="navbar">
      <div className="header">
        <div className="logoContainer">
          <Link to="/" className="nav-links">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
            />
          </Link>
        </div>
        <div className="icons">
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
        <div className="navbarsSection">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/properties"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="telephone">
          <Link to="/telephone" className="nav-links" onClick={closeMobileMenu}>
            Call us: +234 813 0927 634
          </Link>
        </div>
      </div>
      <div className="search">
        <div className="searchBoxContainer">
          <input
            type="text"
            className="searchBox active"
            placeholder="search here"
          />
          <i className="closeSearchIcon fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
