import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { carouselItems } from "@/constants";
import { cn } from "@/lib/utils";

export const CarouselMobile = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(carouselItems.length);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      orientation="horizontal"
      setApi={setApi}
      className="flex flex-col lg:hidden mt-4"
    >
      <div className="flex items-center gap-x-2">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "size-2.5 border border-black rounded-full bg-transparent transition-colors",
              current === index + 1 && "bg-lime-200"
            )}
          />
        ))}
      </div>
      <CarouselContent className="w-full mt-4">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="space-y-8">
            <p>{item.text}</p>
            <img src={item.logo} alt={item.text} className="w-[152px] h-12" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
