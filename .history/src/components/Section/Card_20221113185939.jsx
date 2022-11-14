import React from "react";
import { data } from "./data";
import { BsPersonCircle } from "react-icons/bs";
import { TfiArrowCircleRight } from "react-icons/tfi";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div style={{ border: "1px solid gray" }} className="card">
        <div
          className="header"
          title="header"
          style={{
            backgroundColor: "red",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            textAlign: "center",
            height: "75.92px",
          }}
        >
          <p
            style={{
              color: "white",
              marginTop: "25px",
            }}
          >
            Open
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>1,132,550 </h1>
          <small style={{ color: "red" }}>Raised</small>
        </div>
        <div className="rightBody-subcont">
          {data &&
            data.map(({ title, id, amount }) => {
              return (
                <div className="sponsor-cont" key={id}>
                  <div className="sponsor-subcont">
                    <div className="user-img">
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginLeft: "40px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <TfiArrowCircleRight style={{ color: "red" }} />
            <p style={{ color: "red" }}>See More</p>
          </div>
          <div className="rightBodybtns">
            <div className="rightBodybtn1-cont">
              <button className="rightBodybtn1">Invest Now</button>
            </div>

            <div className="rightBodybtn2-cont">
              <button className="rightBodybtn2">Share Project</button>
            </div>
          </div>
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
