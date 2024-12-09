import { gearItems } from "@/constants";
import { motion } from "motion/react";
import { Separator } from "./ui/separator";

export const Rates = () => {
  return (
    <section className="w-10/12 mx-auto mt-32" id="rates">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[3.125rem] leading-[116%] text-center font-['Syne'] font-bold"
      >
        Rates & <span className="underline underline-offset-8">Gear</span>
      </motion.h2>
      <motion.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-['Syne'] mt-4"
      >
        Interested in a retainer deal? Call me now to discuss!
      </motion.h3>
      <div className="flex flex-col gap-y-6 mt-4">
        {gearItems.map((gear) => (
          <>
            <motion.div
              key={gear.category}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-y-4"
            >
              <span className="font-['Montserrat'] text-lg font-bold">
                {gear.category}
              </span>
              <ul className="space-y-2 list-disc">
                {gear.items.map(
                  (item) =>
                    item && (
                      <li key={item} className="font-['Montserrat'] ml-4">
                        {item}
                      </li>
                    )
                )}
              </ul>
            </motion.div>
            {(gear.category === "Cameras" || gear.category === "Lenses") && (
              <Separator className="bg-black" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};
