import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import animateDark from "../assets/animations/dark-mode.json";

import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

import { useDarkMode } from "../components/DarkModeContext";

const HomePage = () => {
  const Links = [
    { name: "Home", link: "/react-portfolio" },
    { name: "Resume", link: "resume" },
    { name: "Services", link: "services" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
  ];
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const darkRef = useRef();

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
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 dark:text-gray-200 text-gray-700"
            >
              {open ? <HiXMark /> : <HiBars3BottomRight />}
            </div>
            <ul
              className={`md:hidden mt-4 absolute bg-white z-[-1] left-0 w-full dark:bg-gray-800 transition-all duration-500 md:duration-150 ease-in ${
                open ? "top-12" : "top-[-490px]"
              }`}
            >
              {Links.map((link, index) => (
                <li
                  key={index}
                  onClick={() => setOpen(!open)}
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
              <li className="group px-7 py-5 font-poppins dark:hover:bg-gray-600 transition ease-in">
                <Lottie
                  lottieRef={darkRef}
                  animationData={animateDark}
                  className="w-14 cursor-pointer md:ml-6"
                  loop={false}
                  autoplay={false}
                  onClick={() => {
                    toggleDarkMode(toggleDarkMode);
                    darkRef.current.setSpeed(3);
                    !darkMode
                      ? darkRef.current.playSegments([35, 200], true)
                      : darkRef.current.playSegments([300, 480], true);
                    setOpen(!open);
                  }}
                />
              </li>
            </ul>
            <Lottie
              lottieRef={darkRef}
              animationData={animateDark}
              className="w-14 cursor-pointer md:ml-6 md:block hidden"
              loop={false}
              autoplay={false}
              onClick={() => {
                toggleDarkMode(toggleDarkMode);
                darkRef.current.setSpeed(3);
                !darkMode
                  ? darkRef.current.playSegments([35, 200], true)
                  : darkRef.current.playSegments([300, 480], true);
                setOpen(!open);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
