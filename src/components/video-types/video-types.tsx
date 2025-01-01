import { ScribbleOne } from "../ui/vector-animations/scribble-one";
import { VideoTypesAccordion } from "./video-types-accordion";

export const VideoTypes = () => {
  return (
    <section className="w-10/12 3xl:max-w-[1560px] mx-auto mt-16 lg:mt-32 relative">
      <h2 className="text-3xl lg:text-[3.125rem] leading-[116%] text-center font-['Syne'] font-bold">
        Videos I Can Create For You
      </h2>
      <div className="absolute left-1/2 -translate-x-1/2 -top-4 md:-top-14 lg:-top-6 w-full">
        <ScribbleOne />
      </div>
      <VideoTypesAccordion />
    </section>
  );
};
