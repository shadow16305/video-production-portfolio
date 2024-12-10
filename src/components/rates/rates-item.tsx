import { motion } from "motion/react";
import { Separator } from "../ui/separator";

interface RatesItemProps {
  category: string;
  items: (string | null)[];
}

export const RatesItem = ({ category, items }: RatesItemProps) => {
  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-y-4"
      >
        <span className="font-['Montserrat'] text-lg font-bold">
          {category}
        </span>
        <ul className="space-y-2 list-disc">
          {items.filter(Boolean).map((item, index) => (
            <li key={index} className="font-['Montserrat'] ml-4">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      {(category === "Cameras" || category === "Lenses") && (
        <Separator className="bg-black" />
      )}
    </>
  );
};
