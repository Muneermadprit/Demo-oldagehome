import React, { useState } from 'react';
import { GiToggles } from 'react-icons/gi';
import Logo from '../../assets/logo.jpg';
import { IoIosSearch } from 'react-icons/io';

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
        <div className='shadow-md bg-grey-50'>
            {/* Upper section */}
            <div className='bg-white flex justify-between items-center'>
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2 container'>
                        <img src={Logo} alt='logo' className='w-[200px]' />
                    </a>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input
                            type='text'
                            placeholder='search'
                            className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-grey-300 px-1 py-1 focus:outline-none focus:border-1 focus:border-primary'
                        />
                        <IoIosSearch className='text-grey-500 group-hover:primary absolute top-1/4 -translate-y-1/2 right-3 justify-items-center mb-10' />
                    </div>

                    {/* Toggle button for mobile menu */}
                    <GiToggles
                        className='sm:hidden w-[50px] h-[50px] cursor-pointer mr-10'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    {/* Desktop buttons */}
                    <div className='hidden sm:flex gap-4'>
                        {/* Example button (repeat as needed) */}
                        <button className='group relative min-h-[50px] w-40 rounded overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full'>
                            <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full'></span>
                            <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white'>Home</span>
                        </button>
                    </div>

                    {/* Desktop buttons */}
                    <div className='hidden sm:flex gap-4'>
                        {/* Example button (repeat as needed) */}
                        <button className='group relative min-h-[50px] w-40 rounded overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full'>
                            <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full'></span>
                            <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white'>About us</span>
                        </button>
                    </div>

                    {/* Desktop buttons */}
                    <div className='hidden sm:flex gap-4'>
                        {/* Example button (repeat as needed) */}
                        <button className='group relative min-h-[50px] w-40 rounded overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full'>
                            <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full'></span>
                            <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white'>Our services</span>
                        </button>
                    </div>

                    {/* Desktop buttons */}
                    <div className='hidden sm:flex gap-4'>
                        {/* Example button (repeat as needed) */}
                        <button className='group relative min-h-[50px] w-40 rounded overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full'>
                            <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full'></span>
                            <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white'>Careers</span>
                        </button>
                    </div>

                    {/* Desktop buttons */}
                    <div className='hidden sm:flex gap-4'>
                        {/* Example button (repeat as needed) */}
                        <button className='group relative min-h-[50px] w-40 rounded overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full'>
                            <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full'></span>
                            <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white'>Contact us</span>
                        </button>
                    </div>
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
        </div>
    );
};

export default Navbar;
