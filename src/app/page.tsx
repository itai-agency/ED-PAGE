import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-red-50/50 to-yellow-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)] pt-16 pb-20 md:pt-0 md:pb-0">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">
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
             <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-md max-h-md rounded-full bg-pink-100/50 blur-3xl"></div>
            </div>
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
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,228,230,0.5)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(224,242,254,0.5)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M-200,50 C150,300 400,-100 800,200 S1200,800 1920,400 V1080 H0 Z" fill="url(#grad1)" fillOpacity="0.3" stroke="none"></path>
          <path d="M-100,100 C250,400 500,0 900,250 S1300,700 1920,300 V1080 H0 Z" stroke="#e0f2fe" fill="none" strokeWidth="1"></path>
        </svg>
      </div>
    </div>
  );
}
