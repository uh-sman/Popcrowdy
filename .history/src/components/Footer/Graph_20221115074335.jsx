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
                <h4 className="brown">
                  {description}
                  <li className="gray">{subtext}</li>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graph;
