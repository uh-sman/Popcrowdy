import React, { useState } from "react";
import "./hero.css";
import img1 from "../assets/Image-one.png";
import img2 from "../assets/Rectangle2.png";
import img3 from "../assets/Rectangle3.png";
import img4 from "../assets/Rectangle4.png";
import img5 from "../assets/Rectangle5.png";
import img6 from "../assets/Rectangle6.png";
import Card from "./Card";
const Hero = () => {
  const [selected, setIsSelected] = useState(false);
  if (selected) {
    // show the current image
    setIsSelected("selected");
  } else {
    console.log("not selected");
  }
  return (
    <div className="hero-container">
      <div className="flexed-card">
        <div>
          <div style={{ marginBottom: "57px" }}>
            <p style={{ color: "red" }}>Hazrat Concept</p>
            <h1 style={{ fontWeight: "900px" }}>
              2 Bedroom Serviced Apartments
            </h1>
          </div>
          <div>
            <img src={img1} />
          </div>
          <div style={{ marginTop: "16px" }}>
            <div className="sub-card">
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />
              <img src={img5} />
              <img src={img6} />
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Hero;
