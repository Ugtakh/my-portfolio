import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";

const socialLinks = [
	{
		label: "github",
		url: "https://github.com/",
		icon: <FiGithub />,
	},
	{
		label: "twitter",
		url: "https://github.com/",
		icon: <FiTwitter />,
	},
	{
		label: "figma",
		url: "https://github.com/",
		icon: <FiFigma />,
	},
];

const HeroText = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1"
		>
			<h1 className="text-4xl font-semibold md:text-5xl md:font-bold">
				Hi, I'm Ugtakhbayar
				<span role="img" aria-label="wave">
					👋
				</span>
			</h1>	
			<p className="mt-4 text-base text-[#4B5563]">
				I specialize in full stack development, particularly with React.js and
				Node.js. My main goal is to create exceptional digital experiences that
				are fast, visually appealing, and accessible to everyone. With over 7
				years of experience in web development, I continue to find joy in
				crafting innovative solutions and designs.
			</p>
			<div className="flex flex-col gap-2 mt-8">
				<div>
					<p className="flex items-center gap-2">
						<IoLocationOutline />
						<span className="text-[#4B5563]">Ulaanbaatar, Mongolia</span>
					</p>
					<p className="mt-1">
						<span className="flex items-center gap-2">
							<span className="w-2 h-2 bg-green-500 rounded-full mx-1"></span>
							<span className="text-[#4B5563]">Available for new projects</span>
						</span>
					</p>
				</div>
				<div className="flex mt-4 space-x-4">
					{socialLinks.map((sl) => (
						<a href={sl.url} aria-label={sl.label}>
							{sl.icon}
						</a>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default HeroText;
