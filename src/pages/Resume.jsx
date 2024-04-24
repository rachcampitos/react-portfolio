import { useEffect, useState } from "react";
import {
  PiCertificate,
  PiCodeBlock,
  PiCalendarBlankDuotone,
} from "react-icons/pi";

import { useDarkMode } from "../components/DarkModeContext";

const Resume = () => {
  const { darkMode } = useDarkMode();

  const [education, setEducation] = useState(() => {
    return localStorage.getItem("education") === "true";
  });
  const [experience, setExperience] = useState(() => {
    return localStorage.getItem("experience") === "true";
  });

  useEffect(() => {
    localStorage.setItem("education", education);
  }, [education]);
  useEffect(() => {
    localStorage.setItem("experience", experience);
  }, [experience]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="py-12">
          <h2 className="font-poppins after:absolute after:left-70 after:top-[72px] after:rounded-md dark:text-gray-100 text-5xl after:ml-8 md:after:w-40 after:w-20 after:bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-600 after:h-[3px]">
            Resume
          </h2>
          <div className="flex my-8 justify-start">
            <button
              onClick={() => {
                setEducation(!education), setExperience(false);
              }}
              className={`flex text-lg md:text-2xl mr-4 md:mr-20 group p-4 rounded-md transition ease-in ${
                education
                  ? "bg-cerulean-blue-600 text-gray-100"
                  : `${
                      darkMode ? "animation-btn-dark" : "animation-btn"
                    } text-gray-500`
              }  dark:text-gray-300 hover:text-gray-100 hover:bg-cerulean-blue-600`}
            >
              <PiCertificate
                className={`text-cerulean-blue-600 text-2xl md:text-2xl mr-2 relative top-1 ${
                  education ? "icon-active" : ""
                } group-hover:text-cerulean-blue-400`}
              />{" "}
              Education
            </button>
            <button
              onClick={() => {
                setExperience(!experience), setEducation(false);
              }}
              className={`flex text-lg md:text-2xl group p-4 rounded-md transition ease-in duration-300 ${
                experience
                  ? "bg-cerulean-blue-600 text-gray-100"
                  : `${
                      darkMode ? "animation-btn-dark" : "animation-btn"
                    } text-gray-500`
              } dark:text-gray-300 hover:bg-cerulean-blue-600 hover:text-gray-100`}
            >
              <PiCodeBlock
                className={`text-cerulean-blue-600 text-2xl mr-2 relative top-1 ${
                  experience ? "icon-active" : ""
                } group-hover:text-cerulean-blue-300`}
              />{" "}
              Experience
            </button>
          </div>
          <div
            className={`${
              education ? "block" : "hidden"
            } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6`}
          >
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                2017 - 2020
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Computer Technician
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Peru - Cibertec High Technological Institute
              </p>
            </div>
          </div>
          <div
            className={`${
              experience ? "block" : "hidden"
            } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]`}
          >
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                January 2023 – Present
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Web UI Developer, Ssr
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Globant - IT and Software Development Company
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                September 2020 – December 2022
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Web UI Developer, Jr Advanced
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Globant - IT and Software Development Company
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                May 2020 – September 2020
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Web UI Developer, Jr
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Globant - IT and Software Development Company
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                February 2020 – May 2020
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Engineer 1
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Belatrix Software - Peru
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 py-4 pl-5 pr-3 space-y-2 rounded-lg">
              <span className="text-tiny text-gray-500 dark:text-[#b7b7b7] flex">
                <PiCalendarBlankDuotone
                  className={`text-2xl mr-2 ${
                    darkMode
                      ? "text-cerulean-blue-400"
                      : "text-cerulean-blue-600"
                  }`}
                />{" "}
                September 2019 - February 2020
              </span>
              <h3 className="text-xl text-gray-900 dark:text-gray-200">
                Intern Engineer
              </h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Belatrix Software - Peru
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
