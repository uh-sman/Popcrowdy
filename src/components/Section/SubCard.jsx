import React from "react";
import img1 from "../assets/Group.png";
import img2 from "../assets/Rectangle44.png";
import gr from "../assets/form.png";
import first from "../assets/white.png";
import group from "../assets/Group2.png";
import "./subcard.css";
const SubCard = () => {
  return (
    <div className="subcard-container">
      <div className="subcard">
        <div
          className="cards"
          style={{
            backgroundColor: "#E4FAFF",
            borderRadius: "15px",
            height: "162px",
          }}
        >
          <div className="texts">
            <h4 style={{ color: "red", width: "412px" }}>Property Developer</h4>
            <p>Information</p>
            <button className="button-subcard" style={{ marginTop: "39px" }}>
              Visit Developer Page
            </button>
            <img src={gr} className="box1" />
          </div>
          <div className="box"></div>
        </div>
        <div
          className="cards"
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
              <img src={first} className="box2" />
            </div>
            {/*  */}
            <div className="box-gray"></div>
          </div>
        </div>
        <div className="group">
          <img src={group} className="group-image" />
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
