import { gearItems } from "@/constants";
import { motion } from "motion/react";
import { RatesItem } from "./gear-item";

export const Gear = () => {
  return (
    <section
      className="w-10/12 3xl:max-w-[1560px] mx-auto mt-24 lg:mt-32"
      id="rates"
    >
      <h2 className="text-3xl lg:text-[3.125rem] leading-[116%] lg:text-center font-['Syne'] font-bold flex gap-x-4 justify-center relative">
        Gear
      </h2>
      <motion.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl lg:text-4xl font-['Syne'] mt-4"
      >
        Interested in a retainer deal? Call me now to discuss!
      </motion.h3>
      <div className="flex flex-col gap-y-6 mt-4">
        {gearItems.map((gear, index) => (
          <RatesItem key={index} category={gear.category} items={gear.items} />
        ))}
      </div>
    </section>
  );
};
