import { gearItems, ratesItems } from "@/constants";
import { motion } from "motion/react";
import { useState } from "react";
import { RatesItem } from "./rates-item";

export const Rates = () => {
  const [activeItem, setActiveItem] = useState<string>("Rates");

  return (
    <section className="w-10/12 mx-auto mt-24 lg:mt-32" id="rates">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-[3.125rem] leading-[116%] lg:text-center font-['Syne'] font-bold flex gap-x-4 lg:justify-center relative"
      >
        <button
          type="button"
          onClick={() => setActiveItem("Rates")}
          className="relative"
        >
          Rates
          {activeItem === "Rates" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-2 px-2 py-1 bg-lime-200 rounded-3xl"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-black h-1 w-full"></div>
            </motion.div>
          )}
        </button>
        <span>&</span>
        <button
          type="button"
          onClick={() => setActiveItem("Gear")}
          className="relative"
        >
          Gear
          {activeItem === "Gear" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-2 px-2 py-1 bg-lime-200 rounded-3xl"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-black h-1 w-full"></div>
            </motion.div>
          )}
        </button>
      </motion.div>
      <motion.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:text-center text-2xl lg:text-4xl font-['Syne'] mt-4"
      >
        Interested in a retainer deal? Call me now to discuss!
      </motion.h3>
      <div className="flex flex-col gap-y-6 mt-4">
        {activeItem === "Rates"
          ? ratesItems.map((rate, index) => (
              <RatesItem
                key={index}
                category={rate.category}
                items={rate.items}
              />
            ))
          : gearItems.map((gear, index) => (
              <RatesItem
                key={index}
                category={gear.category}
                items={gear.items}
              />
            ))}
      </div>
    </section>
  );
};
