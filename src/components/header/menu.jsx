const menuList = [
  { label: "Home", link: "/" },
  { label: "About", link: "/#about" },
  { label: "Work", link: "/#work" },
  { label: "Contact", link: "/#contact" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
