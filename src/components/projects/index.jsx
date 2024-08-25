import React from "react";
import LabelTag from "../label-tag";
import ProjectCard from "./project-card";

const projects = [
	{
		title: "UBCab",
		image: "../images/photos/ubcab.png",
		description:
			"A cab booking application with seamless payment integration and user-friendly experience.",
		tags: [
			{ name: "Javascript" },
			{ name: "Typescript" },
			{ name: "React" },
			{ name: "Next.js" },
			{ name: "Node.js" },
			{ name: "Express.js" },
			{ name: "Nest.js" },
			{ name: "Socket.io" },
			{ name: "PostgreSQL" },
			{ name: "MongoDB" },
			{ name: "Sass/Scss" },
		],
	},
	{
		title: "Mentorhub",
		image: "../images/photos/mentorhub.png",
		description:
			"A cab booking application with seamless payment integration and user-friendly experience.",
		tags: [
			{ name: "Javascript" },
			{ name: "Typescript" },
			{ name: "React" },
			{ name: "Next.js" },
			{ name: "Node.js" },
			{ name: "Express.js" },
			{ name: "Nest.js" },
			{ name: "Socket.io" },
			{ name: "PostgreSQL" },
			{ name: "MongoDB" },
			{ name: "Sass/Scss" },
		],
	},
	{
		title: "iToim",
		image: "../images/photos/itoim.png",
		description:
			"A cab booking application with seamless payment integration and user-friendly experience.",
		tags: [
			{ name: "Javascript" },
			{ name: "Typescript" },
			{ name: "React" },
			{ name: "Next.js" },
			{ name: "Node.js" },
			{ name: "Express.js" },
			{ name: "Nest.js" },
			{ name: "Socket.io" },
			{ name: "PostgreSQL" },
			{ name: "MongoDB" },
			{ name: "Sass/Scss" },
		],
	},
];

const Projects = () => {
	return (
		<div
			id="project"
			className="flex flex-col items-center justify-center px-20 py-24 bg-white dark:bg-[#030712]"
		>
			<LabelTag label="Projects" />
			<p className="mt-4 text-gray-600 dark:text-gray-300">
				Here is a quick summary of my most recent experiences:
			</p>
			<div className="flex flex-col w-full gap-12 mt-12">
				{projects.map((project, i) => (
					<ProjectCard
						title={project.title}
						description={project.description}
						image={project.image}
						tags={project.tags}
						swap={i % 2}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
