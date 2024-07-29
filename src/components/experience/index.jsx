import React from "react";
import ExperienceCard from "./experience-card";
import LabelTag from "../label-tag";

const experiences = [
  {
    title: "Sr. Frontend Developer",
    company: "turing",
    date: "Nov 2020 - Present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    company: "upwork",
    date: "Jul 2016 - Oct 2020",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "toptal",
    date: "Dec 2011 - May 2016",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-24 bg-gray-100 dark:bg-gray-900">
      <LabelTag label="Experience" />
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="w-full max-w-4xl mt-12">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
