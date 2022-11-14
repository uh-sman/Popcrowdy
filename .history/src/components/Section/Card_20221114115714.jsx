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
        <div className="card-content">
          {data.map(
            ({ title, id, amount, link, date, raise, subtext, goal }) => {
              return (
                <div key={id}>
                  <div>
                    <div>
                      <h2 style={{ marginLeft: "25px" }}>
                        {raise} <span className="subtext">{subtext}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="card-items">
                    <div>
                      <img src={link} />
                    </div>
                    <div>
                      <h4>{title}</h4>
                      <h3>
                        {amount} <span className="date">{date}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
