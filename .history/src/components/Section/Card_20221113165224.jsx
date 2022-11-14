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
                <div className="" style={{ marginLeft: "50.45px" }} key={id}>
                  <li className="icon">{title}</li>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <p>{amount}</p>

                    <small title="time">1 month ago</small>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
