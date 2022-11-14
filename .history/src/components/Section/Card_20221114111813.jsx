import React from "react";
import { data } from "./data";
import img from "../assets/Progressbar.png";
import logo from "../assets/WhatsApp 1.png";
import { BsPersonCircle } from "react-icons/bs";
import { TfiArrowCircleRight } from "react-icons/tfi";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div>
        <div className="red">
          <h4>Open</h4>
        </div>
        <div>
          {data.map(({ title, id, amount, link }) => {
            return (
              <div>
                <div>{link}</div>
                <div>
                  <h4>{title}</h4>
                  <h3>{amount}</h3>
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
