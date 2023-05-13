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
        className="relative flex h-[40vh] max-h-[400px] min-h-[380px] w-[80vw] flex-col justify-between duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-[380px] sm:w-[360px]"
      >
        {/* frontface */}
        <div className="absolute z-40 h-full w-full rounded-2xl bg-tertiary p-5 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] dark:bg-gray-700">
          {/* project preview */}
          <img
            src={image}
            alt={name}
            className="h-[230px] w-full rounded-2xl object-cover"
          />

          {/* github */}
          <div className="card-img_hover absolute -inset-1 m-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full dark:border"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>

          {/* title and tags */}
          <div className="pt-4 sm:pt-5">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="z-50 flex cursor-pointer items-center gap-2 text-[24px] font-bold text-white"
            >
              {name}
              <img src={click} alt="click" className="h-5 w-5" />
            </div>

            <div className="flex flex-wrap gap-2 py-3">
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
        <div className="absolute inset-0 z-30 h-full w-full rounded-2xl bg-tertiary text-center text-slate-50 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-black">
          <div className="flex h-full w-full items-center justify-center px-10">
            {/* description */}
            <p className="text-[14px] text-secondary">
              {t(`work.cards.${index}`)}
            </p>
            {/* github */}
            <div className="card-img_hover absolute -inset-1 m-3 flex justify-end">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full dark:border"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
            {/* demo */}
            <div className="card-img_hover absolute inset-x-11 -inset-y-1 m-3 flex justify-end">
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full dark:border"
              >
                <img
                  src={click}
                  alt="tap"
                  className="h-1/2 w-1/2 object-contain"
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
      initial="show" // due to sm device will disappear, disable enter motion
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-40 mx-auto max-w-7xl`}
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

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3x1 mt-3 text-[17px] leading-[30px] text-secondary dark:text-dark-secondary"
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
