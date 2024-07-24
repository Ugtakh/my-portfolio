import ExperienceCard from "@/components/experiences";

const experiences = [
	{
		title: "Senior",
		companyLogo: "/img.png",
		jobRoles: ["Devops", "Frontend", "Fullstack"],
	},
	{
		title: "Team-Lead",
		companyLogo: "/img.png",
		jobRoles: ["Devops", "Frontend", "Fullstack"],
	},
	{
		title: "Mid Engineer",
		companyLogo: "/img.png",
		jobRoles: ["Devops", "Frontend", "Fullstack"],
	},
	{
		title: "Junior",
		companyLogo: "/img.png",
		jobRoles: ["Devops", "Frontend", "Fullstack"],
	},
];

export default function Home() {
	return (
		<main>
			{/* {experiences.map(({ title, companyLogo, jobRoles }) => (
				<ExperienceCard
					title={title}
					companyLogo={companyLogo}
					jobRoles={jobRoles}
				/>
			))} */}
		</main>
	);
}
