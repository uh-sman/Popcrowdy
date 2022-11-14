import React from "react";
import "./hero.css";
import img1 from "../assets/Image-one.png";
import img2 from "../assets/Rectangle2.png";
import img3 from "../assets/Rectangle3.png";
import img4 from "../assets/Rectangle4.png";
import img5 from "../assets/Rectangle5.png";
import img6 from "../assets/Rectangle6.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div style={{ marginBottom: "57px" }}>
        <p style={{ color: "red" }}>Hazrat Concept</p>
        <h1 style={{ fontWeight: "900px" }}>2 Bedroom Serviced Apartments</h1>
      </div>
      <div>
        <img src={img1} />
      </div>
      <div style={{ marginTop: "16px" }}></div>
    </div>
  );
};

export default Hero;
