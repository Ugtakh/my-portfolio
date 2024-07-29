import LabelTag from "../label-tag";

const skills = [
  { name: "Javascript", icon: "/images/icons/icon-javascript.png" },
  { name: "Typescript", icon: "/images/icons/icon-Typescript.png" },
  { name: "React", icon: "/images/icons/icon-react.png" },
  { name: "Next.js", icon: "/images/icons/icon-nextjs.png" },
  { name: "Node.js", icon: "/images/icons/icon-nodejs.png" },
  { name: "Express.js", icon: "/images/icons/icon-express.png" },
  { name: "Nest.js", icon: "/images/icons/icon-nest.png" },
  { name: "Socket.io", icon: "/images/icons/icon-socket.png" },
  { name: "PostgreSQL", icon: "/images/icons/icon-postgresql.png" },
  { name: "MongoDB", icon: "/images/icons/icon-mongodb.png" },
  { name: "Sass/Scss", icon: "/images/icons/icon-sass.png" },
  { name: "Tailwindcss", icon: "/images/icons/icon-tailwindcss.png" },
  { name: "Figma", icon: "/images/icons/icon-figma.png" },
  { name: "Cypress", icon: "/images/icons/icon-cypress.png" },
  { name: "Storybook", icon: "/images/icons/icon-storybook.png" },
  { name: "Git", icon: "/images/icons/icon-git.png" },
];

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
