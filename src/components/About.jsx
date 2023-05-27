import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Translation, useTranslation } from "react-i18next";

import { styles } from "../styles";
import { Pages, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[155px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient min-h-[180px] w-full rounded-[20px] p-[1px] px-0.5 shadow-2xl"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="flex h-[180px] flex-col items-center justify-evenly gap-3 rounded-[20px] bg-tertiary py-5 px-12 dark:bg-dark-primary dark:bg-opacity-[90%]"
        >
          <img src={icon} alt={title} className="h-14 w-14 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ setSelectedPage }) => {
  const { t } = useTranslation();
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(Pages.About)}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-30 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary dark:text-dark-secondary"
      >
        <p>{t("about.intro.p1")}</p>
        <div className="my-16 sm:flex sm:flex-wrap grid grid-cols-2 gap-3 sm:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <ol>
          <li className="list-inside list-disc">{t("about.intro.l1")}</li>
          <li className="list-inside list-disc">{t("about.intro.l2")}</li>
          <li className="list-inside list-disc">{t("about.intro.l3")}</li>
          <li className="list-inside list-disc">{t("about.intro.l4")}</li>
          <li className="list-inside list-disc">{t("about.intro.l5")}</li>
          <li className="list-inside list-disc">{t("about.intro.l6")}</li>
        </ol>
      </motion.div>

      <div className="max-w-3xl text-[17px] leading-[30px] text-secondary dark:text-dark-secondary">
        <p className="my-12">{t("about.intro.p2")}</p>
        <p>{t("about.intro.p3")}</p>
      </div>
    </motion.section>
  );
};

export default About;
