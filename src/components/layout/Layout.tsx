import { useEffect, useState } from "react";
import { TracingBeam } from "../../ui/tracing-beam";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/Navbar";
import Welcome from "../welcome/Welcome";
import Contact from "../contact/Contact";
import Projects from "../projects/projects";
import NavMenu from "../navMenu/NavMenu";

function Layout() {
  const [active, setActive] = useState<string | null>("Home");

  useEffect(() => {
    if (active) {
      const a = active.toLowerCase();
      const id = document.getElementById(a as string);
      id?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setActive(null);
  }, [active]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is for the bigger screens */}
      <Navbar active={active} setActive={setActive} />
      {/* Nav menu is for mobile devices */}
      <NavMenu setActive={setActive} />
      <TracingBeam className="">
        <div id="home" className="w-full h-full md:h-screen overflow-x-hidden">
          <Welcome />
        </div>
        <div id="about" className="w-full h-full md:h-screen">
          <AboutMe />
        </div>
        <div id="projects" className="w-full h-full">
          <Projects />
        </div>
        <div id="contact" className="w-full h-full">
          <Contact />
        </div>
      </TracingBeam>
    </div>
  );
}

export default Layout;
