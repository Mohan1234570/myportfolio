import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-10 w-full h-[750px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="B Tech in Mechanical Engineering"
            subTitle="Siddhartha Institute of Engineering and Technology (2018 - 2022)"
            result="6.49"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="MPC - Intermediate & 12th"
            subTitle="Ushodaya Junior College (2016 - 2018)"
            result="74.4%/100"
            des="Intermediate education is tertiary education , also called post-secondary education."
          />
          <ResumeCard
            title="High School Education SSC"
            subTitle="Srinivasa High School (2006 - 2016)"
            result="8.3/10"
            des="School education or primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}
      
      
    </motion.div>
  );
}

export default Education