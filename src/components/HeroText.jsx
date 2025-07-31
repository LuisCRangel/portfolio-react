import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Web Seguras", "Web Modernas", "Web Escalables"],
    words2 = ["Apps Seguras", "Apps Modernas", "Apps Escalables"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className=" flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hola, Soy Luis
        </motion.h1>
        <div className=" flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Un Desarrolador Web <br /> Dedicado a Crear
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className=" font-black text-white text-6xl "
            />
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className=" flex flex-col space-y-6 md:hidden ">
        <motion.p
          className=" text-4xl font-medium "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hola, Soy Luis
        </motion.p>
        <div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Un Desarrollador Web <br /> Dedicado a Crear
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words2}
              className=" font-bold text-white text-[38px] "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default HeroText;
