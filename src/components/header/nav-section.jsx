import Menu from "./menu";
import NavButtons from "./nav-buttons";

const menuList = [
	{ label: "Home", link: "/" },
	{ label: "About", link: "/#about" },
	{ label: "Work", link: "/#work" },
	{ label: "Contact", link: "/#contact" },
];

const NavSection = () => {
	return (
		<div className="flex gap-6">
			<Menu menuList={menuList} />
			<NavButtons />
		</div>
	);
};

export default NavSection;
