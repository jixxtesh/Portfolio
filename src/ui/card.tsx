import { motion } from "framer-motion";

import Angular from "../assets/images/angular.png";
import Ant_Design from "../assets/images/ant-design.png";
import Express from "../assets/images/express.png";
import TypeScript from "../assets/images/typescript-icon.svg";
import Nodejs from "../assets/images/Nodejs.png";
import NgRx from "../assets/images/ngrx.png";
import React from "../assets/images/react.png";
import React_Redux from "../assets/images/react-redux.png";
import Tailwind_CSS from "../assets/images/tailwind-css.png";
import MongoDB from "../assets/images/mongodb.png";
import Ag_Grid from "../assets/images/ag-grid.png";
import Formly from "../assets/images/formly.png";
import Material_UI from "../assets/images/material-ui.png";
import React_Hook_Forms from "../assets/images/rhf.png";

import { useState } from "react";
import { cn } from "../utils/cn";
import { AnimatedTooltip } from "./animated-tooltip";
type CardProps = {
  src: string;
  title: string;
  category: string;
  url: string;
  desc: string;
  stack: string[];
};

export const Card = ({
  card,
  index,
  layout = false,
  url = "",
  desc = "",
  stack = [],
  onFlip, // <-- added
}: {
  card: CardProps;
  index: number;
  layout?: boolean;
  url?: string;
  desc?: string;
  stack?: string[];
  onFlip?: () => void; // <-- added
}) => {







/*export const Card = ({
  card,
  index,
  layout = false,
  url = "",
  desc = "",
  stack = [],
}: 
{
  card: CardProps;
  index: number;
  layout?: boolean;
  url?: string;
  desc?: string;
  stack?: string[];
}) => {*/


  const techImage = {
    Angular,
    Ag_Grid,
    Ant_Design,
    Express,
    MongoDB,
    React,
    TypeScript,
    Nodejs,
    NgRx,
    React_Redux,
    Tailwind_CSS,
    Formly,
    Material_UI,
    React_Hook_Forms,
  };

  const techStack = card.stack.map((es, index) => ({
    id: index,
    name: es.split("_").join(" "),
    image: techImage[es],
  }));

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
  setFlipped(!isFlipped);
  if (onFlip) onFlip(); // <-- added
};

  
  
  
  
  
  /*const handleFlip = () => {
    setFlipped(!isFlipped);
  };*/







  const openProject = (url) => {
    if (url) {
      window?.open(url, "_blank")?.focus();
    }
  };

  return (
    <>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        whileHover={{
          cursor: "pointer",
          scale: 1.05,
        }}
        style={{
          transformStyle: "preserve-3d",
          transition: "0.8",
          perspective: "1000px",
        }}
        onClick={handleFlip}

className="rounded-3xl bg-transparent dark:bg-neutral-900 
h-[18rem] w-[18rem] md:h-[24rem] md:w-[24rem] 
p-4 m-2 overflow-hidden flex flex-col items-start justify-start relative z-10"



// className="rounded-3xl bg-transparent dark:bg-neutral-900 
// h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem] 
// p-4 m-2 overflow-hidden flex flex-col items-start justify-start relative z-10"
        // className="rounded-3xl bg-transparent dark:bg-neutral-900 h-[25rem] w-[25rem] p-4 m-2 overflow-hidden flex flex-col items-start justify-start relative z-10"


        // className="rounded-3xl bg-transparent dark:bg-neutral-900 h-[25rem] w-[25rem] overflow-hidden flex flex-col items-start justify-start relative z-10"


        // className="rounded-3xl bg-transparent dark:bg-neutral-900 h-[22rem] w-[25rem] md:h-[25rem] md:w-[25rem] xl:[h-30rem] xl:w-[30rem] overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <motion.div
          className={`absolute h-full w-full rounded-3xl bg-transparent dark:bg-neutral-900 flex flex-col items-center justify-center p-4`}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          style={{ transformStyle: "preserve-3d" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
          <div
            className="w-full h-full"
            style={{ backfaceVisibility: "hidden", position: "absolute" }}
          >
            <div className="flex flex-row relative z-40 p-8">
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
              >
                
              </motion.p>
            </div>

            <BlurImage
              src={card.src}
              alt={card.title}
              fill="true"
              //className="object-cover w-full h-full"

              className="object-cover absolute inset-0"
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              position: "absolute",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col justify-between items-center relative z-40 p-8 bg-[#1C3D35] h-full">
              <div className="flex flex-row justify-between items-center z-60">
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
                >
                  {card.title}
                </motion.p>
              </div>
              <motion.div
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-white text-sm md:text-base font-medium w-full [text-wrap:balance] font-sans mt-2"
              >
                {card.desc}
              </motion.div>
              {card?.url ? (
                <div className="relative flex row">
                  <button
                    className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
                    onClick={() => openProject(card.url)}
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="px-8 z-60 py-2 absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>

                    {/* <div className="px-4 z-60 py-1.5 text-sm relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 "> */}
                     <div className="px-2 py-1 text-xs md:px-4 md:py-1.5 md:text-sm z-60 relative flex space-x-2 items-center rounded-full bg-zinc-950 ring-1 ring-white/10">

                      <span>{`Visit`}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                        ></path>
                      </svg>
                    </div>
                  { /* <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span> */}
                  </button>
                </div>
              ) : (
                <></>
              )}
              <div className="relative flex row">
                {/* <AnimatedTooltip items={techStack} /> */}
                {/* <div className="relative flex row scale-90 md:scale-100"> */}
                <div className="relative flex row scale-75 md:scale-90 lg:scale-100">

  <AnimatedTooltip items={techStack} />
</div>

              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "transition duration-300 rounded-3xl",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurdataurl={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
