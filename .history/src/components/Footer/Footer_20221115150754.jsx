import React from "react";
import "./footer.css";
import landscape from "../assets/landscape.png";
const Footer = () => {
  return (
    <div>
      <div>
        <img src={landscape} className="image" />
      </div>
      <div>
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
