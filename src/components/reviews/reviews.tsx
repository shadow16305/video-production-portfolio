import { ReviewCarousel } from "./review-carousel";
import camera from "../../assets/images/bro-wif-cam.jpg";
import { motion } from "motion/react";
import { ScribbleTwo } from "../ui/vector-animations/scribble-two";

export const Reviews = () => {
  return (
    <section className="mt-32 relative">
      <div className="w-10/12 mx-auto flex justify-between">
        <div className="flex flex-col justify-between w-1/2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[4.4rem] leading-[116%] font-['Syne'] font-bold max-w-[347px]"
          >
            Client reviews
          </motion.h2>
          <ReviewCarousel />
        </div>
        <motion.img
          src={camera}
          alt="Filming in a studio"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-2/5 h-[520px] object-cover"
        />
      </div>
      <div className="absolute left-0 -top-6">
        <ScribbleTwo />
      </div>
    </section>
  );
};
