import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <p>img 1</p>
        </div>
        <div>
          <p>img 2</p>
        </div>
        <div>
          <p>img 3</p>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
