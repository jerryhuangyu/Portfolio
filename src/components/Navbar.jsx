import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, Pages } from "../constants";
import {
  logo,
  menu,
  menudark,
  close,
  closedark,
  darkmode,
  lightmode,
} from "../assets";

const DarkModeSwitcher = ({ isLightMode, setIsLightMode }) => {
  return (
    <img
      className="h-5 w-5 cursor-pointer rounded-full"
      alt="mode"
      onClick={() => {
        setIsLightMode(!isLightMode);
        if (isLightMode) {
          // console.log("set to dark");
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
        } else {
          // console.log("set to light");
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
        }
      }}
      src={isLightMode ? lightmode : darkmode}
    />
  );
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  isLightMode,
  setIsLightMode,
}) => {
  const [toggle, setToggle] = useState(false);
  const narbarBgOpacity = isTopOfPage
    ? "bg-opacity-0 dark:backdrop-blur-lg"
    : "bg-opacity-60 dark:bg-dark-primary bg-primary backdrop-blur-md";

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 flex w-full items-center py-5 ${narbarBgOpacity}`}
    >
      <div className="max-w-7x1 mx-auto flex w-full items-center justify-between 2xl:px-[120px]">
        <Link
          to="/"
          className="flex gap-2"
          onClick={() => {
            setSelectedPage(Pages.Hero);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-7 w-7 rounded-lg bg-stone-700 object-contain dark:bg-transparent"
          />
          <p className='flex cursor-pointer px-2 font-["Noto_Sans_TC"] text-[18px] font-bold text-blue-700 dark:text-blue-300'>
            黃柏瑜 &nbsp;
            <span className="hidden sm:block">| Jerry's Protfolio</span>
          </p>
        </Link>

        {/* menu for screen above sm */}
        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                selectedPage === link.title ? "underline" : ""
              } cursor-pointer text-[18px] font-medium text-secondary hover:text-blue-out dark:text-blue-300`}
              onClick={() => {
                setSelectedPage(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <DarkModeSwitcher
            setIsLightMode={setIsLightMode}
            isLightMode={isLightMode}
          />
        </ul>

        {/* menu for sm screen */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <div className="pr-3">
            <DarkModeSwitcher
              isLightMode={isLightMode}
              setIsLightMode={setIsLightMode}
            />
          </div>

          <img
            src={isLightMode ? menu : menudark}
            alt="menu"
            className="h-8 w-8 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "right-[-100%]" : "right-0"
            } fixed top-[0px] h-screen min-w-[60%] bg-blue-200 px-16
            pt-[23px] duration-300 ease-in-out dark:bg-dark-primary-300`}
          >
            <dir className="relative">
              <img
                src={isLightMode ? close : closedark}
                alt="menuclose"
                className="absolute right-[-36px] h-6 w-6 cursor-pointer
              object-contain dark:scale-75"
                onClick={() => setToggle(!toggle)}
              />
            </dir>
            <ul
              className="mt-10 flex flex-1 list-none flex-col
            items-start justify-end gap-6"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    selectedPage === link.title
                      ? "text-blue-700 underline"
                      : "text-secondary"
                  } font-poppins flex w-full cursor-pointer text-[22px] font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setSelectedPage(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="w-full">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
