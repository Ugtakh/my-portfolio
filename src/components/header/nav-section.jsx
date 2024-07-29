import { useTheme } from "next-themes";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const menuList = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skill" },
  { label: "Experience", link: "#experience" },
  { label: "Project", link: "#project" },
  { label: "Contact", link: "#contact" },
];

const NavSection = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav className="items-center justify-between hidden space-x-4 md:flex">
        <Menu menuList={menuList} />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          {theme === "light" ? (
            <MdOutlineLightMode className="hover:cursor-pointer" />
          ) : (
            <MdOutlineDarkMode className="hover:cursor-pointer" />
          )}
        </button>
        <button
          href="/path-to-cv.pdf"
          download
          className="px-4 py-2 text-center text-white bg-gray-900 rounded-md dark:bg-white dark:text-gray-900"
        >
          Download CV
        </button>
      </nav>
      <MobileMenu menuList={menuList} />
    </div>
  );
};

export default NavSection;
