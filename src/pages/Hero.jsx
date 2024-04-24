import { useDarkMode } from "../components/DarkModeContext";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import angularIcon from "../assets/images/angular-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import jsIcon from "../assets/images/js-icon.svg";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import sassIcon from "../assets/images/sass-icon.svg";
import agGridIcon from "../assets/images/ag-grid-icon.png";
import gtmIcon from "../assets/images/gtm-icon.svg";
import ionicIcon from "../assets/images/ionic-icon.svg";
import taiwildIcon from "../assets/images/tailwind-icon.svg";

const Hero = () => {
  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="pt-12 md:py-12 px-8 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-poppins after:absolute after:left-70 after:top-[72px] after:rounded-md dark:text-gray-100 text-5xl after:ml-8 md:after:w-40 after:w-32 after:bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-600 after:h-[3px]">
          About me
        </h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
          <div className="col-span-12 space-y-2.5">
            <p className="font-poppins dark:text-gray-300 font-thin">
              Dynamic and results-driven Web Developer with 5 years of
              experience in front-end development. Proficient in JavaScript,
              Angular 9+, HTML, CSS, Ionic, and Material Design. Demonstrated
              ability to collaborate effectively in team environments, and drive
              successful outcomes.
            </p>
          </div>
        </div>
        <h2 className="mt-10 font-poppins dark:text-gray-100 text-3xl">
          Tech Stack
        </h2>
        <div className="lg:grid grid-cols-12 md:gap-10 py-6 md:py-0 md:mb-0 mb-5 md:pt-[30px] items-center ">
          <div className="col-span-12 space-y-2.5">
            <Slider {...settings}>
              <img src={angularIcon} alt="" />
              <img src={reactIcon} alt="" />
              <img src={jsIcon} alt="" />
              <img src={htmlIcon} alt="" />
              <img src={cssIcon} alt="" />
              <img src={sassIcon} alt="" />
              <img src={taiwildIcon} alt="" />
              <img src={agGridIcon} alt="" />
              <img src={gtmIcon} alt="" />
              <img src={ionicIcon} alt="" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /*       <div
        className={
          "px-10 py-32 mt-16 flex flex-col md:flex-row md:justify-between lg:justify-evenly dark:bg-gray-900 transition ease-in"
        }
      >
        <div className="flex justify-center align-middle">
          <div className="text-3xl mr-14 flex flex-col justify-center align-middle gap-8 py-3 text-cyan-500">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillDribbbleCircle />
          </div>
          <div className="flex flex-col justify-center md:mr-6">
            <h2 className="text-5xl text-cyan-500 font-medium md:text-6xl">
              Hi, I'm Raul
            </h2>
            <h3 className="text-2xl py-2 font-medium text-gray-600 font-poppins md:text-3xl dark:text-gray-500">
              Web UI Developer
            </h3>
            <p className="max-w-xl text-md py-5 leading-6 text-gray-800 w-80 font-poppins md:text-xl dark:text-gray-300">
              Dynamic and results-driven Web Developer with 5 years of
              experience in front-end development. Proficient in JavaScript,
              Angular 9+, HTML, CSS, Ionic, and Material Design. Demonstrated
              ability to collaborate effectively in team environments, and drive
              successful outcomes.
            </p>
          </div>
        </div>

        <div className="mt-10 relative mx-auto md:mx-0 md:mt-16 bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full w-64 h-64 overflow-hidden">
          <img src={raul} alt="" className="object-fill relative bottom-20" />
        </div>
      </div> */
}
