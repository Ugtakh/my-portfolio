import { motion } from "framer-motion";
import HeroText from "./hero-text";

const Hero = () => {
  return (
    <div className="flex items-center min-h-[560px] p-4 dark:bg-gray-950">
      <HeroText />
      <div className="flex-1">
        <motion.img
          src="/path/to/your/image.jpg"
          alt="Tom's photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="object-cover w-48 h-48 mt-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
