
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import React from "react";
import "./marquee.css";
import { Typewriter } from "@/components/typewriter";
import "./typewriter.css";

const logos = [
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "TechCorp Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Innovate Inc Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Solutions Co Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Digital Wave Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Quantum Leap Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "NextGen Ventures Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Apex Industries Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Stellar Group Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Visionary Tech Logo", hint: "company logo" },
  { src: "https://i.imgur.com/8eMNQ9j.png", alt: "Future Systems Logo", hint: "company logo" },
];

export default function Home() {

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem-6rem)] pt-16 pb-20 md:pt-0 md:pb-0">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary">
                Amplifica el Pulso Digital de tu Marca
              </h1>
              <Typewriter text="Somos una agencia de marketing digital de servicio completo dedicada a elevar la presencia online de tu marca. Desde SEO hasta redes sociales, creamos estrategias basadas en datos que ofrecen resultados reales." />
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
      </section>
      
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="marquee">
            <div className="marquee-content">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="mx-6 flex-shrink-0">
                   <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={70}
                      height={70}
                      className="grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                      data-ai-hint={logo.hint}
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
