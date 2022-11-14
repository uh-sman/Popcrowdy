import React from "react";
import "./subcard.css";
const SubCard = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "23px" }}>
        <div style={{ backgroundColor: "#E4FAFF", borderRadius: "12px" }}>
          <div>
            <h1 style={{ color: "red", width: "412px" }}>Property Developer</h1>
            <p>Information</p>
            <button className="button">Visit Developer Page</button>
          </div>
        </div>
        <div style={{ backgroundColor: "#DEE1E2", borderRadius: "12px" }}>
          <div>
            <h1 style={{ color: "red", width: "412px" }}>Property Developer</h1>
            <p>Information</p>
            <button className="button" style={{ marginTop: "39px" }}>
              Visit Developer Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
