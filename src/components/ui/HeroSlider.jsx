import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";
import heroFirstImage from "../../assets/3255395.jpg";
import heroSecondImage from "../../assets/59335.jpg";
const images = [heroFirstImage, heroSecondImage];

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 5,
    fade: true,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
    unslick: true,
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
