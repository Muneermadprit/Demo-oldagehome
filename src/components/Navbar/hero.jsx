import React, { useState, useEffect } from 'react';
import image1 from '../../assets/hero-old.jpg';
import image3 from '../../assets/hero-old3.jpg';
import image4 from '../../assets/pulse.png';
import image5 from '../../assets/hero-old5.png';
import signature from '../../assets/signature.png'
import demo from '../../assets/demo.mp4'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './prodect';

function Hero() {
  const [translate, setTranslate] = useState(false);
  const [transform, setTransform] = useState(false);
  const [animateWidth, setAnimateWidth] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslate((prev) => !prev);
      setTransform((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      setAnimateWidth(true);
      setTimeout(() => {
        setAnimateWidth(false);
      }, 8000);

      setTimeout(handleAnimation, 18000);
    };

    handleAnimation();

    return () => {};
  }, []);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setTyping(false);
    }, 4000);

    return () => clearTimeout(typingTimeout);
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 3000,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" overflow-hidden bg-grey-100 flex rounded-b-[300px] bg-red">
      <div className="sm:w-full h-[80vh] sm:h-[500px]  ">
      <video 
                    className="object-cover w-full h-full relative -z-40"
                    autoPlay 
                    controls 
                    muted 
                    loop
                >
                    <source src={demo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

        <img
          src={''}
          className="object-cover w-full h-full relative  "
          alt="Hero Image 1"
        />
        <img
          src={image3}
          className={`object-cover w-full h-full `}
          alt="Hero Image 2"
        />
      </div>

    <div className='absolute -z-10' ><Product/></div>
         
     
      
    </div>
  );
}

export default Hero;
