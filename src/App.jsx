import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  CursorBlob,
  FabButton,
} from "./components";
import { useRef, useEffect, useState, Suspense } from "react";
import { Curve } from "three";
import { Pages } from "./constants";
import i18next from "i18next";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(
    document.documentElement.classList.contains("dark") ? false : true
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState(Pages.Hero);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(Pages.Hero);
    } else {
      setIsTopOfPage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div className="relative z-0 bg-primary dark:bg-dark-primary overflow-hidden">
          <div className="hidden dark:md:block">
            <CursorBlob />
          </div>
          <div className="bg-[#dbe7f0] dark:bg-dark-primary dark:bg-none bg-gradient-to-tr from-[#dbe7f0] via-[#f0e8d4] to-[#f5efe6] bg-cover bg-no-repeat bg-center">
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isLightMode={isLightMode}
              setIsLightMode={setIsLightMode}
            />
            <Hero />
          </div>
          <About setSelectedPage={setSelectedPage} />
          <Experience isLightMode={isLightMode} />
          <Tech />
          <Works setSelectedPage={setSelectedPage} />
          <Feedbacks />
          <div className="relative z-30">
            <Contact setSelectedPage={setSelectedPage} />
            <StarsCanvas />
          </div>
        </div>
        <FabButton />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
