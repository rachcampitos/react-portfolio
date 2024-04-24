import Lottie from "lottie-react";
import { useRef } from "react";

import { useDarkMode } from "../components/DarkModeContext";

import webUI from "../assets/animations/web-ui.json";
import responsive from "../assets/animations/responsive.json";
import design from "../assets/animations/design.json";

const Services = () => {
  const { darkMode } = useDarkMode();

  const webRef = useRef();
  const responsiveRef = useRef();
  const designRef = useRef();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="py-12">
          <h2 className="font-poppins after:absolute after:left-70 after:top-[72px] after:rounded-md dark:text-gray-100 text-5xl after:ml-8 md:after:w-40 after:w-20 after:bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-600 after:h-[3px]">
            Services
          </h2>
          <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
            <div className="col-span-12 space-y-2.5">
              <p className="font-poppins dark:text-gray-300 font-thin">
                As a web developer, I specialize in crafting intuitive and
                visually appealing user interfaces (UIs) for web applications. I
                ensure that these UIs are responsive, adapting seamlessly to
                various screen sizes and devices. Additionally, I implement
                established design patterns to create reusable components,
                following best practices for consistency and maintainability
              </p>
            </div>
          </div>
          <div className="my-8 overflow-hidden flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row">
            <div className="bg-[#0F0112] max-[400px]:w-[385px] md:w-[535px] md:rounded-l-lg md:rounded-tr-none rounded-t-lg overflow-hidden">
              <Lottie
                lottieRef={webRef}
                animationData={webUI}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="flex flex-col justify-start p-6 bg-gray-200 dark:bg-gray-800 rounded-b-lg md:rounded-r-md md:rounded-bl-none">
              <h5 className="mb-2 text-xl font-medium text-gray-800 dark:text-gray-300">
                Web UI Development
              </h5>
              <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                Services in designing and maintaining user interfaces for
                websites and applications. This could include expertise in HTML,
                CSS, JavaScript, Angular, Ionic, and other relevant
                technologies.
              </p>
            </div>
          </div>
          <div className="my-8 overflow-hidden flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row">
            <div className="max-[400px]:w-[385px] md:w-[535px] md:rounded-l-lg md:rounded-tr-none rounded-t-lg md:hidden">
              <Lottie
                lottieRef={responsiveRef}
                animationData={responsive}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="flex flex-col justify-start p-6 bg-gray-200 dark:bg-gray-800 rounded-b-lg md:rounded-l-lg md:rounded-br-none">
              <h5 className="mb-2 text-xl font-medium text-gray-800 dark:text-gray-300">
                Responsive Design
              </h5>
              <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                Provide services in implementing responsive web frameworks to
                ensure optimal performance across various devices. This could
                involve utilizing techniques such as media queries and flexible
                grid systems.
              </p>
            </div>
            <div className="max-[400px]:w-[385px] md:w-[535px] md:rounded-l-lg md:rounded-tr-none rounded-t-lg hidden md:block">
              <Lottie
                lottieRef={responsiveRef}
                animationData={responsive}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
          <div className="my-8 overflow-hidden flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row">
            <div className="max-[400px]:w-[385px] md:w-[535px] md:rounded-l-lg md:rounded-tr-none rounded-t-lg overflow-hidden">
              <Lottie
                lottieRef={designRef}
                animationData={design}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="flex flex-col justify-start p-6 bg-gray-200 dark:bg-gray-800 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
              <h5 className="mb-2 text-xl font-medium text-gray-800 dark:text-gray-300">
                Design Patterns Implementation
              </h5>
              <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                Applying various design patterns such as Model-View-Controller
                (MVC), Singleton, Observer, Factory, Facade, and Decorator.
                Offer services in architecting scalable and maintainable user
                interfaces based on established design patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
