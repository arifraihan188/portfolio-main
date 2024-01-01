import React from 'react'
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[220px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[160px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>

  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-1 text-secondary text-[15px] max-w-3xl leading-[30px]'
      >
        I am a web develepment enthusiast. I am well-versed at front end frameworks such as React Js. My experience with various backend technologies such as Node.js and MongoDB as well as my knowledge of web development protocols and languages like HTML, CSS, SASS, JavaScript and Typescript have allowed me to develop applications that are robust and reliable. I have worked on multiple projects, creating and maintaining frontend and backend solutions that are secure, performant and scalable. I am familiar with webpack module bundler. Also I am familiar with databases such as MySQL. I am skilled  at cloud technologies such as AWS basics, ECS, Dynamo DB, S3 and Lambda. I am strongly motivated to learn and grow my potential and experience in development. I am happy to take any challenge in web development. Let's work together to bring our ideas to life!
      </motion.p>
      <div className='mt-3 flex flex-wrap gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");