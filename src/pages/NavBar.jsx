import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ darkMode, setDarkMode }) => {
  console.log(darkMode);
  return (
    <div>
      <h1 className="text-xl font-poppins">Raul Campos</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
            href=""
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
