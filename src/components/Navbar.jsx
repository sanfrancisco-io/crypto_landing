import React, { useState } from 'react';
import navbarArrow from '../assets/nav_arrow.svg';
import { MenuButton } from './BurgerManu';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='container mx-auto flex py-4 justify-between items-center custom_responsive_container'>
      <a
        href={'/'}
        className='flex justify-center items-center font-medium text-[25px] cursor-pointer'
      >
        C
      </a>
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
      <div className='hidden md:flex'>
        <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Navbar;
