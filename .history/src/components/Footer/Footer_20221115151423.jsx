import React from "react";
import "./footer.css";
import landscape from "../assets/landscape.png";
const Footer = () => {
  return (
    <div>
      <div>
        <img src={landscape} className="image" />
      </div>
      <div className="containe">
        <div>
          <p>PropCrowdy</p>
          <h4>FUNDRAISING</h4>
          <small>
            PropCrowdy is a crowd investment platform that empowers Nigerians to
            make smart investments
          </small>
          <div className="links">
            <ul>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </ul>
          </div>
        </div>
        <div>
          <p>About Us</p>
          <ul>
            <li>
              <a>
                <small>Knowledge Base</small>
              </a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Quick Nav</h1>
          <ul>
            <li>
              <a>Terms and Conditions</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Fees and Charges</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
