import React from "react";
import img1 from "../assets/Group.png";
import img2 from "../assets/Rectangle44.png";
import gr from "../assets/card.png";
import first from "../assets/white.png";
import group from "../assets/Group2.png";
import "./subcard.css";
const SubCard = () => {
  return (
    <div className="subcard-container">
      <div className="subcard">
        <div
          style={{
            backgroundColor: "#E4FAFF",
            borderRadius: "15px",
            height: "162px",
          }}
        >
          <div className="texts">
            <h4 style={{ color: "red", width: "412px" }}>Property Developer</h4>
            <p>Information</p>
            <button className="button" style={{ marginTop: "39px" }}>
              Visit Developer Page
            </button>
          </div>
          <div className="box">
            <img src={first} className="box1" />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#DEE1E2",
            borderRadius: "15px",
            height: "162px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div className="texts">
              <h4 style={{ color: "red", width: "412px" }}>
                Property Developer
              </h4>
              <p>Information</p>
              <button className="button-subcard" style={{ marginTop: "39px" }}>
                Visit Developer Page
              </button>
            </div>
            {/*  */}
            <div className="box-gray">
              <img src={gr} className="box2" />
            </div>
          </div>
        </div>
        <div className="group">
          <img src={group} />
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
