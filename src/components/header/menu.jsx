const Menu = ({ menuList }) => {
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
