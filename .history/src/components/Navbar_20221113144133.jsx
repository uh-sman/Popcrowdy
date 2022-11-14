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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
