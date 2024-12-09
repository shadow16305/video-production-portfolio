import { projects } from "../../constants";
import { cn } from "../../lib/utils";
import { ProjectCard } from "./project-card";

import { motion } from "motion/react";

export const Projects = () => {
  return (
    <section
      className="bg-[url('../src/assets/images/projects-bg.jpg')] bg-cover bg-center bg-no-repeat mt-32 py-16 relative"
      id="projects"
    >
      <h2 className="text-[3.125rem] leading-[116%] underline text-lime-200 text-center font-['Syne']">
        Projects
      </h2>
      <div className="flex flex-wrap w-10/12 mx-auto gap-9 mt-16 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              x: index === 0 ? -60 : index === 3 ? 60 : 0,
              y: index === 1 ? -60 : index === 2 ? 60 : 0,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={cn(
              index === 1 || index === 2 ? "w-[32%]" : "w-[63%] 2xl:w-[65%]"
            )}
          >
            <ProjectCard
              title={project.title}
              category={project.category}
              cover={project.cover}
            />
          </motion.div>
        ))}
      </div>
      <div className="w-[25%] h-[380px] absolute left-[7%] bottom-10 bg-white/10 backdrop-blur-sm" />
    </section>
  );
};
