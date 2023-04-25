import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary bg-opacity-60 backdrop-blur-md`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto 2xl:px-[120px]">
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-blue-700 text-[18px] font-bold cursor-pointer flex px-2 font-["Noto_Sans_TC"]'>
            黃柏瑜 &nbsp;
            <span className='sm:block hidden'>| Jerry's Protfolio</span>
          </p>
        </Link>

        {/* menu for screen above sm */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-blue-700 underline" : "text-secondary"
              } hover:text-blue-out hover:underline text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* menu for sm screen */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'right-[-100%]' : 'right-0'} duration-300 ease-in-out bg-blue-100 px-16 py-6 fixed top-[76px] h-screen min-w-[70%]`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-blue-700 underline" : "text-secondary"} font-poppins flex font-medium cursor-pointer text-[22px] w-full`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className='w-full'>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar