import React, { useState } from 'react';
import navbarArrow from '../assets/nav_arrow.svg';
import burgerMenu from '../assets/burger.svg';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='container mx-auto flex py-4 justify-between items-center custom_responsive_container'>
      <button>
        <a
          href={'/'}
          className='flex justify-center items-center font-medium text-[25px] cursor-pointer'
        >
          C
        </a>
      </button>
      <ul className='flex gap-x-11 items-center md:hidden'>
        <li>
          <a href='/'>Activities</a>
        </li>
        <li>
          <a href='/'>Technology</a>
        </li>
        <li>
          <a href='/'>R&D</a>
        </li>
        <li>
          <a href='/'>Community</a>
        </li>
        <li>
          <a href='/'>
            <button className='flex justify-center items-center bg-gray-200 py-[15px] px-[20px] text-black rounded-[10px]'>
              <span className='mr-2'>Career</span>
              <img src={navbarArrow} alt='navbarArrow' />
            </button>
          </a>
        </li>
      </ul>
      <div className='cursor-pointer hidden md:flex'>
        <button onClick={() => setOpen(!isOpen)}>
          <img src={burgerMenu} alt='burger' />
        </button>
      </div>
      {isOpen && (
        <div className='fixed left-0 top-0 w-full h-screen  z-10 bg-black'>
          <div className='flex justify-between items-center px-5 py-5'>
            <button>
              <a
                href={'/'}
                className='flex justify-center items-center font-medium text-[25px] cursor-pointer'
              >
                C
              </a>
            </button>
            <div className='cursor-pointer hidden md:flex'>
              <button onClick={() => setOpen(!isOpen)}>
                <img src={burgerMenu} alt='burger' />
              </button>
            </div>
          </div>
          <ul className='flex gap-x-11 items-center flex-col h-full  uppercase text-[20px]'>
            <li className='mb-14 mt-10'>
              <a href='/'>Activities</a>
            </li>
            <li className='mb-14'>
              <a href='/'>Technology</a>
            </li>
            <li className='mb-14'>
              <a href='/'>R&D</a>
            </li>
            <li className='mb-14'>
              <a href='/'>Community</a>
            </li>
            <li className='mb-14'>
              <a href='/'>
                <button className='flex justify-center items-center bg-gray-200 py-[15px] px-[20px] text-black rounded-[10px]'>
                  <span className='mr-2'>Career</span>
                  <img src={navbarArrow} alt='navbarArrow' />
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
