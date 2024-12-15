import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => {
  const hamburgerLine =
    "h-0.5 w-6 my-1 transition ease transform duration-300 bg-white";

  return (
    <button
      type="button"
      aria-label="Hamburger"
      className="group relative z-50 flex h-12 w-12 flex-col items-center justify-center lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={cn(
          hamburgerLine,
          isOpen && "origin-center rotate-45 translate-y-2"
        )}
      />
      <div className={cn(hamburgerLine, isOpen && "opacity-0")} />
      <div
        className={cn(
          hamburgerLine,
          isOpen && "origin-center -translate-y-3 -rotate-45"
        )}
      />
    </button>
  );
};

export default Hamburger;
