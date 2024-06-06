import Nav from "../../components/nav/Nav";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/carousel/Carousel"
  import { Card, CardContent } from "../../components/card/Cards"

const Home = () => {
    return (
        <div>
            <Nav />
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm m-12"
    >
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-red-500 w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-[500px]">
                  <span className="text-3xl font-semibold">{index + 1}</span>
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
};

export default Home;