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
                <div>
                  <h4 className="brown">{description}</h4>
                  <li className="gray">{subtext}</li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graph;
