import { useRef, useEffect } from "react";

const CursorBlob = () => {
  const blob = useRef(null);

  useEffect(() => {
    // set interval for update blob border shape
    setInterval(() => {
      blob.current.style.borderRadius = `
                                          ${Math.floor(Math.random() * 100)}%
                                          ${Math.floor(Math.random() * 100)}%
                                          ${Math.floor(Math.random() * 100)}%
                                          ${Math.floor(Math.random() * 100)}%`;
      blob.current.style.opacity = `${Math.floor(Math.random() * 30 + 30)}%`;
    }, 2000);

    // when mousemove update blob's position to mouse
    document.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      cursor_blob.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        },
        {
          duration: 2000,
          fill: "forwards",
        }
      );
    });

    // when scroll update blob's y position with scroll
    document.addEventListener("scroll", (e) => {
      // const { scrollY } = e;
      cursor_blob.animate(
        {
          top: `${window.scrollY + 360}px`,
        },
        {
          duration: 7000,
          fill: "forwards",
        }
      );
    });
  });

  return (
    <>
      <div className="fixed top-0 z-10 h-screen w-screen bg-black bg-opacity-[.15] blur-xl backdrop-blur-3xl"></div>
      <div
        ref={blob}
        id="cursor_blob"
        className="blob-bg-gradient absolute z-0 aspect-square w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-full opacity-50 duration-[2000ms] ease-linear"
        style={{
          borderRadius: "49% 51% 70% 30% / 67% 68% 32% 33%",
          opacity: "50%",
        }}
      ></div>
    </>
  );
};

export default CursorBlob;
