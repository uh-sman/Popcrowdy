import React, { useState } from "react";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";
import { sidebar } from "./Section/data";
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
          </div>
          <div className="container">
            {isOpen ? (
              <div className="sidebar">
                <div className="sidebar-container">
                  <div
                    className="close-menu "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    X
                  </div>
                  {sidebar.map(({ title, button, id }) => {
                    return (
                      <ul className="sidebar-list" key={id}>
                        <li>{title}</li>
                        <button title={id} className="btn">
                          {button}
                        </button>
                      </ul>
                    );
                  })}
                </div>
              </div>
            ) : (
              <GiHamburgerMenu
                style={{ marginRight: "50px" }}
                onClick={(e) => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
