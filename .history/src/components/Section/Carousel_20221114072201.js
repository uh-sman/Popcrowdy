import React from "react";
import image from "../assets/Image-one.png";
import img1 from "../assets/Image-one.png";
import img2 from "../assets/Rectangle2.png";
import img3 from "../assets/Rectangle3.png";
import img4 from "../assets/Rectangle4.png";
import img5 from "../assets/Rectangle5.png";
import img6 from "../assets/Rectangle6.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carousel.css";
const CarouselDemo = () => {
  const {
    changeSlide,
    setChangedSlide,
  } = (e) => {
    // const index = style={index:"-1"}
    setChangedSlide(-1);
  };
  return (
    <div>
      <CarouselProvider
      //   onClickItem={changeSlide}
      >
        <Slider>
          <Slide index={0}>{image}</Slide>
          <Slide index={1}>{image}</Slide>
          <Slide index={2}>{image}</Slide>
          <Slide index={3}>{image}</Slide>
          <Slide index={4}>{image}</Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default CarouselDemo;
