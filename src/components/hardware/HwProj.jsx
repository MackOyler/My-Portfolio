import React from 'react';
import Slider from 'react-slick';
import './hardware.css';
import Nav from '../nav/Nav.jsx';

// Import your images
import pcBack from '../../assets/pcBack.png';
import pcInside from '../../assets/pcInside.png';
import pcInsideBottom from '../../assets/pcInsideBottom.png';
import pcInsideTop from '../../assets/pcInsideTop.png';
import pcSide from '../../assets/pcSide.png';
import pcSideOpen from '../../assets/pcSideOpen.png';
import pcSideOpenAngle from '../../assets/pcSideOpenAngle.png';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'var(--color-primary)', width: '50px', height: '50px' }}
      onClick={onClick}
    >
      &rarr; 
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'var(--color-primary)', width: '50px', height: '50px' }}
      onClick={onClick}
    >
      &larr; 
    </div>
  );
};

const HwProj = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Add your images here
  const imageUrls = [
    pcBack, pcInside, pcInsideBottom, pcInsideTop,
    pcSide, pcSideOpen, pcSideOpenAngle
  ];

  return (
    <div>
      <Nav />
      <h1 id='title'>Hardware Projects</h1>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Hardware Project ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HwProj;
