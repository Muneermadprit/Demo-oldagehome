import React from 'react';
import image1 from'../../assets/friends (1).png'
import image2 from '../../assets/family.png'
import image3 from '../../assets/charity.png'
import Topproducts from './topproducts';

function Friends() {
  return (
    <div>
      <h1 className='sm:mt-[200px] sm:w-full sm:h-[200px] flex justify-center text-sm items-center sm:text-[40px]   font-bold text-gray-500 mr-40'>Why choose Radfield?</h1>
      <div className='grid sm:grid-cols-3 sm:w-full sm:h-[500px] sm:p-20 w-[300px] mr-100 pr-10 ' >
        <div className='flex flex-col items-center sm:text-[25px] text-10 font-bold text-gray-500'>
          <img src={image2} className='w-40 h-40'/>
          We are Family
          <p className='text-sm font-normal p-4'>we are treated as our careers best family and
          we empower them to treate our clients with the same warm and respect</p>
        </div>
        <div className='flex flex-col items-center sm:text-[25px] font-bold text-gray-500'>
        <img src={image1} className='w-40 h-40'/>
          We are on your side
          <p className='text-sm font-normal p-4'>we are treated as our careers best family and
          we empower them to treate our clients with the same warm and respect</p>
        </div>
        <div className='flex flex-col items-center sm:text-[25px] font-bold text-gray-500'>
        <img src={image3} className='w-40 h-40'/>
          We are proud to care
          <p className='text-sm font-normal p-4'>we are treated as our careers best family and
          we empower them to treate our clients with the same warm and respect</p>
        </div>
     
      </div>
    <div className='mr-20'> <Topproducts/> </div>
    </div>
  );
}

export default Friends;
