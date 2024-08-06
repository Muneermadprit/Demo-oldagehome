import React, { useEffect } from 'react';

import image1 from '../../assets/productimg1.jpg';
import image2 from '../../assets/product2.jpg';
import image3 from '../../assets/product3.jpg';
import image4 from '../../assets/product4.jpg';
import image5 from '../../assets/product5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa6";


function Product() {
  useEffect(() => {
    AOS.init({
        
        offset:100,
        duration: 800,
    erasing:'ease-in-sine',
     delay:100 });
  }, []);

  const productData = [
    {
      id: 1,
      title: "Woman Ethnic",
      src: image1,
      rating: 4.5,
      color: 'red',
      aosdelay: "200"
    },
   
    
  ];

  return (
    <div className=' mb-12  rounded-b-md w-full '>
      
      <div className='container'>
        {/* header section */}
        <div className='text-center max-w-[400px] mx-auto]'>
          
         
        </div>
        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 place-items-center gap-5 sm:w-full sm:h-full sm:ml-[200px] sm:mt-[280px] w-[100px] h-60'>
            {/* card section */}
            {productData.map((data) => (
                <div  data-aos='fade-up' data-aos-delay={data.aosdelay} className='' >
                  <div className=''>
                  <h1 className='absolute  -z-60 sm:ml-40 sm:mt-20 sm:text-[35px]  text-white'>Welcome to<span className='font-extrabold sm:text-white text-[#E72A7c]'> Holistic Care Services</span> 
                 <p className='sm:text-[15px] '> on a mission to make ageing a more enjoyableand rewarding experience for all involved</p> 
                 <div>
                    <button className=' w-60 sm:w-[300px] h-10  bg-white  text-[15px] rounded-full text-gray-500 font-bold'>find home care near you</button>
                    <button className='w-40 sm:w-[300px] h-10 p20 bg-[#E72A7c]  text-[15px] ml-10 rounded-full font-bold'>Join our team</button>
                    </div>
                  </h1>
                 
                  </div>
                  
               <div key={data.id} className=' p-2 w-full grid sm:grid-cols-1 grid-cols-1 ' >
                <div className='  shadow-bulge sm:h-[300px] h:[200px]   w-[900px] object-cover rounded-md  bg-[#006F97]'/>
                
              <p  data-aos='fade-left'className='sm:text-2xl justify-center items-center sm:mt-40 sm:mx-10 font-bold hidden'>Holistic Care Services provides a comprehensive range of care services to those in need in Liverpool & the surrounding areas. We offer supported living services, domiciliary care, domestic care, live-in care, & career opportunities to help those in need achieve their goals.

              </p>
            
               <div>
                </div>
              </div>
              
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
