import { useRef, useEffect } from "react";

const CursorBlob = () => {
  const blob = useRef(null);

  useEffect(() => {
    // set interval for update blob border shape
    setInterval(() => {
      blob.current.style.borderRadius = `39% 61% 46% 54% / ${Math.floor(Math.random() * 50)}% ${Math.floor(Math.random() * 50)}% ${Math.floor(Math.random() * 50)}% ${Math.floor(Math.random() * 50)}%`;
    }, 1000);

    // when mousemove update blob's position to mouse
    document.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      cursor_blob.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        }, { 
          duration: 1000,
          fill: 'forwards'
        }
      );
    });

    // when scroll update blob's y position with scroll
    document.addEventListener("scroll", (e) => {
      // const { scrollY } = e;
      cursor_blob.animate(
        {
          top: `${window.scrollY+360}px`,
        }, { 
          duration: 7000,
          fill: 'forwards'
        }
      );
    });
    
  });

  return (
    <div
      ref={blob}
      id='cursor_blob'
      className="absolute blob-bg-gradient w-[400px] aspect-square translate-x-[-50%] translate-y-[-50%] rounded-full duration-1000 ease-in-out"
      style={{ borderRadius: "49% 51% 70% 30% / 67% 68% 32% 33%"}}
    >
      
    </div>
  )
}

export default CursorBlob