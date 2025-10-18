"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jay Shah",
    title: "Founder at ThemeCanon",
    quote: "Working with Steve has been an absolute pleasure. His attention to detail, creative insights, and technical expertise are second to none. He delivered a stunning website that has significantly boosted our online presence. Highly recommended!",
    image: "https://placehold.co/80x80/2b2b2b/cccccc/png?text=JS",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    title: "Marketing Director",
    quote: "The final product was beyond our expectations. Steve is not just a developer; he's a true partner who invests himself in the project's success. The user experience is fantastic, and our engagement rates have soared.",
    image: "https://placehold.co/80x80/2b2b2b/cccccc/png?text=MG",
    rating: 5,
  },
  {
    name: "John Doe",
    title: "CEO, InvoVate",
    quote: "An incredible professional to work with. The entire process was seamless, and the communication was top-notch. The website he built is both beautiful and functional.",
    image: "https://placehold.co/80x80/2b2b2b/cccccc/png?text=JD",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-[#111111] py-20 lg:py-28">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative mb-16 text-center">
          <h2 className="relative z-10 font-display text-[36px] font-bold uppercase tracking-wider text-[#FDB902]">
            Testimonials
          </h2>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[90px] font-extrabold uppercase text-white/5 z-0 select-none hidden md:block">
            Clients
          </span>
        </div>

        <div className="relative mx-auto max-w-[900px]">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="items-center">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center px-4 text-center">
                    <div className="relative h-20 w-20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-[3px] border-[#FDB902] object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 font-body text-base text-[#CCCCCC]">
                      {testimonial.title}
                    </p>
                    <div className="my-3 flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#FDB902] text-[#FDB902]"
                        />
                      ))}
                    </div>
                    <p className="mx-auto mt-2 max-w-[700px] font-body text-lg italic text-[#E5E5E5]" style={{ lineHeight: 1.8 }}>
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 transform lg:-translate-x-12 z-10 flex h-10 w-10 items-center justify-center rounded-full border-0 bg-[#2B2B2B] text-white transition-colors hover:bg-[#FDB902]" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 transform lg:translate-x-12 z-10 flex h-10 w-10 items-center justify-center rounded-full border-0 bg-[#2B2B2B] text-white transition-colors hover:bg-[#FDB902]" />
          </Carousel>
          
          <div className="mt-12 flex items-center justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-[#FDB902]" : "bg-[#2B2B2B] hover:bg-[#444]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}