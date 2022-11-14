import React, { useState } from "react";
import "./hero.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/Image-one.png";
import img2 from "../assets/Rectangle2.png";
import img3 from "../assets/Rectangle3.png";
import img4 from "../assets/Rectangle4.png";
import img5 from "../assets/Rectangle5.png";
import img6 from "../assets/Rectangle6.png";
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
        <CarouselDemo />
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Hero;
