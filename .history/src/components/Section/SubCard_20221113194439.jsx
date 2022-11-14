import React from "react";

const SubCard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#E4FAFF" }}>
          <div>
            <h1 style={{ color: "red", width: "412px" }}>Property Developer</h1>
            <p>Information</p>
            <button className="button">Visit Developer Page</button>
          </div>
        </div>
        <div style={{ backgroundColor: "#DEE1E2" }}>
          <div>
            <h1 style={{ color: "red", width: "412px", borderRadius: "12px" }}>
              Property Developer
            </h1>
            <p>Information</p>
            <button className="button">Visit Developer Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
// height: "162px";
