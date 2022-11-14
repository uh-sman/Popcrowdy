import React from "react";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
