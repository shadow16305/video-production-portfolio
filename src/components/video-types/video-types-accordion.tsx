import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import bomb from "../../assets/icons/bomb.svg";
import { accordionItems } from "@/constants";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Video } from "./video";

import { motion } from "motion/react";

export const VideoTypesAccordion = () => {
  const [itemVal, setItemVal] = useState("");

  const handleValChange = (value: string) => {
    if (value === itemVal) {
      setItemVal("");
    } else {
      setItemVal(value);
    }
  };

  return (
    <Accordion type="single" collapsible className="mt-12 space-y-6">
      {accordionItems.map((item) => (
        <motion.div
          key={item.trigger}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AccordionItem value={item.trigger}>
            <AccordionTrigger
              onClick={() => handleValChange(item.trigger)}
              className={cn(
                "bg-slate-200 font-['Syne'] font-bold text-[3.125rem] px-20 hover:bg-black hover:text-white transition-colors duration-300 group underline-offset-8",
                item.trigger === itemVal && "bg-lime-200 underline"
              )}
            >
              <div className="flex items-center gap-x-8">
                {item.trigger}{" "}
                <img
                  src={bomb}
                  alt="bomb icon"
                  className="size-8 group-hover:invert transition-all duration-300"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-between px-20 py-8 bg-lime-200 font-['Montserrat']">
              <div className="w-[38%] flex flex-col justify-between">
                <p>{item.paragraph}</p>
                <Separator className="bg-black" />
                <ul className="flex items-center gap-x-5 font-bold">
                  {item.categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </div>
              <Video />
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};
