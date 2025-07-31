
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";


const logos = [
  { src: "https://placehold.co/140x60.png", alt: "TechCorp Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Innovate Inc Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Solutions Co Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Digital Wave Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Quantum Leap Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "NextGen Ventures Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Apex Industries Logo", hint: "company logo" },
  { src: "https://placehold.co/140x60.png", alt: "Stellar Group Logo", hint: "company logo" },
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)] pt-16 pb-20 md:pt-0 md:pb-0">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary">
                Amplifica el Pulso Digital de tu Marca
              </h1>
              <p className="text-foreground/80 md:text-lg">
                Somos una agencia de marketing digital de servicio completo dedicada a elevar la presencia online de tu marca. Desde SEO hasta redes sociales, creamos estrategias basadas en datos que ofrecen resultados reales.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  Explora Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="link" size="lg" className="text-foreground font-semibold">
                  <PlayCircle className="mr-2 h-6 w-6 text-primary" />
                  Mira Nuestro Trabajo
                </Button>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0">
              <div className="relative flex justify-center">
                <Image
                  src="https://i.imgur.com/CmfiXJ4.png"
                  alt="Hombre feliz señalando"
                  width={500}
                  height={600}
                  className="object-contain"
                  data-ai-hint="man excited"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                align: "start",
                loop: true,
                }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-2">
                {logos.map((logo, index) => (
                    <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/6 pl-2">
                        <div className="p-1">
                            <Card className="bg-transparent border-none shadow-none">
                            <CardContent className="flex aspect-video items-center justify-center p-1">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={50}
                                    className="grayscale opacity-60 transition-opacity duration-300 hover:opacity-100 hover:grayscale-0"
                                    data-ai-hint={logo.hint}
                                />
                            </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
      </div>
    </>
  );
}
