import LabelTag from "../label-tag";

const ProjectCard = ({ title, description, image, tags, swap }) => {
	return (
		<div
			className={`flex ${
				swap && "flex-row-reverse"
			} mx-16 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800`}
		>
			<div className="flex-1 p-12 bg-[#F9FAFB]">
				<img className="w-full" src={image} alt={title} />
			</div>
			<div className="flex flex-col flex-1 gap-6 p-12">
				<div className="mb-2 text-xl font-bold">{title}</div>
				<p className="text-base text-gray-700 dark:text-gray-300">
					{description}
				</p>
				<div className="flex flex-wrap gap-2">
					{tags?.map((tag) => (
						<LabelTag label={tag.name} />
					))}
				</div>
				<img
					src="../images/icons/icon-link.svg"
					alt="link"
					className="w-5 h-5 cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
