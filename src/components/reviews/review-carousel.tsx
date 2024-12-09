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
    <Carousel orientation="vertical" className="flex items-center">
      <div className="space-y-12 relative">
        <CarouselPrevious className="size-16 border-black border-2 z-10 bg-transparent hover:bg-neutral-200/40" />
        <CarouselNext className="size-16 border-black border-2 bg-transparent hover:bg-neutral-200/40" />
        <div className="size-16 bg-lime-200 rounded-full absolute -top-12 -left-4 -z-10" />
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
