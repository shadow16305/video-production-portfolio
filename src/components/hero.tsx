import { useRef } from "react";
import bomb from "../assets/icons/bomb.svg";
import hero_img from "../assets/images/hero-img.png";
import { motion, useInView } from "motion/react";
import { cn } from "../lib/utils";

export const Hero = () => {
  const text = "Toronto based documentary cinematographer";

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
    <section className="bg-[url('../src/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center relative">
      <div className="w-10/12 mx-auto text-white z-10 relative">
        <div className="flex flex-wrap max-w-[680px]">
          {splittedText.map((current, i) => (
            <motion.h1
              key={i}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? "animate" : ""}
              custom={i}
              className={cn(
                "font-['Syne'] font-bold text-[4.4rem] max-w-[900px] leading-[116%] pr-3",
                current === "documentary" && "text-lime-200"
              )}
            >
              {current == "" ? <span>&nbsp;</span> : current}
            </motion.h1>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-['Montserrat'] text-base max-w-[465px] mt-4"
        >
          Hey! My name is Ian. Take a look at some of my recent work bellow, and
          call if you'd like to connect or{" "}
          <span className="font-bold">fill out this forum.</span>
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="tel:+16472275559"
          className="font-['Syne'] font-bold text-sm flex items-center gap-x-4 bg-white py-5 px-11 text-black w-fit mt-6 relative group"
        >
          <span className="z-10">+1 (647) 227 - 5559</span>
          <img src={bomb} alt="call phone number" className="z-10" />
          <div className="w-0 h-full bg-lime-200 absolute top-0 left-0 transition-all group-hover:w-full duration-300" />
        </motion.a>
      </div>
      <motion.div
        initial={{ skewX: -3 }}
        whileInView={{ skewX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-[40%] w-[660px] h-[400px] xl:w-[780px] xl:h-[500px]"
      >
        <img
          src={hero_img}
          alt="hero image"
          className="object-cover absolute"
        />
      </motion.div>
    </section>
  );
};
