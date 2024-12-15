import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import { DesktopLinks } from "./desktop-links";

import Hamburger from "./hamburger";
import { MobileMenu } from "./mobile-menu";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "flex items-center justify-between w-full fixed lg:absolute z-50 py-4 lg:py-0 transition-all duration-300",
          scrolled &&
            !isOpen &&
            "bg-black/40 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        )}
      >
        <div className="w-10/12 mx-auto lg:w-full flex justify-between items-center">
          <img
            src={logo}
            alt="IAN NEVDA"
            className="lg:pl-8 w-[160px] h-[40px] lg:w-[196px] lg:h-[51px]"
          />
          <DesktopLinks />
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="fixed top-0 left-0 z-40 bg-black/40 w-screen backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ delay: 0.2 }}
            >
              <MobileMenu />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
