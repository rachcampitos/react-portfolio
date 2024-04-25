import { AiFillGithub, AiFillDribbbleCircle } from "react-icons/ai";

import { useDarkMode } from "../components/DarkModeContext";
import portfolioItems from "../data/PortfolioData";

const Portfolio = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="py-12">
          <h2 className="font-poppins after:absolute after:left-70 after:top-[72px] after:rounded-md text-gray-800 dark:text-gray-100 text-5xl after:ml-8 md:after:w-40 after:w-20 after:bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-600 after:h-[3px]">
            Portfolio
          </h2>
          <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
            <div className="col-span-12 space-y-2.5">
              <p className="font-poppins dark:text-gray-300 font-thin">
                My portfolio showcases a selection of projects where I have led
                cross-functional efforts, implemented responsive web frameworks,
                and leveraged design patterns to architect scalable and
                maintainable solutions. From designing sleek user interfaces to
                coordinating project planning and execution within agile
                methodologies, each project reflects my commitment to excellence
                and innovation in web development.
              </p>
            </div>
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
            {portfolioItems.map((app, index) => (
              <div
                key={index}
                className="mx-auto max-w-sm rounded-lg bg-gray-200 dark:bg-gray-800 h-full flex flex-col"
              >
                <img className="rounded-t-lg" src={app.img} alt="" />
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {app.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {app.description}
                  </p>
                  <div className="links">
                    <a className="mr-5 text-3xl sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <AiFillGithub />
                    </a>
                    <a className="text-3xl sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <AiFillDribbbleCircle />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
