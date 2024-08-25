import LabelTag from "../label-tag";
import AboutContent from "./about-content";

const About = () => {
	return (
		<div className="flex flex-col items-center px-20 py-24 bg-gray-100 dark:bg-gray-900">
			<LabelTag label={"About me"} />
			<AboutContent />
		</div>
	);
};

export default About;
