import portrait from "../assets/images/portrait.png";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section
      className="bg-[url('../src/assets/images/about-bg.jpg')] bg-cover bg-no-repeat mt-32 py-20 flex flex-col items-center text-white"
      id="about"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[3.125rem] leading-[116%] text-center font-['Syne'] font-bold"
      >
        About <span className="text-lime-200">me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[650px] text-center mt-12 text-neutral-300 font-['Montserrat']"
      >
        With 10 years of experience in cinematography and editing, I've worked
        on everything from freelance gigs to award-winning shorts. I thrive in
        collaborative environments, connecting with others to bring creative
        visions to life.
      </motion.p>
      <motion.img
        src={portrait}
        alt="Portrait"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-[270px] h-[330px] mt-12 ml-8"
      />
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-['Montserrat'] mt-4 font-semibold"
      >
        Ian N.
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-neutral-200 font-['Montserrat']"
      >
        Cinematographer / Producer
      </motion.p>
    </section>
  );
};
