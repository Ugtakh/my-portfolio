import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex mt-12"
    >
      <div className="flex-1">
        <img
          src="/path/to/your/photo.jpg"
          alt="Your Photo"
          className="w-40 h-40 mx-auto rounded-full md:mx-0"
        />
      </div>
      <div className="flex-1 mt-6 text-center md:ml-8 md:mt-0 md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Curious about me? Here you have it:
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Since starting my web development journey in 2015, I've embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, I'm building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, you'll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </p>
        <ul className="mt-4 text-gray-600 dark:text-gray-300">
          <li>• B.E. in Computer Engineering</li>
          <li>• Full-time freelancer</li>
          <li>• Avid learner</li>
        </ul>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutContent;
