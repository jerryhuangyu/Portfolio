import { motion } from "framer-motion";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { HeroModelCanvas } from "./canvas";
import { HackerText } from "./";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[160px] mx-auto flex max-w-7xl flex-row items-start gap-4 sm:top-[190px] md:gap-10`}
      >
        {/* lefthand side line decorator */}
        <div className="z-30 mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-blue-out" />
          <div className="blue-gradient h-40 w-1 sm:h-80"></div>
        </div>

        {/* introduction */}
        <div className="z-30 w-[600px] rounded-xl backdrop-blur-[4px] dark:bg-opacity-[0.01]">
          <HackerText />
          <p className={`${styles.heroSubText} mt-4`}>
            {t("hero.intro1")}
            <br className="hidden sm:block" />
            {t("hero.intro2")}&nbsp;
            <Typed
              className="font-bold text-blue-800 dark:text-primary"
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
      <div className="absolute bottom-20 z-30 flex w-full items-center justify-center sm:bottom-32">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
