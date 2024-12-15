import chat_bubble from "../../assets/icons/chat-bubble.svg";
import { Separator } from "../ui/separator";

export const MobileMenu = () => {
  return (
    <ul className="font-['Syne'] font-semibold text-base text-white flex flex-col items-center gap-y-4 pt-24 pb-4 w-10/12 mx-auto">
      <li className="group relative">
        <a
          href="#projects"
          className="group-hover:text-white/90 transition-colors"
        >
          PROJECTS
        </a>
      </li>
      <li className="group relative">
        <a
          href="#about"
          className="group-hover:text-white/90 transition-colors"
        >
          ABOUT
        </a>
      </li>
      <li className="group relative">
        <a
          href="#rates"
          className="group-hover:text-white/90 transition-colors"
        >
          RATES & GEAR
        </a>
      </li>
      <Separator className="bg-white/20" />
      <a
        href="#contact"
        className="w-full py-4 lg:py-9 items-center gap-x-4 font-['Syne'] font-semibold text-sm text-black bg-white transition backdrop-blur-md flex justify-center"
      >
        CONTACT{" "}
        <img src={chat_bubble} alt="contact button" className="invert" />
      </a>
    </ul>
  );
};
