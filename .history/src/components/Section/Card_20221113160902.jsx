import React from "react";
import { data } from "./data";
const Card = () => {
  return (
    <div>
      <div style={{ border: "1px solid gray" }}>
        <div title="header"></div>
        <div>
          {data &&
            data.map(({ title, id, amount }) => {
              return (
                <div>
                  <li>{title}</li>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
