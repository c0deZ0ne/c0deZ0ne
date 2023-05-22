import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            result="Remote"
            des="Integrated third-party APIs by consuming RESTful services, resulting in the development of new features and functionalities that improved the user experience by 15%"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2021</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Microsoft Inovative Trainer "
            subTitle="Federal Science and Technical College (2019 - 2021)"
            result="Nigera"
            des="The training provided by microsoft suit training for college teachers in order to provide them the digital skills to work in various sectors of the economy or areas of culture of the college."
          />
          <ResumeCard
            title="STEM Teacher and Instructor"
            subTitle="Federal Science and Technical College (2019 - 2021)"
            result="Nigeria"
            des="Provide young student basic STEM/robotics and computer programming skills. controlling the EV3 Mindstorm/Spike and 6 sensors with python and Scratch"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
