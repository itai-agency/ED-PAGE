
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle, Lightbulb, Users, Rocket, LayoutTemplate, Video, Palette, Award, Sparkles, Handshake, MapPin, Building } from "lucide-react";
import React from "react";
import "./marquee.css";

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

const services = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Redes Sociales",
        description: "Creamos y gestionamos perfiles en redes sociales para conectar con tu audiencia y fortalecer tu marca.",
    },
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        title: "Diseño Web",
        description: "Diseñamos sitios web atractivos, funcionales y optimizados para una experiencia de usuario excepcional.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Social Media Management",
        description: "Gestionamos tus redes sociales de forma estratégica para aumentar el engagement y construir una comunidad leal.",
    },
    {
        icon: <Video className="h-8 w-8 text-primary" />,
        title: "Creación de Videos Profesionales",
        description: "Producimos videos de alta calidad que comunican tu mensaje de manera efectiva y atractiva.",
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Diseño Gráfico",
        description: "Creamos piezas gráficas impactantes y coherentes con tu identidad de marca para comunicar tus ideas.",
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Branding",
        description: "Construimos y fortalecemos la identidad de tu marca para que destaques en el mercado y conectes con tu público.",
    },
]

const locations = [
  { state: "Ciudad de México", city: "CDMX", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
  { state: "Jalisco", city: "Guadalajara", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
  { state: "Nuevo León", city: "Monterrey", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
  { state: "Quintana Roo", city: "Cancún", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
  { state: "Baja California", city: "Tijuana", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
  { state: "Yucatán", city: "Mérida", icon: <Building className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" /> },
];

export default function Home() {

  return (
    <>
      <section className="pt-16 pb-20 md:pt-0 md:pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-6 text-center md:text-left max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary">
                Amplifica el Pulso Digital de tu Marca
              </h1>
              <p className="text-foreground/80 md:text-lg font-sans font-normal">Somos una agencia de marketing digital de servicio completo dedicada a elevar la presencia online de tu marca. Desde SEO hasta redes sociales, creamos estrategias basadas en datos que ofrecen resultados reales.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" className="rounded-full w-full sm:w-auto font-sans font-semibold">
                  Explora Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="link" size="lg" className="text-foreground font-semibold font-sans">
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
      
      <section className="py-12 bg-secondary">
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

      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Equipo de ExpertizDigital colaborando"
                width={600}
                height={600}
                className="rounded-xl shadow-2xl object-cover"
                data-ai-hint="team collaboration"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 text-primary-foreground text-center shadow-lg w-48">
                <p className="text-4xl font-bold font-serif">+10</p>
                <p className="text-sm font-sans font-normal">Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-primary font-semibold uppercase tracking-wider font-sans">Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Tu Socio Estratégico para el Crecimiento Digital</h2>
                <p className="text-foreground/80 text-lg font-sans font-normal">
                  En ExpertizDigital, no solo creamos campañas; construimos legados. Somos un equipo de estrategas apasionados, creativos y analistas dedicados a un solo objetivo: hacer que tu marca brille en el saturado mundo digital.
                </p>
              </div>
              <ul className="space-y-4 font-sans">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Innovación Constante</h3>
                    <p className="text-foreground/70 font-normal">Nos mantenemos a la vanguardia de las tendencias para ofrecerte siempre las soluciones más efectivas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Resultados Medibles</h3>
                    <p className="text-foreground/70 font-normal">Creemos en la transparencia. Cada acción que tomamos está respaldada por datos y orientada a resultados tangibles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Asociación Verdadera</h3>
                    <p className="text-foreground/70 font-normal">Consideramos a nuestros clientes como socios. Tu éxito es nuestro éxito.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://imgur.com/gxGxRLi.png"
            alt="Equipo de trabajo colaborando"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="teamwork collaboration"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
                Cultura ExpertizDigital
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button className="rounded-full bg-white/10 border border-white/20 text-white font-semibold font-sans hover:bg-white/20 transition-all duration-300">
                    <Lightbulb className="mr-2 h-5 w-5" /> Innovación
                </Button>
                <Button className="rounded-full bg-white/10 border border-white/20 text-white font-semibold font-sans hover:bg-white/20 transition-all duration-300">
                    <Users className="mr-2 h-5 w-5" /> Colaboración
                </Button>
                <Button className="rounded-full bg-white/10 border border-white/20 text-white font-semibold font-sans hover:bg-white/20 transition-all duration-300">
                    <Rocket className="mr-2 h-5 w-5" /> Resultados
                </Button>
                <Button className="rounded-full bg-white/10 border border-white/20 text-white font-semibold font-sans hover:bg-white/20 transition-all duration-300">
                    <Sparkles className="mr-2 h-5 w-5" /> Creatividad
                </Button>
                <Button className="rounded-full bg-white/10 border border-white/20 text-white font-semibold font-sans hover:bg-white/20 transition-all duration-300">
                    <Handshake className="mr-2 h-5 w-5" /> Transparencia
                </Button>
            </div>
        </div>
        
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-transparent"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)), transparent)',
            transform: 'translateY(1px)'
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
          style={{ transform: 'translateY(1px)' }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]">
            <path d="M1200 120L0 120 0 0 1200 0 1200 120z" className="fill-transparent"></path>
            <path d="M0,0 Q300,100 600,0 T1200,0 L1200,120 L0,120 Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider font-sans">Nuestros Servicios</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mt-2">Soluciones Integrales para tu Éxito Digital</h2>
                <p className="text-foreground/80 text-lg font-sans font-normal mt-4">
                    Ofrecemos una gama completa de servicios de marketing digital diseñados para hacer crecer tu negocio y fortalecer tu presencia en línea.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-8 bg-card rounded-xl border border-border/10 shadow-lg hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2">
                        <div className="p-4 bg-background border rounded-full mb-6 inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                               {service.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                        <p className="text-foreground/70 font-sans font-normal">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section id="locations" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                    ¿Dónde nos <span className="text-primary">encontramos?</span>
                </h2>
                <p className="text-foreground/80 text-lg font-sans font-normal mt-4">
                    Tenemos presencia en las ciudades más importantes de México, listos para impulsar tu marca a nivel nacional.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {locations.map((loc, index) => (
                        <div key={index} className="group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                            <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                                {loc.icon}
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-lg font-sans">{loc.city}</p>
                                <p className="text-foreground/70 font-sans font-normal">{loc.state}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <Image 
                        src="https://imgur.com/nXIwKd5.png"
                        alt="Mapa del mundo con ubicaciones"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                        data-ai-hint="world map"
                    />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
