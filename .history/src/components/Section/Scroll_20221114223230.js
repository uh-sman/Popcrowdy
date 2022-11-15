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
              <p>{title}</p>
              <small>{subtext}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scroll;
