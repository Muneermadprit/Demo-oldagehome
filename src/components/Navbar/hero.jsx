import React, { useState, useEffect } from 'react';
import image1 from '../../assets/hero-old.jpg';
import image3 from '../../assets/hero-old3.jpg';
import image4 from '../../assets/pulse.png';
import image5 from '../../assets/hero-old5.png';
import signature from '../../assets/signature.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className="relative overflow-hidden bg-grey-100 flex justify-center items-center">
      <Slider {...sliderSettings} className="w-full h-[60vh] sm:h-[700px] ">
        <img
          src={image1}
          className="object-cover w-full h-full"
          alt="Hero Image 1"
        />
        <img
          src={image3}
          className={`object-cover w-full h-full `}
          alt="Hero Image 2"
        />
      </Slider>

      <div className="absolute inset-0">
        <div className="h-[250px] sm:h-[700px] w-[300px] sm:w-[700px] bg-red-950/50 absolute top-1/4 left-0 rounded-3xl -rotate-45 -z-10"></div>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4">
            <div className="order-1 sm:order-1 h-auto sm:h-[500px]" data-aos="zoom-in">
              <Slider {...sliderSettings}>
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left ">
                  <div className="w-full h-auto flex items-center justify-center">
                    <h2
                      className="relative border-solid animate-wiggle bg-white iteration-once sm:mt-40 sm:h-[500px] sm:text-2xl  p2 text-red-950 font-bold"
                      style={{
                        borderLeftWidth: '20px',
                        position: 'relative',
                        padding: '10px',
                      }}
                    >
                      "Aging is not lost youth but a new stage of opportunity and strength." — Betty Friedan
                      <br />
                      "We are always the same age inside." — Gertrude Stein
                      <br/>
                      "Age is an issue of mind over matter. If you don’t mind, it doesn’t matter." – Mark Twain
<br/>
"Old age is like everything else. To make a success of it, you’ve got to start young." – Theodore Roosevelt
                     
                     <br/>
                     <br/>
                     <br/>
                     <span className='text-base sm:w-[600] '>
                     We have to build     The second shedule of your life
                     <img src={signature} className='w-[200px]'/>
                     </span>
                     
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          height: '100%',
                          width: '2px',
                          backgroundColor: '#22c55e',
                          overflow: 'hidden',
                          animation: 'letter 2s ease-in-out',
                        }}
                      />
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
                  <img src={image4} className="w-60 sm:w-80 mx-auto animate-pulse" alt="Slide Image 2 " />
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"></h1>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">Caring for those in neede in <span className='text-blue-500'>Liverpool</span>berond</h1>
                  <p className="text-sm sm:text-base font-bold ">
                    Limited time offer! Grab your favorite items now.
                  </p>
                 
                </div>
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
                  <img src={image5} className="w-60 sm:w-80 mx-auto" alt="Slide Image 3" />
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"></h1>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">Offering Care and Assistance to the Vulnerable in <span className='text-blue-500'>Liverpool</span></h1>
                  
                </div>
              </Slider>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Hero;
