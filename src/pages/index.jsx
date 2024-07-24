import ExperienceCard from "@/components/experiences";
import { useState } from "react";

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
  const [count, setCount] = useState(100);
  const [ner, setNer] = useState("");

  const add = () => {
    setCount(count + 100);
  };
  const hasah = (too) => {
    setCount(too);
  };

  const handleChange = (value) => {
    setNer(value);
  };

  return (
    <main className="m-10">
      <div>
        <div>
          <p>Name: {ner}</p>
        </div>
        <div>
          <input
            type="text"
            className="mb-3 border"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <button onClick={add} className="px-8 py-4 text-white bg-black">
          +
        </button>
        <p className="text-2xl">{count}</p>
        <button
          onClick={() => {
            hasah(200);
          }}
          className="px-8 py-4 text-white bg-black"
        >
          -
        </button>
      </div>
      {experiences.map(({ title, companyLogo, jobRoles }) => (
        <ExperienceCard
          title={title}
          companyLogo={companyLogo}
          jobRoles={jobRoles}
        />
      ))}
    </main>
  );
}
