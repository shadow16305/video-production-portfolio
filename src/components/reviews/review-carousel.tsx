import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselItems } from "@/constants";

export const ReviewCarousel = () => {
  return (
    <Carousel orientation="vertical" className="lg:flex items-center hidden">
      <div className="space-y-12">
        <div className="group relative">
          <CarouselPrevious className="size-16 border-black border-2 z-10 bg-transparent hover:bg-transparent" />
          <div className="size-16 bg-lime-200 rounded-full absolute top-0 -left-6 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="group relative">
          <CarouselNext className="size-16 border-black border-2 bg-transparent hover:bg-transparent" />
          <div className="size-16 bg-lime-200 rounded-full absolute top-0 -left-6 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <CarouselContent className="h-[240px] 2xl:h-[200px]">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="basis-full space-y-8">
            <p>{item.text}</p>
            <img src={item.logo} alt={item.text} className="w-[152px] h-12" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
