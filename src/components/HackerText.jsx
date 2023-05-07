import { useEffect, useRef, useCallback } from "react";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const HackerText = () => {
  const [t] = useTranslation();
  const hackerTextRef = useRef(null);

  const handleMouseOver = useCallback((e) => {
    let iteration = 0;

    clearInterval(interval);
    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= e.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 5;
    }, 50);
  }, []);

  useEffect(() => {
    const node = hackerTextRef.current;
    node.addEventListener("mouseover", handleMouseOver);
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      clearInterval(intervalRef.current);
    };
  }, [handleMouseOver]);

  return (
    <h1 className={`${styles.heroHeadText} text-secondary dark:text-white`}>
      {t("hero.header")}{" "}
      <span ref={hackerTextRef} data-value="Jerry" className="text-blue-out">
        Jerry
      </span>
    </h1>
  );
};

export default HackerText;
