import React from "react";
import { data } from "./data";
// import img from "../assets/Progressbar.png";
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
            ({ title, id, amount, date, raise, subtext, goal, image }) => {
              return (
                <div key={id}>
                  <div>
                    <div>
                      <h2 style={{ marginLeft: "51px", marginTop: "20px" }}>
                        {raise} <span className="subtext">{subtext}</span>
                      </h2>
                      <img src={image} className="rectangle" />
                    </div>
                  </div>
                  <div className="card-items">
                    <div>
                      <BsPersonCircle className="image-style" />
                    </div>
                    <div className="">
                      <h4>{title}</h4>
                      <h3 className="border">
                        {amount} <span className="date">{date}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          <p className="seemore">
            <TfiArrowCircleRight />
            <span style={{ marginLeft: "21.05px" }}>See More</span>
          </p>
          <div className="button-class">
            <button className="card-buttons1">Invest Now </button>
            <button className="card-buttons2">Share Project </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
