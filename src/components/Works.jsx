import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { github, click } from "../assets";
import { Pages, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

import React from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group [perspective:1000px]"
    >
      <div
        options={{ max: 13, scale: 1, speed: 450 }}
        className="relative flex flex-col justify-between w-[80vw] h-[40vh] min-h-[380px] max-h-[400px] sm:w-[360px] sm:h-[380px] duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]"
      >
        {/* frontface */}
        <div className="absolute w-full h-full rounded-2xl bg-tertiary dark:bg-gray-700 p-5 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] z-40">
          {/* project preview */}
          <img
            src={image}
            alt={name}
            className="w-full h-[230px] object-cover rounded-2xl"
          />

          {/* github */}
          <div className="absolute -inset-1 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:border"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* title and tags */}
          <div className="pt-4 sm:pt-5">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="text-white z-50 font-bold text-[24px] cursor-pointer flex items-center gap-2"
            >
              {name}
              <img src={click} alt="click" className="w-5 h-5" />
            </div>

            <div className="py-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[12px] sm:text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* backface */}
        <div className="absolute inset-0 w-full h-full text-center rounded-2xl dark:bg-black bg-tertiary text-slate-50 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] z-30">
          <div className="flex w-full h-full px-10 items-center justify-center">
            {/* description */}
            <p className="text-secondary text-[14px]">
              {t(`work.cards.${index}`)}
            </p>
            {/* github */}
            <div className="absolute -inset-1 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:border"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            {/* demo */}
            <div className="absolute inset-x-11 -inset-y-1 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:border"
              >
                <img
                  src={click}
                  alt="tap"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = ({ setSelectedPage }) => {
  const { t } = useTranslation();
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(Pages.Work)}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-40`}
    >
      <span className="hash-span" id="work">
        &nbsp;
      </span>

      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My works</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary dark:text-dark-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          {t("work.intro")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Works;
