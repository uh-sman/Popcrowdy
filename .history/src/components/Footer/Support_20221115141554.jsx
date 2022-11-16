import React from "react";
import gr from "../assets/Group.png";
import rect from "../assets/Rectangle44.png";
import "./support.css";
const Support = () => {
  return (
    <div className="container">
      <div className="shift">
        <div style={{ color: "white" }}>
          <h2>
            Get all the support you need,
            <br />
            Contact our online agent
          </h2>
          <small className="down">
            Get in touch or create account. We are 24/7 available
          </small>
        </div>
        <div>
          <button className="button">Contact Us</button>
        </div>
        <div>
          <img src={gr} className="top" />
          <img src={rect} className="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Support;
