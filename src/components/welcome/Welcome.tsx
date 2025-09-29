import React from "react";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import avatar from "../../assets/images/avatar.png";
import "./Welcome.css";
// import { FlipWords } from "../../ui/flip-words";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container h-screen flex flex-col md:flex-row items-center justify-evenly w-full px-6 md:pl-[5em]">
     
     
     
     <div className="md:w-3/5 md:pl-[2em] flex flex-col items-center md:items-start text-center md:text-left">

     
     
     
     {/*
      <div className="md:w-3/5 md:pl-[2em] text-center md:text-left">
*/}




        <div className="text-4xl md:text-5xl mb-4 text-white">Hi there,</div>
        <TypewriterEffectSmooth
          words={[
            {
              text: "I am",
              className: "text-white text-5xl md:text-6xl",
            },
            {
              text: "\u00A0Jitesh",
              className: "text-[#83C3B3] text-6xl md:text-8xl",
            },
          ]}
        />
        <div className="text-3xl md:text-4xl font-bold mt-4 text-white">
          Full-stack Web Developer
        </div>

        <div className="text-xl md:text-2xl mt-2 text-gray-300">
  I design and develop 
  <br className="md:hidden" />
   <b>
  <span className="text-[#83C3B3]"> smooth,</span>
  <span className="text-[#83C3B3]"> smart,</span>
  <span className="text-[#83C3B3]"> & </span>
  <span className="text-[#83C3B3]"> scalable interfaces </span>
  </b>
  that users love to interact with.
</div>
      </div>


      
      <div className="flex justify-center mt-8 md:mt-0">
        <img
  src={avatar}
  alt="Myself"
  className="w-11/12 md:w-3/5"
/>

        {/* <img src={avatar} alt="Myself" className="w-4/5 md:w-3/5" />  */}
       {/* <img src={avatar} alt="Myself" className="w-2/3 md:w-3/5 max-w-[250px] md:max-w-none" /> */}


      </div>
    </div>
  );
};

export default Welcome;
