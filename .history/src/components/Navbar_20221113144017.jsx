import React from "react";

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
              <li>Home</li>
              <li>Marketplace</li>
              <li>Collection</li>
              <li>Account</li>
              <li>
                Cart
                <AiOutlineShoppingCart />
              </li>
              <Profile />
              <button className="btn">Register</button>
            </ul>
            <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
              <HiMenuAlt1 className="burger" />
            </div>
          </div>
          {isOpen && (
            <div className="sidebar">
              <div className="sidebar-container">
                <div className="close-menu " onClick={() => setIsOpen(!isOpen)}>
                  <RiMenu3Line className="close" />
                </div>
                <ul className="sidebar-nav-list">
                  <li>Home</li>
                  <li>Marketplace</li>
                  <li>Collection</li>
                  <li>Account</li>
                  <li>
                    Cart
                    <AiOutlineShoppingCart />
                  </li>
                  <Profile />
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
