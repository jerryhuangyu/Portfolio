import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { Pages, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { staggerContainer } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full z-20">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full px-0.5 green-pink-gradient p-[1px] rounded-[20px] shadow-2xl"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary dark:bg-dark-primary dark:bg-opacity-[90%] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = ({ setSelectedPage }) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(Pages.About)}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25}}
      className={`${styles.padding} max-w-7xl mx-auto relative`}
    >
      <span className='hash-span' id='about'>
          &nbsp;
      </span>

      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary dark:text-dark-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate, dolorum, molestiae hic in, harum nihil deleniti asperiores aliquam minima cumque illum corporis nam maiores quo illo consequatur quasi pariatur provident totam repellat aliquid nisi sed cum. Atque quidem quo, temporibus eum suscipit quis molestias autem. Quod eius deserunt quis!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </motion.section>
  )
}

export default About