import { useEffect, useState } from "react";
import { projects } from "../../constants";
import { ProjectCard } from "./project-card";

import { motion } from "motion/react";

export const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  return (
    <section
      className="bg-[url('../src/assets/images/projects-bg.jpg')] bg-cover bg-center bg-no-repeat mt-16 lg:mt-32 py-16 relative"
      id="projects"
    >
      <h2 className="text-[3.125rem] leading-[116%] underline text-lime-200 text-center font-['Syne']">
        Projects
      </h2>
      <div className="flex flex-wrap w-10/12 3xl:max-w-[1560px] mx-auto gap-9 mt-16 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              x: isDesktop ? (index === 0 ? -60 : index === 3 ? 60 : 0) : -60,
              y: isDesktop ? (index === 1 ? -60 : index === 2 ? 60 : 0) : 0,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[48%]"
          >
            <ProjectCard
              title={project.title}
              category={project.category}
              cover={project.cover}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
