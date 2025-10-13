"use client";
// import React, { useEffect, useState } from "react";
import { LampContainer } from "../../ui/lamp";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  const about = `A passionate and innovative full-stack developer.`;
  const secondary = `With a degree in Electronics and Communication Engineering, I offer the perfect blend of analytical precision and technical expertise.`;

  return (
    <div className="w-full flex justify-center items-center h-full md:pl-[5em]">
      <div className="flex flex-col md:flex-row items-center w-full md:mt-0">
        <div className="md:w-1/2 w-full mt-12 md:mt-0 flex justify-center">
          <LampContainer className="w-full">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="mt-[-25em] md:mt-[-3vh] xl:mt-[-10vh] 2xl:mt-[-20vh] bg-gradient-to-br from-gray-600 to-black bg-clip-text text-center text-transparent"
            >

<span className="text-xl text-white">
               <b> C++ <br/>
                Javascript &nbsp; | &nbsp; React <br/>
                 HTML &nbsp; | &nbsp; CSS &nbsp; | &nbsp; Nodejs &nbsp; | &nbsp; TypeScript <br />
                SQL &nbsp; | &nbsp; MongoDB</b>
              </span>




              
            </motion.h1>
          </LampContainer>
        </div>
        <div className="flex items-center md:w-[45%] h-full flex-wrap md:mt-0 text-center md:text-left p-10 md:pl-[2em] mb-[2em] md:mb-0">
          <div className="text-6xl mb-[5rem] font-bold text-[#83C3B3] text-center w-full md:pr-[2em]">
            About Me
          </div>
          <div className="text-white text-xl">
            
              {about}
              <br /> <br />
              {secondary}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
