import React, { useState } from "react";
import i18next from "i18next";

const SubFabButton = ({ icon, handleOnclick, index, isToggle }) => {
  return (
    <div
      onClick={handleOnclick}
      className={`cursor-pointer flex items-center justify-center z-90 bg-orange-200 rounded-full w-10 h-10 duration-500 ${
        isToggle ? "" : `translate-y-[${52 * (index + 1)}px]`
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
    <div className="flex flex-col-reverse items-center justify-center gap-3 fixed bottom-[92px] right-10 text-gray-800">
      <div
        onClick={() => setToggle(!toggle)}
        className={`fixed bottom-10 right-10 flex items-center justify-center w-10 h-10 z-10 rounded-full bg-purple-200 cursor-pointer duration-500 ${
          toggle ? "" : "rotate-[270deg]"
        }`}
      >
        {"+"}
      </div>

      {/* list of function btn */}
      <SubFabButton
        icon={"en"}
        handleOnclick={changeLangEn}
        index={0}
        isToggle={toggle}
      />
      <SubFabButton
        icon={"zh"}
        handleOnclick={changeLangZh}
        index={1}
        isToggle={toggle}
      />
    </div>
  );
};

export default FabButton;
