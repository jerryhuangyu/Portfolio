import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, CursorBlob } from './components';
import { useRef, useEffect, useState } from "react";
import { Curve } from "three";
import { Pages } from "./constants";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState(Pages.Hero);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(Pages.Hero);
    } else {
      setIsTopOfPage(false);
    }
  }

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="hidden md:block">
          <CursorBlob />
        </div>
        <div className="hero-bg-gradient bg-cover bg-no-repeat bg-center">
          <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Hero />
        </div>
        <About setSelectedPage={setSelectedPage} />
        <Experience />
        <Tech />
        <Works setSelectedPage={setSelectedPage} />
        <Feedbacks />
        <div className="relative z-0">
          <Contact setSelectedPage={setSelectedPage} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
