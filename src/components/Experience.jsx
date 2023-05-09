import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, isLightMode }) => {
  const bgCard = isLightMode ? "#1d1836" : "rgba(0, 0, 0, 0.2)";
  const timelineColor = isLightMode ? "#fff" : "#AEBDCA";
  const timelineBorderRight = isLightMode ? "#232631" : "#AEBDCA";

  return (
    <VerticalTimelineElement
      contentStyle={{ background: bgCard, color: timelineColor }}
      contentArrowStyle={{ borderRight: `7px solid ${timelineBorderRight}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ isLightMode }) => {
  const timelineColor = isLightMode ? "#fff" : "#AEBDCA";

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-30 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id="experience">
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={timelineColor}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isLightMode={isLightMode}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
