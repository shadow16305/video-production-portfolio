import play from "../../assets/icons/play.svg";
import { useState } from "react";
import { ProjectVideo } from "./project-video";

interface ProjectCardProps {
  title: string;
  category: string;
  cover: string;
}

export const ProjectCard = ({ title, category, cover }: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="relative pb-12 pl-6 bg-no-repeat bg-cover bg-center h-[184px] lg:h-[380px] flex items-end group cursor-pointer w-full group"
      onClick={() => setShowVideo(true)}
      style={{ backgroundImage: `url(${cover})` }}
    >
      {showVideo ? (
        <>
          <ProjectVideo />
          <div className="absolute top-0 left-0 size-full bg-black/40 backdrop-blur-md" />
        </>
      ) : (
        <>
          <h3
            className={
              "font-['Syne'] font-bold text-2xl lg:text-[2.5rem] leading-[116%] text-white max-w-[440px] z-10 underline underline-offset-8 group-hover:text-lime-200 transition-colors duration-300"
            }
          >
            {title}
          </h3>
          <span className="bg-white/30 backdrop-blur-sm rounded-3xl px-6 py-2 absolute right-4 top-4 z-10 text-white font-['Montserrat'] text-sm">
            {category}
          </span>
          <div className="absolute top-0 left-0 size-full bg-black/30" />
          <img
            src={play}
            alt="play icon"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          />
        </>
      )}
      <div className="w-full h-[380px] absolute -left-7 -bottom-7  backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 hidden lg:block saturate-200 brightness-200" />
    </div>
  );
};
