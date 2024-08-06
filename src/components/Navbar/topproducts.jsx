import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/hero-old.jpg'
import image2 from '../../assets/hero-old2.jpeg'
import image3 from '../../assets/hero-old3.jpg'
import image4 from '../../assets/shirt4.png'
import image5 from '../../assets/shirt5.png'


function Topproducts() {
    const topprodect = [
        {
            id:1,
            src:image1,
            tittle:'More Details',
           
        },
        {
            id:1,
            src:image2,
            tittle:'More Details',
           
        },
        {
            id:1,
            src:image3,
            tittle:'More Details.',
           
        },
       
    ]
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-center  max-w-[400px] mx-auto mr-20'>
          <p data-aos='fade-up' data-aos-delay="200" className='text-sm text-primary'>
            
          </p>
          <h1 data-aos='fade-up' data-aos-delay="200" className='text-3xl font-bold'>
            
          </h1>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-10 place-items-center mr-10 '>
        {topprodect.map((data, index) => (
  <div
    key={data.id}
    data-aos={index % 2 === 0 ? 'zoom-left' : 'zoom-right'}
    data-aos-delay='300'
    className='w-full max-w-xs sm:max-w-sm md:max-w-md gap-6 rounded-2xl bg-white relative shadow-xl p-6 flex flex-col items-center transition-colors translate-x-4 duration-1200 group hover:bg-black/80'
  >
    <img 
      src={data.src} 
      className='sm:w-[700px]  rounded-xl w-[200px] h-auto mb-4 object-cover block mx-auto transform transition-transform duration-300 group-hover:scale-105 ' 
      alt={`Product ${data.id}`} 
    />
    <p className='bg-gray-100  rounded-xl'>{data.tittle}</p>
  </div>
))}

</div>

      </div>
    </div>
  );
}

export default Topproducts;
