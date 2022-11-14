import React from "react";
import img1 from "../assets/Group.png";
import img2 from "../assets/Rectangle44.png";
import group from "../assets/Group2.png";
import "./subcard.css";
const SubCard = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "23px",
          marginLeft: "75px",
          marginTop: "37px",
        }}
      >
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
            <img src={img1} className="box3" />
            <img src={img2} className="box4" />
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
              <button className="button" style={{ marginTop: "39px" }}>
                Visit Developer Page
              </button>
            </div>
            {/*  */}
            <div className="box">
              <img src={img1} className="box1" />
              <img src={img2} className="box2" />
            </div>
          </div>
        </div>
        <div>
          <img src={group} />
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
