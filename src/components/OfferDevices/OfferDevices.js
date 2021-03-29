import React from 'react';
import Slider from 'react-slick';
import Img1 from '../../assets/images/offer-devices/2_IM_A52-LTE_Product-KV_PC_743x418.jpg';
import Img2 from '../../assets/images/offer-devices/2_IM_A72_Product-KV_PC_743x418.webp';

const OfferDevices = () => {
  function NextArrow(props) {
    const { style } = props;
    return <div style={{ display: 'none' }} />;
  }
  function PrevArrow(props) {
    const { style } = props;
    return <div style={{ display: 'none' }} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '260px',
          height: '40px',
          position: 'absolute',
          top: '-30px',
          bottom: '0',
          zIndex: '50',
        }}
      ></div>
    ),
  };

  return (
    <div>
      <h1 className="offer-title">Telefoane, Tablete, Wearables</h1>
      <Slider {...settings} className="container-xl offerdevices__slider">
        <div className="offerdevices__box">
          <img src={Img1} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img src={Img2} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img src={Img2} alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default OfferDevices;
