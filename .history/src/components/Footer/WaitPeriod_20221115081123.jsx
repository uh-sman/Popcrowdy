import React from "react";
import Graph from "./Graph";

import "./wait.css";
const WaitPeriod = () => {
  return (
    <div className="contain">
      <div className="sub-container">
        <div>
          <h4>Wait Period Before ROI</h4>
          <h1 className="red">12 Months</h1>
        </div>
        <div>
          <h4>ROI Percentage</h4>
          <h1 className="red-text">20%</h1>
        </div>
      </div>
      <Graph />
    </div>
  );
};

export default WaitPeriod;
