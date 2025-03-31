'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from './ui/button';

const Header = ({ showZamowienia }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
         active ? 'bg-[#121212] py-4' : 'bg-none py-8'
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className='container mx-auto'>
        {/* logo, nav, btn */}
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Image
            src="/logo2.png"
            alt="Bar ze Smakiem logo"
            width={100} // any non-zero placeholder value
            height={24} // matches h-6
            className="h-6 w-auto"
            priority
          />
          {/* desktop nav */}
          <Nav
            containerStyles='hidden xl:flex gap-x-12 text-white'
            linkStyles='capitalize'
            showZamowienia={showZamowienia}
          />


          {/* spacer or button */}
          <div className="hidden xl:block w-[120px]"></div>

          {/* mobile nav */}
          <NavMobile
            containerStyles='xl:hidden'
            iconStyles='text-3xl'
            linkStyles='uppercase'
            showZamowienia={showZamowienia}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
