import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 13, scale: 1, speed: 450 }}
        className='bg-tertiary dark:bg-gray-700 dark:bg-opacity-30 dark:hover:bg-opacity-80 duration-200 p-5 sm:w-[360px] sm:h-[530px] rounded-2xl flex flex-col justify-between'
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="text-white font-bold text-[24px] cursor-pointer"
            >
              {name}
            </div>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ setSelectedPage }) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(Pages.Work)}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-30`}
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
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
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
