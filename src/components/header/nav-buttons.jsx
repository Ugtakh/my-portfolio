import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex border-l border-gray-400">
      <MdOutlineLightMode />
      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        DOWNload CV
      </button>
    </div>
  );
};

export default NavButtons;
