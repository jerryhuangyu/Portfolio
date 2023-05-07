import { motion } from "framer-motion";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { HeroModelCanvas } from "./canvas";
import { HackerText } from "./";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[160px] sm:top-[190px] max-w-7xl mx-auto flex flex-row items-start gap-4 md:gap-10`}
      >
        {/* lefthand side line decorator */}
        <div className="flex flex-col justify-center items-center mt-5 z-30">
          <div className="w-5 h-5 rounded-full bg-blue-out" />
          <div className="w-1 sm:h-80 h-40 blue-gradient"></div>
        </div>

        {/* introduction */}
        <div className="z-30 backdrop-blur-[4px] rounded-xl w-[600px] dark:bg-opacity-[0.01]">
          <HackerText />
          <p className={`${styles.heroSubText} mt-4`}>
            {t("hero.intro1")}
            <br className="sm:block hidden" /> {t("hero.intro2")}&nbsp;
            <Typed
              className="text-blue-800 dark:text-primary font-bold"
              strings={["Web.", "MR.", "ROS."]}
              typeSpeed={180}
              backSpeed={110}
              loop
            />
          </p>
        </div>
      </div>

      <HeroModelCanvas />

      {/* scrolling button */}
      <div className="absolute sm:bottom-32 bottom-20 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
