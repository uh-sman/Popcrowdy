import React from "react";
import image from "../assets/Image-one.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselDemo = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
