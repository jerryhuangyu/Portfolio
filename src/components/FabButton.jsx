import React, { useState } from "react";
import i18next from "i18next";

const SubFabButton = ({ icon, handleOnclick, className, isToggle }) => {
  return (
    <div
      onClick={handleOnclick}
      className={`fixed cursor-pointer flex items-center justify-center z-40 bg-orange-200 rounded-full w-10 h-10 right-4 md:right-10 duration-500 bottom-4 md:bottom-10 ${
        isToggle ? className : ""
      }`}
    >
      {icon}
    </div>
  );
};

const FabButton = () => {
  const [toggle, setToggle] = useState(false);
  const changeLangEn = () => i18next.changeLanguage("en");
  const changeLangZh = () => i18next.changeLanguage("zh");

  return (
    <div className=" items-center justify-center fixed bottom-[92px] right-10 text-gray-800 z-50">
      <div
        onClick={() => setToggle(!toggle)}
        className={`fixed bottom-4 right-4 md:bottom-10 md:right-10 flex items-center justify-center w-10 h-10 z-50 rounded-full bg-purple-200 cursor-pointer duration-500 ${
          toggle ? "" : "rotate-[270deg]"
        }`}
      >
        {"+"}
      </div>

      {/* list of function btn */}
      <SubFabButton
        icon={"en"}
        handleOnclick={() => {
          changeLangEn();
          setToggle(!toggle);
        }}
        className={"translate-y-[-45px]"}
        isToggle={toggle}
      />
      <SubFabButton
        icon={"zh"}
        handleOnclick={() => {
          changeLangZh();
          setToggle(!toggle);
        }}
        className={"translate-y-[-90px]"}
        isToggle={toggle}
      />
    </div>
  );
};

export default FabButton;
