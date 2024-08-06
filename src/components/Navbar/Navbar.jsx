import React, { useState } from 'react';
import { GiToggles } from 'react-icons/gi';
import Logo from '../../assets/logo.jpg';
import { IoIosSearch } from 'react-icons/io';
import navimg1 from '../../assets/navimage1.jpg';
import navimg2 from '../../assets/navimage2.jpg';
import navimg3 from '../../assets/navimage3.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menu = [
        { id: 1, name: 'Home', link: '#' },
        { id: 2, name: 'About', link: '#' },
        { id: 3, name: 'OtherServices', link: '#' },
        { id: 4, name: 'Contact Us', link: '#' },
        { id: 5, name: 'Careers', link: '#' }
    ];

    return (
        <div className='shadow-md bg-grey-50 sm:w-full w-[300px]'>
            {/* Upper section */}
            <div className='bg-white flex justify-between items-center p-4'>
                <div className='flex items-center gap-4'>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex items-center gap-2'>
                        <img src={Logo} alt='logo' className='sm:w-[200px] w-20' />
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative group hidden sm:block sm:mr-[200px]'>
                        <input
                            type='text'
                            placeholder='search'
                            className='w-[200px] sm:w-[300px] group-hover:w-[300px] sm:h-[50px] transition-all duration-300 rounded-full border border-grey-300 px-4 py-2 focus:outline-none focus:border-primary bg-gray-300'
                        />
                        <IoIosSearch className='text-grey-500 absolute top-1/2 right-3 transform -translate-y-1/2' />
                    </div>
                    <BsTelephone  />
                    <div className='hidden sm:block text-sm font-bold '>
                        
                        <p className='hover:bg-red-500 cursor-pointer p-2 rounded'>
                            We're here for you<br/>
                            <span className='text-2xl'>0330 175 8756</span><br/>
                            National Office
                        </p>
                    </div>
                    {/* Toggle button for mobile menu */}
                    <GiToggles
                        className='sm:hidden w-[30px] h-[30px] cursor-pointer mr-10'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='sm:hidden bg-white border-t border-grey-300'>
                    {menu.map(item => (
                        <a
                            key={item.id}
                            href={item.link}
                            className='block p-4 border-b hover:bg-grey-100'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}

            {/* Second part */}
            <div className='w-full h-14 bg-[#006F97] flex justify-center items-center sm:flex hidden'>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans'>
                        Care Services
                    </button>
                    <div className='absolute top-full left-0 w-[1200px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <div className='p-8 grid sm:grid-cols-4 gap-4'>
                              
                        <div className='flex flex-col items-center'>

<h1 className='text-center mt-2 font-bold text-2xl text-white'>Our Crae Services</h1>
<p className='text-center mt-2  text-white'>We provide practical support to people live thier normal life</p>

</div>


                            <div className='flex flex-col items-center'>

                                <img src={navimg1} alt='Care Service 1  ' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Visiting care</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={navimg2} alt='Care Service 2 text-white' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Living care</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={navimg3} alt='Care Service 3' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Day care</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        About Us
                    </button>
                    <div className='absolute top-full left-0 w-[250px] h-[200px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <ul className='p-4'>
                            <li><a href='#' className='block p-2 hover:border-gray-400 hover:text-black'>
                                <div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>Our team members</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'><div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>Acreditation</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'><div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>Be there movement</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                        </ul>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Advice and Services
                    </button>
                    <div className='absolute top-full left-0 w-[300px] h-[250px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <ul className='p-4'>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'><div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>News</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'><div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>Guides</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'><div className='w-full h-12 border-b-2 border-red-black pt-4 flex justify-between items-center'>
            <span className='text-white hover:text-black'>FAQ</span>
            <IoIosArrowForward className='text-white' />
        </div></a></li>
                        </ul>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Success Stories
                    </button>
                 
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Join Our Services
                    </button>
                    
                </div>
                <div className='relative group'>
                    <button className='px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Find Care
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;

