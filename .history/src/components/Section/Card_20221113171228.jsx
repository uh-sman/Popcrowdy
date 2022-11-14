import React from "react";
import { data } from "./data";
import { BsPersonCircle } from "react-icons/bs";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div style={{ border: "1px solid gray" }} className="card">
        <div
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Open
          </p>
        </div>
        <div>
          {data &&
            data.map(({ title, id, amount }) => {
              return (
                <div
                  className="list"
                  style={{ marginLeft: "50.45px" }}
                  key={id}
                >
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
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
