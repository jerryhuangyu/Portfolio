import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, CursorBlob } from './components';
import { useRef, useEffect, useState } from "react";
import { Curve } from "three";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
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
          <Navbar isTopOfPage={isTopOfPage} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
