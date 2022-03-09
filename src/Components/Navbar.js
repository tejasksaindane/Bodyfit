import React, { useState } from "react";
import "../Style/Navbar.css";
import { SiAircanada } from "react-icons/si";
import { FaBars, FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* TODO ist Logo part */}
        <div className="logo">
          <h2>
            <span>H</span>ealth
            <span>F</span>it
          </h2>
        </div>
        {/* TODO 2nd part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          // className
        >
          <ul>
            <li>Home</li>

            <a href="https://wonderful-galileo-907f1d.netlify.app">
              <li>BMI</li>
            </a>
            <li>Exercise</li>
          </ul>
        </div>
        {/* TODO 3rd Social media Links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="">{<FaInstagramSquare />}</a>
            </li>
            <li>
              <a href="">{<SiAircanada />}</a>
            </li>
            <li>
              <a href="">{<FaFacebookF />}</a>
            </li>
          </ul>
          {/* TODO Hamburger Menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FaBars />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
