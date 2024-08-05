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
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center max-w-[600px] mx-auto'>
          
         
        </div>
        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 place-items-center gap-5 sm:w-full h-full'>
            {/* card section */}
            {productData.map((data) => (
                <div  data-aos='fade-up' data-aos-delay={data.aosdelay} className='w-full' >
                  <div>
                    
                  </div>
               <div key={data.id} className=' p-2 w-full grid sm:grid-cols-2 grid-cols-1 ' >
                <img src={data.src} className='  shadow-bulge sm:h-[600px] h:[500px]   w-full object-cover rounded-md ' alt={data.title} />
               
              <p  data-aos='fade-left'className='sm:text-2xl justify-center items-center sm:mt-40 sm:mx-10 font-bold'>Holistic Care Services provides a comprehensive range of care services to those in need in Liverpool & the surrounding areas. We offer supported living services, domiciliary care, domestic care, live-in care, & career opportunities to help those in need achieve their goals.
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
