import React, { useState } from "react";
import "./styles/Navbar.css";
import logo from "./assets/IMO-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger menu icon appears only on small screens */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Nav links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#inventory" onClick={closeMenu}>
            Inventory
          </a>
        </li>
        <li>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
        </li>
        <li>
          <a href="#media" onClick={closeMenu}>
            Media
          </a>
        </li>
        <li>
          <a href="#venue" onClick={closeMenu}>
            Venue
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
