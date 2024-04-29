

import { styles } from "../styles";
import { Reveal } from "./Hero_Text";
import { ComputersCanvas } from "./canvas";

import { useAnimation, useInView, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <Reveal>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sami</span>
          </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-indigo-500">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
              I've spent the last 5 years building and scaling software for some
              pretty cool companies. I also teach people to paint online (incase
              you've got an empty canvas layin' around 🎨). Let's connect!
            </p>
          </Reveal>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};


export default Hero;
