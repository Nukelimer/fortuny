import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious
} from "./reusable/ui/carousel";
import { Card, CardContent } from "./ui/card";

function CustomCarousel() {
        return (
                <div>
                        <Carousel
                                opts={{
                                        align: "start"
                                }}
                                className="w-full max-w-[90%] bord er-4 mx-auto"
                        >
                                <CarouselContent>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                                <CarouselItem
                                                        key={index}
                                                        className="basis-1/2 lg:basis-1/3 p-0"
                                                >
                                                        <div className="">
                                                                <Card>
                                                                        <CardContent className="flex  items-center justify-center px-1 ">
                                                                                <img
                                                                                        src="/home/dummy.webp"
                                                                                        alt="image"
                                                                                        className="size-full"
                                                                                />
                                                                        </CardContent>
                                                                </Card>
                                                        </div>
                                                </CarouselItem>
                                        ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                        </Carousel>
                </div>
        );
}

export default CustomCarousel;
