const Menu = ({ menuList }) => {
  return (
    <ul className="flex flex-col space-x-4 md:flex-row ">
      {menuList.map((menu) => (
        <a href={`${menu.link}`} className="text-gray-700 dark:text-gray-200">
          {menu.label}
        </a>
      ))}
    </ul>
  );
};

export default Menu;
