import { motion } from "framer-motion";
import HeroText from "./hero-text";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 items-center min-h-[560px] px-4 md:px-20 dark:bg-gray-950">
      <HeroText />
      <div className="flex justify-center flex-1">
        <motion.img
          src="/images/photos/tom.png"
          alt="Tom's photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="object-cover mt-8 w-96 h-96 "
        />
      </div>
    </div>
  );
};

export default Hero;
