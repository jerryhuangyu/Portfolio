import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* lefthand side line decorator */}
        <div className="flex flex-col justify-center items-center mt-5 z-10">
          <div className='w-5 h-5 rounded-full bg-blue-out'/>
          <div className="w-1 sm:h-80 h-40 blue-gradient"></div>
        </div>

        {/* introduction */}
        <div className='z-10'>
          <h1 className={`${styles.heroHeadText} text-secondary`}>Hi, I'm <span className='text-blue-out'>Jerry</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I'm a self-taught 
            software engineer.<br className='sm:block hidden' /> With experience in developing
            <Typewriter
              options={{
                strings: ['Web.', 'MR.', 'ROS.'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>

      </div>

      <ComputersCanvas className='z-0'/>

      {/* scrolling button */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
};

export default Hero