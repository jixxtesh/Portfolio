import React from "react";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import avatar from "../../assets/images/avatar.png";
import "./Welcome.css";
import { FlipWords } from "../../ui/flip-words";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container h-screen flex flex-col md:flex-row items-center justify-evenly w-full px-6 md:pl-[5em]">
      <div className="md:w-3/5 md:pl-[2em] text-center md:text-left">
        <div className="text-4xl md:text-5xl mb-4 text-white">Hi there,</div>
        <TypewriterEffectSmooth
          words={[
            {
              text: "I am",
              className: "text-white text-5xl md:text-6xl",
            },
            {
              text: "Jitesh",
              className: "text-[#83C3B3] text-6xl md:text-8xl",
            },
          ]}
        />
        <div className="text-3xl md:text-4xl font-bold mt-4 text-white">
          Full-stack Web Developer
        </div>

        <div className="text-xl md:text-2xl mt-2 text-gray-300">
  I craft user experiences with an
  <br className="md:hidden" />
   <b>
  <span className="text-[#83C3B3]"> elegant,</span>
  <span className="text-[#83C3B3]"> seamless,</span>
  <span className="text-[#83C3B3]"> responsive </span>
  <span className="text-[#83C3B3]"> & </span>
  <span className="text-[#83C3B3]"> sophisticated </span>
  </b>
  blend of code and creativity.
</div>
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <img src={avatar} alt="Myself" className="w-4/5 md:w-3/5" />
      </div>
    </div>
  );
};

export default Welcome;
