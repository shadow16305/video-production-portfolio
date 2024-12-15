import { Contact } from "./contact";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <section className="bg-[url('../src/assets/images/contact-bg.jpg')] bg-cover bg-no-repeat pt-24 pb-12 mt-16 lg:mt-32">
      <Contact />
      <div className="w-10/12 mx-auto mt-24">
        <Separator className="bg-white/20" />
        <p className="font-['Montserrat'] mt-5 text-white text-sm lg:text-base">
          IAN NEVDA Video Production
        </p>
      </div>
    </section>
  );
};
