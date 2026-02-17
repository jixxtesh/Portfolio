import { useState } from "react";
import "./NavMenu.css";
import pdf from "../../assets/JiteshSaini_Resume.pdf";

function NavMenu({ setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (value = "", state = false) => {
    if (value?.toLowerCase() === "resume") {
      window?.open(pdf, "_blank")?.focus();
    } else {
      setActive(value);
      setIsOpen(state);
    }
  };

  const navItems = ["Home", "About", "Projects", "Contact", "Resume"];

  return (
    <div className="relative md:hidden">
      {isOpen ? (
        <div className="flex justify-center items-center">
          <button
            className=" close-btn top-[75%] bg-[#1c3d35] fixed z-50 rounded-full flex items-center justify-center w-[13vw] h-[13vw] p-[2vw] focus:outline-none shadow-lg transform translate-y-full transition duration-1000"
            onClick={() => toggleMenu("", false)}
          >
            <svg
              className={`transform transition-transform  text-white ${
                isOpen ? "rotate-60" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                className="opacity-100"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={() => toggleMenu("", true)}
        >
          <svg
            className={`transform transition-transform  text-white ${
              isOpen ? "rotate-60" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
              className="opacity-100"
            />
          </svg>
        </button>
      )}

      <div
        className={`menu-list-container fixed top-0 left-0 h-[70%] w-full z-20 bg-[#1c3d35] opacity-95 shadow-lg transform transition-transform duration-1000 ${
          isOpen ? "translate-x-0" : "-translate-x-full -translate-y-full"
        }`}
      >
        <ul className="mt-16 h-screen">
          {navItems.map((ei, index) => {
            return (
              <li
                key={index}
                className="menu-item"
                onClick={() => toggleMenu(ei)}
              >
                {ei}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
