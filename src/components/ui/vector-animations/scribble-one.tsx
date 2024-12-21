import { motion } from "motion/react";

export const ScribbleOne = () => {
  return (
    <svg
      className="w-full h-[121px] lg:h-[81px] object-cover"
      width="609"
      height="81"
      viewBox="0 0 609 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1.32947 0.731971C111.76 2.53491 226.356 7.9745 338.013 19.4811C392.638 25.1104 447.615 31.8854 502.069 40.9823C529.34 45.5381 560.515 49.2478 586.637 57.7823C647.921 77.8052 489.673 76.7099 481.494 76.9027C351.828 79.9591 219.624 84.1093 86.2068 71.5743C69.9349 70.0455 30.6063 69.029 30.098 54.1275C29.6479 40.93 61.3376 34.404 75.91 30.9824C143.958 15.0051 225.044 12.7086 301.859 15.2652C399.007 18.4986 502.611 27.6679 607.728 45.1299"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        initial={{ pathLength: 0.001 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
};
