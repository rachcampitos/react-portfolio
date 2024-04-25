import { useRef, useState } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDarkMode } from "../components/DarkModeContext";
import mailAnimation from "../assets/animations/email.json";

const Contact = () => {
  const { darkMode } = useDarkMode();

  const mailRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_i3jqpkn";
    const templateId = "template_fszuc8h";
    const publicKey = "_XyITD0AzhCn5WxhE";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raul Campos",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName(""), setEmail(""), setMessage("");
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="md:py-12 pt-12">
          <h2 className="font-poppins after:absolute after:left-70 after:top-[72px] after:rounded-md dark:text-gray-100 text-5xl after:ml-8 md:after:w-40 after:w-20 after:bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-600 after:h-[3px]">
            Contact
          </h2>
        </div>
        <div className="mb-8 font-poppins dark:bg-gray-900 max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto bg-gray-100">
          <div className="flex justify-center my-auto">
            <div className="max-[767px]:w-[270px] md:w-[345px] md:rounded-l-lg md:rounded-tr-none rounded-t-lg overflow-hidden">
              <Lottie
                lottieRef={mailRef}
                animationData={mailAnimation}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="subject"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@mail.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Let’s build something amazing together!"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cerulean-blue-600 py-3 px-4 text-gray-100 rounded-lg hover:bg-cerulean-blue-800 transition ease-in"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
