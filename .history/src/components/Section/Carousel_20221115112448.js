import React from "react";
import image from "../assets/Image-one.png";
import img1 from "../assets/Image-one.png";
import img2 from "../assets/Rectangle2.png";
import img3 from "../assets/Rectangle3.png";
import img4 from "../assets/Rectangle4.png";
import img5 from "../assets/Rectangle5.png";
import img6 from "../assets/Rectangle6.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "./carousel.css";
const CarouselDemo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const {
    changeSlide,
    setChangedSlide,
  } = (e) => {
    // const index = style={index:"-1"}
    setChangedSlide(-1);
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselDemo;
