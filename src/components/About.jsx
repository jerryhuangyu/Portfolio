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
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full px-0.5 green-pink-gradient p-[1px] rounded-[20px] shadow-2xl"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary dark:bg-dark-primary dark:bg-opacity-[90%] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
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
      className={`${styles.padding} max-w-7xl mx-auto relative z-30`}
    >
      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary dark:text-dark-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>{t("about.intro.p1")}</p>
        <div>&nbsp;</div>
        <ol>
          <li className="list-disc list-inside">{t("about.intro.l1")}</li>
          <li className="list-disc list-inside">{t("about.intro.l2")}</li>
          <li className="list-disc list-inside">{t("about.intro.l3")}</li>
          <li className="list-disc list-inside">{t("about.intro.l4")}</li>
          <li className="list-disc list-inside">{t("about.intro.l5")}</li>
          <li className="list-disc list-inside">{t("about.intro.l6")}</li>
        </ol>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="text-secondary dark:text-dark-secondary text-[17px] max-w-3xl leading-[30px]">
        <p className="mt-20">{t("about.intro.p2")}</p>
        <div>&nbsp;</div>
        <p>{t("about.intro.p3")}</p>
      </div>
    </motion.section>
  );
};

export default About;
