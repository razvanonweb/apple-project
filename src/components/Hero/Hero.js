import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../../assets/images/hero-images/1.webp';
import Img2 from '../../assets/images/hero-images/2.webp';
import Img3 from '../../assets/images/hero-images/3.webp';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-xl p-0 slider__section">
      <Slider {...settings}>
        <div>
          <img src={Img1} alt="img1" className="hero-image" />
          <div className="hero-description">
            <h1 className="hero-title">
              Galaxy S21 <span>|</span> S21+ <span>|</span>
              <br></br> S21 Ultra 5g
            </h1>
            <div className="hero-cta">
              <button className="hero-button">
                <a href="/">Afla mai multe</a>
              </button>
              <button className="hero-button">
                <a href="/">Cumpara acum</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Img2} alt="img1" />
          <div className="hero-description">
            <h1 className="hero-title">Precomanda neo</h1>
            <div className="hero-cta">
              <button className="hero-button">
                <a href="/">Afla mai multe</a>
              </button>
              <button className="hero-button">
                <a href="/">Cumpara acum</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Img3} alt="img1" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
