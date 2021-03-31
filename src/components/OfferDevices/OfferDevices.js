import React from 'react';
import Slider from 'react-slick';
import Img3 from '../../assets/images/offer-devices/2_IM_A52-LTE_Product-KV_PC_743x418.jpg';
import Img4 from '../../assets/images/offer-devices/2_IM_A72_Product-KV_PC_743x418.webp';
import Img1 from "../../assets/images/offer-devices/girl.jpeg";
import Img2 from "../../assets/images/offer-devices/twohpones.jpg";
import Img5 from "../../assets/images/offer-devices/buds.jpg";
import Img6 from "../../assets/images/offer-devices/tvmare.jpg";
import Img7 from "../../assets/images/offer-devices/tvparte.png";
import Img8 from "../../assets/images/offer-devices/pictura.jpg";
import Img9 from "../../assets/images/offer-devices/altapictura.png";
import Img10 from "../../assets/images/offer-devices/tvalttv.webp";
import Img11 from "../../assets/images/offer-devices/frigider.png";
import Img12 from "../../assets/images/offer-devices/masinaspalat.png";
import Img13 from "../../assets/images/offer-devices/cuptor.png";
import Img14 from "../../assets/images/offer-devices/ceplmeasta.png";
import Img15 from "../../assets/images/offer-devices/purificator.png";


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
          <img className="offerdevices-img" src={Img1} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img2} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img3} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img4} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img5} alt="img" />
        </div>
      </Slider>

      <h1 className="offer-title">TV {'&'} AV</h1>
      <Slider {...settings} className="container-xl offerdevices__slider2">
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img6} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img7} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img8} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img9} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img10} alt="img" />
        </div>
      </Slider>

      <h1 className="offer-title">Electrocasnice</h1>
      <Slider {...settings} className="container-xl offerdevices__slider3">
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img11} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img12} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img13} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img14} alt="img" />
        </div>
        <div className="offerdevices__box">
          <img className="offerdevices-img" src={Img15} alt="img" />
        </div>
      </Slider>

      <h1 className="offer-title">Produse recomandate</h1>
      <Slider {...settings} className="container-xl offerdevices__slider3">
        <div className="img-pap row">
          <div className="img-big col-md">
            <img src={Img1} className="offerdevices-img3" alt="" />
          </div>
          <div className="col-md">
            <div className="row">
              <div className="col-6">
                <img src={Img1} className="offerdevices-img2" alt="" />
              </div>
              <div className="col-6">
                <img src={Img1} className="offerdevices-img2" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={Img1} className="offerdevices-img2" alt="" />
              </div>
              <div className="col-6">
                <img src={Img1} className="offerdevices-img2" alt="" />
              </div>
            </div>
          </div>

        </div>
      </Slider>
    </div>
  );
};

export default OfferDevices;
