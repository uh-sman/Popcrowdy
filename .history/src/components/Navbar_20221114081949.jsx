import React, { useState } from "react";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{}}>
      <nav>
        <div className="navbar-container">
          <div style={{ backgroundColor: "black" }}>
            <h1>
              <p style={{ color: "red" }}>
                <i>PropCrowdy</i>
              </p>
            </h1>
            <p style={{ color: "white" }}>FUNDRAISING</p>
          </div>
          <div>
            <ul className="nav-list">
              <li>HOME</li>
              <li>DISCOVER</li>
              <li>HOW IT WORKS</li>
              <li>RESOURCES</li>
              <li>BLOG</li>
              <FiSearch />
              <button className="btn">DASHBOARD</button>
            </ul>
            <GiHamburgerMenu
              style={{ marginRight: "50px" }}
              onClick={(e) => setIsOpen(!isOpen)}
            />
          </div>
          {isOpen && (
            <div className="sidebar">
              <div className="sidebar-container">
                <div className="close-menu " onClick={() => setIsOpen(!isOpen)}>
                  X
                </div>
                <ul className="sidebar-nav-list">
                  <li>Home</li>
                  <li>Marketplace</li>
                  <li>Collection</li>
                  <li>Account</li>
                  <li>Cart</li>

                  <button className="btn-white">Register</button>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
