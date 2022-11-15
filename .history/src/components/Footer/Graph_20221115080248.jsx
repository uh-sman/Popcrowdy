import React from "react";
import { bar } from "../Section/data";
import { secondbar } from "../Section/data";
import "./graph.css";
const Graph = () => {
  return (
    <div>
      <div className="flex">
        <div>
          {bar.map(({ description, id, subtext }) => {
            return (
              <div>
                <div className="bars">
                  <p className="brown">{description}:</p>
                  <small className="gray">{subtext}</small>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {secondbar.map(({ description, id, subtext }) => {
            return (
              <div>
                <div className="bars">
                  <p className="brown">{description}:</p>
                  <small className="gray">{subtext}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Graph;
