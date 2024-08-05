import React, { useEffect } from 'react';
import banner from '../../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* Image section */}
          <div data-aos='flip-left' className='flex justify-center'>
            <img
              src={banner}
              alt='Banner'
              className='bg-secondary sm:w-[400px] h-[350px] drop-shadow-md object-cover'
            />
          </div>
          {/* Text detail section */}
          <div className='text-center sm:text-left'>
            <h1 className='text-3xl font-bold mb-4'> Buy Branded Prodect Be A Brand</h1>
            <p className='text-lg mb-6'>
              Offer is for few days make your order and grab your brand from worls branded only sh.
            </p>
            <button className='bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
