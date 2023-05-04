import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, Pages } from "../constants";
import { logo, menu, menudark, close, closedark, darkmode, lightmode } from "../assets";

const DarkModeSwitcher = ({ isLightMode, setIsLightMode }) => {
  return (
    <img
      className="w-5 h-5 cursor-pointer rounded-full"
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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 ${narbarBgOpacity}`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto 2xl:px-[120px]">
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
            className="w-7 h-7 object-contain dark:bg-transparent rounded-lg bg-stone-700"
          />
          <p className='text-blue-700 dark:text-blue-300 text-[18px] font-bold cursor-pointer flex px-2 font-["Noto_Sans_TC"]'>
            黃柏瑜 &nbsp;
            <span className="sm:block hidden">| Jerry's Protfolio</span>
          </p>
        </Link>

        {/* menu for screen above sm */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                selectedPage === link.title ? "underline" : ""
              } hover:text-blue-out text-secondary dark:text-blue-300 text-[18px] font-medium cursor-pointer`}
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
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="pr-3">
            <DarkModeSwitcher
              isLightMode={isLightMode}
              setIsLightMode={setIsLightMode}
            />
          </div>

          <img
            src={isLightMode ? menu : menudark}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "right-[-100%]" : "right-0"
            } duration-300 ease-in-out bg-blue-200 dark:bg-dark-primary-300 px-16 pt-[23px]
            fixed top-[0px] h-screen min-w-[60%]`}
          >
            <dir className='relative'>
              <img
              src={isLightMode ? close : closedark}
              alt="menuclose"
              className="w-6 h-6 dark:scale-75 object-contain cursor-pointer
              absolute right-[-36px]"
              onClick={() => setToggle(!toggle)}
              />
            </dir>
            <ul className="list-none flex justify-end items-start flex-1
            flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    selectedPage === link.title
                      ? "text-blue-700 underline"
                      : "text-secondary"
                  } font-poppins flex font-medium cursor-pointer text-[22px] w-full`}
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
