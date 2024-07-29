import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experience";
import Projects from "@/components/projects";
import Hero from "@/components/sections/hero";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
