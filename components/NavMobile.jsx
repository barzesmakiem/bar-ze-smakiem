'use client';
import React, { useState } from 'react';
import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';

import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const NavMobile = ({ containerStyles, iconStyles, linkStyles, showZamowienia }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <RiHomeFill />, path: 'home', name: 'strona główna', offset: -50 },
    { icon: <BiSolidFoodMenu />, path: 'menu', name: 'menu', offset: -70 },
    showZamowienia && {
      icon: <MdShoppingCart />,
      path: 'zamowienia',
      name: 'zamówienia',
      offset: -120,
    },
    { icon: <FaUsers />, path: 'about', name: 'o nas', offset: -150 },
    { icon: <FaEnvelope />, path: 'contact', name: 'kontakt', offset: -100 },
  ].filter(Boolean);

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer outline-none'>
        <RiMenu2Line className='text-3xl text-white transition-all duration-200' />
      </div>

      <aside
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-[#121212] fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className='relative flex flex-col items-center h-full'>
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className='cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-orange flex items-center justify-center'
          >
            <IoCloseOutline />
          </div>

          {/* logo */}
          <div className='mt-16 mb-8'>
            <Image
              src="/logo.png"
              alt="Bar ze Smakiem logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-[120px] md:h-[180px] xl:h-[220px]"
            />
          </div>

          {/* links moved upward by using negative margin */}
          <div className='flex flex-col gap-y-8 mt-100'>
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.path}
                offset={link.offset}
                smooth={false}
                className='flex items-center gap-x-3'
                onClick={() => setIsOpen(false)}
              >
                <div className={`${iconStyles}`}>{link.icon}</div>
                <div className={`${linkStyles}`}>{link.name}</div>
              </ScrollLink>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
