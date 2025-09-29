import "./projects.css";
import lo-found from "../../assets/images/lo-found.png";
import unDO from "../../assets/images/unDO.png";


import data from "./projects.json";
import { Parallax } from "../../ui/parallax";

let imageMap = {
  lo-found,
  unDO
};

const projectList = data.Projects.map((ew) => ({
  ...ew,
  src: imageMap[ew.image],
}));

function projects() {
  return (
    // <div className="pt-20 md:pt-20 md:pb-20 projects-container md:pl-[5em]">
    // <div className="pt-20 md:pt-20 md:pb-20 projects-container px-4 md:px-12">
    //<div className="pt-20 md:pt-20 md:pb-20 projects-container px-6 md:px-16 lg:px-24">
    //<div className="relative pt-20 md:pt-20 md:pb-20 projects-container md:pl-[5em]">
    <div className="pt-20 md:pt-20 md:pb-20 projects-container pl-6 md:pl-[5em]">




      <Parallax products={projectList} />
    </div>
  );
}




export default projects;
