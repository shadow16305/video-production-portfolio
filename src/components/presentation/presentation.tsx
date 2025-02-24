import bomb from "../../assets/icons/bomb.svg";
import scribble from "../../assets/images/scribble.png";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { PresentationVideo } from "./presentation-video";

export const Presentation = () => {
  const [showVideo, setShowVideo] = useState(false);

  const text =
    "Check out my video reel to get a feel of what to expect by working with me.";

  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col lg:flex-row w-10/12 3xl:max-w-[1560px] mx-auto items-center justify-between gap-x-20 gap-y-8 relative mt-16 lg:mt-32">
      <div className="relative w-full lg:w-1/2 group cursor-pointer">
        <PresentationVideo showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
      <div className="space-y-6 font-['Syne'] font-bold lg:w-1/2 z-10">
        <div className="flex flex-wrap">
          {splittedText.map((current, i) => (
            <motion.h2
              key={i}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? "animate" : ""}
              custom={i}
              className="text-3xl lg:text-[3.125rem] leading-[116%] pr-2"
            >
              {current == "" ? <span>&nbsp;</span> : current}
            </motion.h2>
          ))}
        </div>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black text-white w-full py-6 flex items-center justify-center gap-x-4 text-sm group hover:text-black transition-colors duration-300 relative cursor-pointer"
        >
          <span className="z-10">REACH OUT</span>
          <img
            src={bomb}
            alt="reach out"
            className="z-10 invert group-hover:invert-0 pb-1 transition-all duration-300"
          />
          <div className="w-0 h-full bg-lime-200 group-hover:w-full transition-all duration-300 absolute top-0 left-0" />
        </motion.a>
      </div>
      <img
        src={scribble}
        alt="scribble"
        className="absolute -top-4 2xl:top-0 -right-16 w-36 h-[132px] hidden lg:block"
      />
    </section>
  );
};
