import React from "react";
import { scroll } from "./data";
import "./scroll.css";
const Scroll = () => {
  return (
    <div>
      <div className="scrollContainer">
        {scroll.map(({ title, subtext, id }) => {
          return (
            <div key={id} className="texts">
              <h3>{title}</h3>
              <small>{subtext}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scroll;
