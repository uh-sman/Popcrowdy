import React from "react";
import { data } from "./data";
import { BsPersonCircle } from "react-icons/bs";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div style={{ border: "1px solid gray" }} className="">
        <div title="header">
          <p></p>
        </div>
        <div>
          {data &&
            data.map(({ title, id, amount }) => {
              return (
                <div className="card" key={id}>
                  <li>
                    <BsPersonCircle
                      style={{
                        color: "red",
                        height: "44.099998474121094px",
                        width: " 44.099998474121094px",
                        left: "0.45001220703125px",
                        top: " 0.45001220703125px",
                        borderRadius: "0px",
                      }}
                    />
                    {title}
                  </li>
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
