import React from "react";
import "./hero.css";
import img1 from "../assets/Image-one.png";
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
    </div>
  );
};

export default Hero;
