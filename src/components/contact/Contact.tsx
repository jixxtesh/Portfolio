import { BackgroundBeams } from "../../ui/background-beams";
import github from "../../assets/images/github-mark-white.png";
import mail from "../../assets/images/noun-mail-560844.svg";
import linkedin from "../../assets/images/linkedIn-white.png";
import "./Contact.css";

function Contact() {
  function openSite(type: string) {
    if (type === "linkedin") {
      window
        ?.open("https://www.linkedin.com/in/jitesh-saini-8219a7202/", "_blank")
        ?.focus();
    } else if (type === "github") {
      window?.open("https://github.com/jixxtesh", "_blank")?.focus();
    } else {
      window.location.href = `mailto:jitesh.saini@outlook.com`;
    }
  }

  return (
    <div className="w-full h-full overflow-hidden relative flex flex-col  items-center text-center px-8 md:px-20 py-[10em]">
      <div className="flex flex-col items-center w-full max-w-4xl text-center">
        <div className="text-4xl md:text-6xl font-bold text-[B3]">
          Get in Touch
        </div>
        <div className="mt-20 text-base md:text-xl">
          Thank you for your interest in my projects! Whether you  a design
          project in mind, or some questions, or just want to connect, I would love
          to hear from you. Please feel free to reach out and I'll get back to
          you as soon as possible.
        </div>
        <div className="mt-20 flex z-10 h-20 space-x-4 md:space-x-8">
          <img
            src={mail}
            className="contact-icon w-12 h-12 md:w-16 md:h-16"
            onClick={() => openSite("mail")}
            alt=""
          />
          <img
            src={github}
            className="contact-icon w-12 h-12 md:w-16 md:h-16"
            onClick={() => openSite("github")}
            alt=""
          />
          <img
            src={linkedin}
            className="contact-icon w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"
            onClick={() => openSite("linkedin")}
            alt=""
          />
        </div>
        <div className="mt-12 text-base md:text-lg">
          Living, learning, & leveling up one day at a time.
        </div>
      </div>
      <BackgroundBeams className="absolute" />
    </div>
  );
}

export default Contact;
