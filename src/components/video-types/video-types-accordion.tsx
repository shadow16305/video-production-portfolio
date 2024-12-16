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
    <Accordion
      type="single"
      collapsible
      className="mt-8 lg:mt-12 space-y-4 lg:space-y-6"
    >
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
                "bg-slate-200 font-['Syne'] font-bold text-xl lg:text-[3.125rem] px-4 lg:px-20 text-slate-600 hover:bg-black hover:text-white transition-colors duration-300 group underline-offset-8",
                item.trigger === itemVal && "bg-lime-200 underline text-black"
              )}
            >
              <div className="flex items-center gap-x-4 lg:gap-x-8 text-start py-2 lg:py-4">
                <span className="max-w-[170px] lg:max-w-none">
                  {item.trigger}
                </span>{" "}
                <img
                  src={bomb}
                  alt="bomb icon"
                  className={cn(
                    "size-6 lg:size-8 group-hover:invert transition-all duration-300 opacity-70",
                    item.trigger === itemVal && "opacity-100"
                  )}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col lg:flex-row justify-between px-4 lg:px-20 pt-4 pb-8 bg-lime-200 font-['Montserrat']">
              <div className="lg:w-[38%] flex flex-col justify-between">
                <p>{item.paragraph}</p>
                <Separator className="bg-black my-4 lg:my-0" />
                <ul className="flex flex-col lg:flex-row lg:items-center gap-y-1 gap-x-5 font-bold mb-4">
                  {item.categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </div>
              <Video videoSrc={item.videoSrc} cover={item.cover} />
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};
