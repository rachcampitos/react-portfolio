import { useState } from "react";
import { Link } from "react-router-dom";

import { HiBars3BottomRight, HiXMark, HiMoon, HiSun } from "react-icons/hi2";

import { useDarkMode } from "../components/DarkModeContext";

const HomePage = ({ scrollToSection }) => {
  const Links = [
    { name: "Home", link: "/react-portfolio/" },
    { name: "Career", link: "career" },
    { name: "Skills", link: "skills" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
  ];
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className=" bg-white px-10 md:px-20 lg:px-40">
        <div className="shadow-md w-full fixed top-0 left-0 z-30">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-gray-900 transition ease-in">
            <div className="cursor-pointer font-slab flex items-center gap-1 text-gray-100">
              <span className="rounded-md text-xl px-3 py-1 bg-cerulean-blue-600">
                R
              </span>
            </div>
            <div className="flex absolute right-14 md:right-10 top-6 cursor-pointer w-7 h-7 dark:text-gray-200 text-gray-700">
              <div
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl mr-4"
              >
                {open ? <HiXMark /> : <HiBars3BottomRight />}
              </div>
              <div>
                {darkMode ? (
                  <HiSun
                    className="w-6 h-6 text-[#FFBB70] cursor-pointer"
                    onClick={() => {
                      toggleDarkMode(toggleDarkMode);
                    }}
                  />
                ) : (
                  <HiMoon
                    className="w-6 h-6 text-[#5BBCFF] cursor-pointer"
                    onClick={() => {
                      toggleDarkMode(toggleDarkMode);
                    }}
                  />
                )}
              </div>
            </div>
            <ul
              className={`md:hidden mt-4 absolute bg-white z-[-1] left-0 w-full dark:bg-gray-800 transition-all duration-500 md:duration-150 ease-in ${
                open ? "top-13" : "top-[-490px]"
              }`}
            >
              {Links.map((link, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="group cursor-pointer px-7 py-5 font-poppins hover:bg-gray-200 dark:hover:bg-gray-700 transition ease-in"
                >
                  <Link
                    to={link.link}
                    className="text-gray-800 dark:text-gray-100 dark:group-hover:text-gray-100 duration-500 dark:text-slate-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
