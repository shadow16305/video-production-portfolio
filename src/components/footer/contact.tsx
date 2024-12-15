import { Form } from "./form";
import { motion } from "motion/react";

export const Contact = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col lg:flex-row lg:justify-between text-white">
      <div className="max-w-[454px] lg:w-5/12 font-['Syne'] font-bold">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-[4.4rem] leading-[116%] font-['Syne']"
        >
          Interested? <span className="text-lime-200">Let’s talk!</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base lg:text-xl mt-8"
        >
          I would love to learn who you are and what kind of project you have in
          mind.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base lg:text-xl mt-6"
        >
          <p>Give me a call or shoot me a text:</p>
          <p>+1 (647) 227 - 5559</p>
        </motion.div>
      </div>
      <Form />
    </div>
  );
};
