import React, { useState } from "react";
import i18next from "i18next";

const SubFabButton = ({ icon, handleOnclick, className, isToggle }) => {
  return (
    <div
      onClick={handleOnclick}
      className={`fixed right-4 bottom-4 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-orange-200 duration-500 md:right-10 md:bottom-10 ${
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
    <div className="fixed bottom-[92px] right-10 z-50 items-center justify-center text-gray-800">
      <div
        onClick={() => setToggle(!toggle)}
        className={`fixed bottom-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-purple-200 duration-500 md:bottom-10 md:right-10 ${
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
