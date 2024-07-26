import { useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu3Fill } from "react-icons/ri";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button onClick={toggleMenu} className="p-2 text-gray-700 md:hidden">
        <RiMenu3Fill size={24} />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 flex justify-end w-full h-screen bg-gray-200 dark:bg-gray-800">
          <div className="w-10/12 p-5 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold">UGT</span>
              <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-200"
              >
                <LiaTimesSolid color="#333333" size={24} />
              </button>
            </div>
            <nav className="mb-8 space-y-4">
              <a
                href="/about"
                className="block text-gray-700 dark:text-gray-200"
              >
                About
              </a>

              <a
                href="/work"
                className="block text-gray-700 dark:text-gray-200"
              >
                Work
              </a>

              <a
                href="/testimonials"
                className="block text-gray-700 dark:text-gray-200"
              >
                Testimonials
              </a>

              <a
                href="/contact"
                className="block text-gray-700 dark:text-gray-200"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-700 dark:text-gray-200">
                Switch Theme
              </span>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {theme === "dark" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </div>
            <button
              href="/path"
              download
              className="block py-2 text-center text-white bg-gray-900 rounded-md dark:bg-white dark:text-gray-900"
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
