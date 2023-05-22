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
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Mechanical Engin"
            subTitle="Niger Delta University (2013 - 2019)"
            result="2.2"
            des="Foundaton in peer communication and world tolerance"
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="Decagon Institute (2022 - 2023)"
            result="4.75/5"
            des="Software Engineering and Leadership Training : Node.js "
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Comprehensive Secondary School Oginigba (2004 - 2010)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Decagon - (2022 - Present)"
            result="Nigeria"
            des="Developed and maintained software solutions for clients. Collaborated with cross-functional teams to gather requirements, design architecture, and implement high-quality code"
          />
            <ResumeCard
              title="fullstack engineer "
              subTitle="Split Technology (2021 - 2022)"
              result="Oman"
              des="Maintaining the company  front-end and back-end web applications,
              Integrating third-party APIs, designing and implementing RESTful
              APIs, writing clean and efficient code, debugging and troubleshooting issues, 
              and ensuring the application's performance, responsiveness, and security
              Developed the entire life cycle of software solutions with team of 5 developers 
              "
            />
          <ResumeCard
            title="Fullstcak Engineer"
            subTitle="inMotion- (2019 - 2021)"
            result="Nigeria"
            des="Integrated third-party APIs by consuming RESTful services, resulting in the development of new features and functionalities that improved the user experience by 15%"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education