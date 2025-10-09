import "./projects.css";
import lofound from "../../assets/images/lo-found.png";
import unDO from "../../assets/images/unDO.png";


import data from "./projects.json";
import { Parallax } from "../../ui/parallax";

let imageMap = {
  lofound,
  unDO
};

const projectList = data.Projects.map((ew) => ({
  ...ew,
  src: imageMap[ew.image],
}));

function projects() {
  return (
    <div className="pt-20 md:pt-20 md:pb-20 projects-container pl-6 md:pl-[5em]">




      <Parallax products={projectList} />
    </div>
  );
}




export default projects;
