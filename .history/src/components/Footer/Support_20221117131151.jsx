import React from "react";
// import gr from "../assets/Group.png";
import gr from "../assets/first.png";
// import rect from "../assets/Rectangle44.png";
import rect from "../assets/use.png";
import "./support.css";
const Support = () => {
  return (
    <div className="container">
      <div className="shift">
        <div style={{ color: "white", marginTop: "20px" }}>
          <h2>
            Get all the support you need,
            <br />
            Contact our online agent
          </h2>
          <small className="down">
            Get in touch or create account. We are 24/7 available
          </small>
          <img src={gr} className="top" />
        </div>
        <div className="button-section">
          <button className="button">Contact Us</button>
          <img src={rect} className="bottom" />
        </div>
        <div className="rectangle-container"></div>
      </div>
    </div>
  );
};

export default Support;
