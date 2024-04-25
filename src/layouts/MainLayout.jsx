import HomePage from "../pages/HomePage";
import React, { useEffect, useRef } from "react";
import raul from "../assets/images/raul.png";
import resume from "../assets/files/Resume.pdf";
import { Link, useLocation, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineContacts,
  AiOutlineProfile,
  AiOutlineAppstore,
  AiFillHome,
  AiFillFileText,
  AiFillContacts,
  AiFillProfile,
  AiFillAppstore,
} from "react-icons/ai";
import {
  FaPhone,
  FaLocationDot,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import { useDarkMode } from "../components/DarkModeContext";

const MainLayout = () => {
  const outletRef = useRef();

  const location = useLocation();

  const handleScrollToAbout = () => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const HomeLink = {
    name: "Home",
    link: "/react-portfolio/",
    img: AiOutlineHome,
    img2: AiFillHome,
  };

  const Links = [
    {
      name: "Career",
      link: "career",
      img: AiOutlineProfile,
      img2: AiFillProfile,
    },
    {
      name: "Skills",
      link: "skills",
      img: AiOutlineFileText,
      img2: AiFillFileText,
    },
    {
      name: "Portfolio",
      link: "portfolio",
      img: AiOutlineAppstore,
      img2: AiFillAppstore,
    },
    {
      name: "Contact",
      link: "contact",
      img: AiOutlineContacts,
      img2: AiFillContacts,
    },
  ];
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <HomePage scrollToSection={handleScrollToAbout} />
        <ToastContainer
          toastClassName={darkMode ? "darkToast" : "lightToast"}
        />
        <div className="dark:bg-gray-800 lg:pt-[135px] md:px-10 px-4">
          <div className="mx-auto container grid grid-cols-12 md:gap-10 justify-between">
            <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky">
              <div className="w-full pt-1 mb-6 lg:mb-0 mx-auto relative bg-gray-100 text-center dark:bg-gray-900 px-6 rounded-[20px] mt-[120px] lg:mt-0 ">
                <div className="mt-10 relative mx-auto md:mx-auto md:mt-10 bg-gradient-to-b from-carnation-400 to-hit-pink-300 rounded-full w-64 h-64 overflow-hidden">
                  <img
                    src={raul}
                    alt=""
                    className="object-fill relative bottom-20"
                  />
                </div>
                <div className="pb-8">
                  <h1 className="mt-6 mb-1 text-3xl font-semibold dark:text-white font-poppins">
                    Raul Campos
                  </h1>
                  <h3 className="bg-gray-200 font-poppins mb-4 text-gray-500 inline-block dark:bg-gray-800 px-5 py-1.5 rounded-lg dark:text-gray-300 ">
                    Web UI Developer
                  </h3>
                  <div className="flex justify-center space-x-3">
                    <a href="https://github.com/rachcampitos" target="_blank">
                      <AiFillGithub className="text-cerulean-blue-600 text-3xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/raul-campos/"
                      target="_blank"
                    >
                      <AiFillLinkedin className="text-cerulean-blue-600 text-3xl" />
                    </a>
                    <a href="https://dribbble.com/" target="_blank">
                      <AiFillDribbbleCircle className="text-cerulean-blue-600 text-3xl" />
                    </a>
                  </div>
                  <div className="p-7 rounded-md mt-7 bg-gray-200 dark:bg-gray-800">
                    <div className="flex py-2.5 border-b border-gray-100 dark:border-[#3D3A3A]">
                      <FaPhone className="text-cerulean-blue-600 text-xl relative top-2" />
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-gray-500 dark:text-gray-300 font-poppins">
                          Phone
                        </p>
                        <p className="dark:text-white text-gray-600 font-poppins">
                          +51 939175392
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5 border-b border-gray-100 dark:border-[#3D3A3A]">
                      <FaLocationDot className="text-cerulean-blue-600 text-xl relative top-2" />
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-gray-500 dark:text-gray-300 font-poppins">
                          Location
                        </p>
                        <p className="dark:text-white text-gray-600 font-poppins">
                          Lima, Peru
                        </p>
                      </div>
                    </div>
                    <div className="flex py-2.5">
                      <FaEnvelope className="text-cerulean-blue-600 text-xl relative top-2" />
                      <div className="text-left ml-2.5">
                        <p className="text-xs text-gray-500 dark:text-gray-300 font-poppins">
                          Mail
                        </p>
                        <p className="dark:text-white text-gray-600 font-poppins">
                          raulo87@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={resume}
                    download
                    className="w-full flex justify-center items-center mx-auto bg-cerulean-blue-600 duration-200 transition ease-linear hover:bg-cerulean-blue-700 px-8 py-3 text-lg text-cerulean-blue-50 rounded-md mt-6"
                  >
                    {" "}
                    <FaDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 ">
              <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-gray-100 dark:bg-gray-900 ">
                <nav className="hidden lg:block">
                  <ul className="flex">
                    <Link
                      to={HomeLink.link}
                      className={`group text-xs w-full h-20 rounded-md cursor-pointer font-poppins bg-gray-200 mx-2.5 text-xtiny justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:bg-gray-800 hover:text-cerulean-blue-50 dark:hover:text-gray-200 hover:bg-cerulean-blue-600 dark:hover:bg-cerulean-blue-600 ${
                        location.pathname === `/react-portfolio/`
                          ? "btn-active lg:dark:text-gray-100 text-white transition ease-in"
                          : "text-gray-500 dark:text-gray-100 "
                      }`}
                    >
                      {location.pathname === `/react-portfolio/`
                        ? React.createElement(HomeLink.img2, {
                            className: `text-2xl mb-1 icon-active`,
                          })
                        : React.createElement(HomeLink.img, {
                            className: `text-2xl mb-1 group-hover:text-cerulean-blue-300 text-cerulean-blue-400`,
                          })}
                      {HomeLink.name}
                    </Link>
                    {Links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.link}
                        className={`group text-xs w-full h-20 rounded-md cursor-pointer font-poppins bg-gray-200 mx-2.5 text-xtiny justify-center flex flex-col items-center transition-all duration-300 ease-in-out dark:bg-gray-800 hover:text-cerulean-blue-50 dark:hover:text-gray-200 hover:bg-cerulean-blue-600 dark:hover:bg-cerulean-blue-600 ${
                          location.pathname === `/react-portfolio/${link.link}`
                            ? "btn-active lg:dark:text-gray-100 text-white transition ease-in"
                            : "text-gray-500 dark:text-gray-100 "
                        }`}
                      >
                        {location.pathname === `/react-portfolio/${link.link}`
                          ? React.createElement(link.img2, {
                              className: `text-2xl mb-1 icon-active`,
                            })
                          : React.createElement(link.img, {
                              className: `text-2xl mb-1 group-hover:text-cerulean-blue-300 text-cerulean-blue-400`,
                            })}
                        {link.name}
                      </Link>
                    ))}
                  </ul>
                </nav>
              </header>
              <div className="rounded-2xl bg-gray-100 dark:bg-gray-900 my-16">
                <div data-aos="fade-in" id="outlet" ref={outletRef}>
                  <Outlet />
                  <footer className="overflow-hidden rounded-b-2xl bg-gray-300 dark:bg-gray-950">
                    <div className="container">
                      <p className="text-center py-6 text-gray-500 dark:text-gray-200 ">
                        © 2024 All Rights Reserved by Raul Campos
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
