const Menu = ({ menuList }) => {
	return (
		<ul className="flex flex-col space-x-6 md:flex-row">
			{menuList.map((menu) => (
				<a href={`${menu.link}`} className="text-[#4B5563] dark:text-gray-200">
					{menu.label}
				</a>
			))}
		</ul>
	);
};

export default Menu;
