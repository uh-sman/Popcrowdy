import React from "react";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div>
            <h1>
              <a>Shopping</a>
            </h1>
          </div>
          <div>
            <ul className="nav-list">
              <li>HOME</li>
              <li>DISCOVER</li>
              <li>HOW IT WORKS</li>
              <li>RESOURCES</li>
              <li>BLOG</li>
              <FiSearch />
              <button className="btn">Register</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
