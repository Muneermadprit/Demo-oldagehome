import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscription() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className='w-full h-[230px] bg-secondary backdrop-blur-sm py-10 mb-20' >
      <div className='container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between'>
        <div className='space-y-6 max-w-xl mx-auto'>
        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold mb-4 sm:mb-0 text-white'>
          Get in toch with us
        </h1>
        <input
          data-aos='fade-up'
          type='text'
          placeholder='Enter your E-mail'
          className=' w-full sm:w-auto  p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
        />
        
        <button   data-aos='fade-up' className='mx-10 p-2 w-[200px]   hover:bg-gray-400 rounded-xl bg-white' >Subscribe Now</button>
        </div>
       
      </div>
    </div>
  );
}

export default Subscription;
