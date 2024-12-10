import logo from "../../assets/logo.png";
import chat_bubble from "../../assets/icons/chat-bubble.svg";

export const MainNavigation = () => {
  return (
    <nav className="flex items-center justify-between w-full absolute z-50">
      <img
        src={logo}
        alt="IAN NEVDA"
        width={196}
        height={51}
        className="pl-8"
      />
      <ul className="items-center gap-x-20 font-['Syne'] font-semibold text-sm text-white hidden lg:flex">
        <li className="group relative">
          <a
            href="#projects"
            className="group-hover:text-white/90 transition-colors"
          >
            PROJECTS
          </a>
          <div className="absolute bottom-0 left-0 bg-lime-200 w-0 h-0.5 transition-all group-hover:w-full" />
        </li>
        <li className="group relative">
          <a
            href="#about"
            className="group-hover:text-white/90 transition-colors"
          >
            ABOUT
          </a>
          <div className="absolute bottom-0 left-0 bg-lime-200 w-0 h-0.5 transition-all group-hover:w-full" />
        </li>
        <li className="group relative">
          <a
            href="#rates"
            className="group-hover:text-white/90 transition-colors"
          >
            RATES & GEAR
          </a>
          <div className="absolute bottom-0 left-0 bg-lime-200 w-0 h-0.5 transition-all group-hover:w-full" />
        </li>
      </ul>
      <a
        href="#contact"
        className="px-12 py-9 items-center gap-x-4 font-['Syne'] font-semibold text-sm text-white bg-white/10 hover:bg-white/15 transition backdrop-blur-md hidden lg:flex"
      >
        CONTACT <img src={chat_bubble} alt="contact button" />
      </a>
    </nav>
  );
};
