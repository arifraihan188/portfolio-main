import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Frameworks, tools and languages.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img
              src={technology.icon}
              alt="source"
            // className='md:h-[300px] h-[300px] w-full h-full flex justify-center items-center'
            />
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");