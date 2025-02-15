import "./Work.css";
import esg from "../../assets/images/esg.png";
import forms from "../../assets/images/forms.png";
import dashboard from "../../assets/images/dashboard.png";
import weather from "../../assets/images/weather.png";
import expensio from "../../assets/images/expensio.png";

import data from "./work.json";
import { Parallax } from "../../ui/parallax";

let imageMap = {
  esg,
  forms,
  dashboard,
  weather,
  expensio,
};

const projects = data.Projects.map((ew) => ({
  ...ew,
  src: imageMap[ew.image],
}));

function Work() {
  return (
    <div className="pt-20 md:pt-20 md:pb-20 work-container md:pl-[5em]">
      <Parallax products={projects} />
    </div>
  );
}

export default Work;
