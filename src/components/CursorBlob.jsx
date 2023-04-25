import { useRef, useEffect } from "react";

const CursorBlob = () => {
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
  })

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      cursor_blob.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        }, { 
          duration: 6000,
          fill: 'forwards'
        }
      );
    });
  });

  return (
    <div 
      id='cursor_blob'
      className="absolute blob-bg-gradient w-[700px] aspect-square translate-x-[-50%] translate-y-[-50%] rounded-full"
    >
      
    </div>
  )
}

export default CursorBlob