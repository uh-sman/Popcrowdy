import React, { useState } from "react";
import "./hero.css";
import { Carousel } from "react-responsive-carousel";

import Card from "./Card";
import CarouselDemo from "./Carousel";
const Hero = () => {
  const [selected, setIsSelected] = useState(false);
  const [isSelected, setSelected] = useState(false);
  //    document.getElementById("select");
  if (selected) {
    // show the current image
    console.log("hello");
  } else {
    console.log("not selected");
  }
  return (
    <div className="hero-container">
      <div className="flexed-card">
        <div>
          <CarouselDemo />
        </div>
        <div>
          {" "}
          <Card />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div>
  <div style={{ marginBottom: "57px" }}>
    <p style={{ color: "red" }}>Hazrat Concept</p>
    <h1 style={{ fontWeight: "900px" }}>2 Bedroom Serviced Apartments</h1>
  </div>
  <div id="select" value={selected} onClick={(e) => setIsSelected(!selected)}>
    <img src={img1} />
  </div>
  <div style={{ marginTop: "16px" }}>
    <div className="sub-card"></div>
  </div>
</div>; */
}
