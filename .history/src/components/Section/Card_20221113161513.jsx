import React from "react";
import { data } from "./data";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div style={{ border: "1px solid gray" }}>
        <div title="header"></div>
        <div>
          {data &&
            data.map(({ title, id, amount }) => {
              return (
                <div className="card">
                  <li>{title}</li>
                  <p>{amount}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
