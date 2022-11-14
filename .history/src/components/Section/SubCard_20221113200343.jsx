import React from "react";
import img1 from "../assets/Group.png";
import img2 from "../assets/Rectangle44.png";
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
        <div style={{ backgroundColor: "#E4FAFF", borderRadius: "12px" }}>
          <div className="texts">
            <h1 style={{ color: "red", width: "412px" }}>Property Developer</h1>
            <p>Information</p>
            <button className="button" style={{ marginTop: "39px" }}>
              Visit Developer Page
            </button>
          </div>
        </div>
        <div style={{ backgroundColor: "#DEE1E2", borderRadius: "12px" }}>
          <div>
            <div className="texts">
              <h1 style={{ color: "red", width: "412px" }}>
                Property Developer
              </h1>
              <p>Information</p>
              <button className="button" style={{ marginTop: "39px" }}>
                Visit Developer Page
              </button>
            </div>
            {/*  */}
            <div>
              <img src={img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
