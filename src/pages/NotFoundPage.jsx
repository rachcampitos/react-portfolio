import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkMode } from "../components/DarkModeContext";

const NotFoundPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-cerulean-blue-500 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4 dark:text-gray-200">
          404 Not Found
        </h1>
        <p className="text-xl mb-5 dark:text-gray-200">
          This page does not exist
        </p>
        <Link
          to="/react-portfolio/"
          className="bg-cerulean-blue-600 py-3 px-4 text-gray-100 rounded-lg hover:bg-cerulean-blue-800 transition ease-in"
        >
          Go Back
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
