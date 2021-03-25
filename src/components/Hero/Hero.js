import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../../assets/images/hero-images/1.webp';
import Img1_mobile from '../../assets/images/hero-images/1-mobile.webp';
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
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease',
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '300px',
          height: '23px',
        }}
      ></div>
    ),
  };

  return (
    <div className="container-xl p-0">
      <Slider {...settings} className="slider__section">
        <div className="slider__box">
          <div className="hero-image">
            <img src={Img1_mobile} alt="img1" id="img2" />
            <img src={Img1} alt="img1" id="img1" />
          </div>
          <div className="hero-description">
            <h1 className="hero-title secondary-text">
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
        <div className="slider__box">
          <div className="hero-image">
            <img src={Img2} alt="img1" />
          </div>
          <div className="hero-description">
            <h1 className="hero-title primary-text">Precomanda neo</h1>
            <p className="hero-subtitle primary-text">
              Primesti un soundbad HW-Q60T
            </p>
            <div className="hero-cta">
              <button className="hero-button-2">
                <a href="/">Precomanda acum</a>
              </button>
            </div>
          </div>
        </div>
        <div className="slider__box">
          <div className="hero-image">
            <img src={Img3} alt="img1" />
          </div>
          <div className="hero-description-3 flex-center">
            <h1 className="hero-title secondary-text">QuickDrive™</h1>
            <p className="hero-subtitle secondary-text">
              Spala complet in jumatate de timp
            </p>
            <div className="hero-cta flex-center">
              <button className="hero-button">
                <a href="/">Descopera</a>
              </button>
              <button className="hero-button">
                <a href="/">Cumpara acum</a>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
