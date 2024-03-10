import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { learns } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const LearnCard = ({ learn }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={learn.date}
        iconStyle={{ background: learn.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={learn.icon}
              alt={learn.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{learn.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {learn.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {learn.points.map((point, index) => (
            <li
              key={`learn-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const Learn = () => {  
    return (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
              What I have done so far
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
              Certificate.
            </h2>
          </motion.div>
    
          <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {learns.map((learn, index) => (
                <LearnCard
                  key={`learn-${index}`}
                  learn={learn}
                />
              ))}
            </VerticalTimeline>
          </div>
        </>
      );
};

export default SectionWrapper(Learn, "work");