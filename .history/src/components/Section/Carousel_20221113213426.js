import React from "react";
import image from "../assets/Image-one.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousel = () => {
  return (
    <Carousel>
      <div>
        <img src={image} />
      </div>
    </Carousel>
  );
};

export default Carousel;
