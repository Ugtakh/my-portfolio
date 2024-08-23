import LabelTag from "../label-tag";
import skills from "./data";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-24 bg-white dark:bg-gray-950">
      <LabelTag label="Skills" />
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-12 h-12 mb-2"
            />
            <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
