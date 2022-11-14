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
          <h1>Open</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
{
  /* <div className="rightBody-subcont">
  {data &&
    data.map(({ title, id, amount }) => {
      return (
        <div className="sponsor-cont" key={id}>
          <div className="sponsor-subcont">
            <div className="user-img">
              <img src={user} />
            </div>

            <div className="spons-cover">
              <div className="sponsor">Sponsored</div>
              <div className="sponsoramt">{amount}</div>
            </div>

            <div className="month">9 months ago</div>
          </div>

          <div className="line"></div>
        </div>
      );
    })}
</div>;

{
  data &&
    data.map(({ title, id, amount }) => {
      return (
        <div className="list" style={{ marginLeft: "50.45px" }} key={id}>
          <li className="icon">
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "12px",
              borderBottom: "0.3px solid gray",
            }}
          >
            <p>{amount}</p>

            <small title="time">1 month ago</small>
          </div>
        </div>
      );
    });
} */
}
