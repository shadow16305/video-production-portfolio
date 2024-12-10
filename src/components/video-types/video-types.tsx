import { ScribbleOne } from "../ui/vector-animations/scribble-one";
import { VideoTypesAccordion } from "./video-types-accordion";

export const VideoTypes = () => {
  return (
    <section className="w-10/12 mx-auto mt-32 relative">
      <h2 className="text-3xl lg:text-[3.125rem] leading-[116%] text-center font-['Syne'] font-bold">
        Videos I Can Create For You
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 -top-6">
        <ScribbleOne />
      </div>
      <VideoTypesAccordion />
    </section>
  );
};
