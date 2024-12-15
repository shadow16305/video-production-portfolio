import { motion } from "motion/react";

export const ScribbleTwo = () => {
  return (
    <svg
      className="w-[309px] h-[177px] lg:w-[455px] lg:h-[276px] object-cover"
      viewBox="0 0 455 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0 258.152C55.6998 221.091 112.388 186.605 169.571 152.127C221.151 121.027 270.015 88.4667 314.679 47.0362C324.156 38.2457 344.257 22.5258 344.257 6.8236C344.257 -5.15756 316.755 4.65489 312.9 7.17429C257.001 43.7046 213.547 100.653 168.681 150.139C139.152 182.71 108.036 214.801 82.1724 250.788C80.8558 252.62 64.2637 273.991 72.6097 274.869C82.4369 275.902 92.0936 270.647 100.519 266.101C118.168 256.58 135.543 246.183 151.78 234.188C183.774 210.553 216.744 185.384 241.736 153.412C249.805 143.09 263.646 128.5 267.755 115.538C270.107 108.121 251.429 120.679 250.631 121.383C236.522 133.823 226.414 148.642 218.83 166.037C213.996 177.126 207.258 188.137 208.155 200.873C209.477 219.636 270.878 180.344 271.314 180.065C335.311 138.987 392.953 88.9092 454.339 43.9969"
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
