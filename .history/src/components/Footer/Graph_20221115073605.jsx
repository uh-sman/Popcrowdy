import React from "react";
import { bar } from "../Section/data";
import "./graph.css";
const Graph = () => {
  return (
    <div>
      <div>
        {bar.map(({ description, id, subtext }) => {
          return (
            <div>
              <div className="bars">
                <h4>{description}</h4>
                <li>{subtext}</li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graph;
