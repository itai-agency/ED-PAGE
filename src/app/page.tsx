
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle, Lightbulb, Users, Rocket, Search, ThumbsUp, CircleDollarSign, Codepen, Mail, BarChart2, LayoutTemplate, Video, Palette, Award } from "lucide-react";
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
        icon: <Users className="h-8 w-8" />,
        title: "Redes Sociales",
        description: "Creamos y gestionamos perfiles en redes sociales para conectar con tu audiencia y fortalecer tu marca.",
    },
    {
        icon: <LayoutTemplate className="h-8 w-8" />,
        title: "Diseño Web",
        description: "Diseñamos sitios web atractivos, funcionales y optimizados para una experiencia de usuario excepcional.",
    },
    {
        icon: <ThumbsUp className="h-8 w-8" />,
        title: "Social Media Management",
        description: "Gestionamos tus redes sociales de forma estratégica para aumentar el engagement y construir una comunidad leal.",
    },
    {
        icon: <Video className="h-8 w-8" />,
        title: "Creación de Videos Profesionales",
        description: "Producimos videos de alta calidad que comunican tu mensaje de manera efectiva y atractiva.",
    },
    {
        icon: <Palette className="h-8 w-8" />,
        title: "Diseño Gráfico",
        description: "Creamos piezas gráficas impactantes y coherentes con tu identidad de marca para comunicar tus ideas.",
    },
    {
        icon: <Award className="h-8 w-8" />,
        title: "Branding",
        description: "Construimos y fortalecemos la identidad de tu marca para que destaques en el mercado y conectes con tu público.",
    },
]

export default function Home() {

  return (
    <>
      <section className="pt-16 pb-20 md:pt-0 md:pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-6 text-center md:text-left max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary">
                Amplifica el Pulso Digital de tu Marca
              </h1>
              <p className="text-foreground/80 md:text-lg">Somos una agencia de marketing digital de servicio completo dedicada a elevar la presencia online de tu marca. Desde SEO hasta redes sociales, creamos estrategias basadas en datos que ofrecen resultados reales.</p>
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
      
      <section className="py-12">
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
                <p className="text-4xl font-bold">+10</p>
                <p className="text-sm">Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-primary font-semibold uppercase tracking-wider">Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tu Socio Estratégico para el Crecimiento Digital</h2>
                <p className="text-foreground/80 text-lg">
                  En ExpertizDigital, no solo creamos campañas; construimos legados. Somos un equipo de estrategas apasionados, creativos y analistas dedicados a un solo objetivo: hacer que tu marca brille en el saturado mundo digital.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Innovación Constante</h3>
                    <p className="text-foreground/70">Nos mantenemos a la vanguardia de las tendencias para ofrecerte siempre las soluciones más efectivas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Resultados Medibles</h3>
                    <p className="text-foreground/70">Creemos en la transparencia. Cada acción que tomamos está respaldada por datos y orientada a resultados tangibles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Asociación Verdadera</h3>
                    <p className="text-foreground/70">Consideramos a nuestros clientes como socios. Tu éxito es nuestro éxito.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider">Nuestra Cultura</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">La Cultura de ExpertizDigital</h2>
            <p className="text-foreground/80 text-lg mt-4">
              Nuestra fuerza reside en nuestra gente. Fomentamos un entorno de colaboración, aprendizaje continuo y pasión por el marketing digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Innovación</h3>
              <p className="text-foreground/70">Buscamos constantemente nuevas ideas y tecnologías para mantener a nuestros clientes a la vanguardia.</p>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Colaboración</h3>
              <p className="text-foreground/70">Trabajamos en equipo, compartiendo conocimientos y habilidades para lograr los mejores resultados.</p>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pasión por los Resultados</h3>
              <p className="text-foreground/70">Nos apasiona ver crecer a nuestros clientes. Su éxito es el motor que nos impulsa cada día.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider">Nuestros Servicios</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Soluciones Integrales para tu Éxito Digital</h2>
                <p className="text-foreground/80 text-lg mt-4">
                    Ofrecemos una gama completa de servicios de marketing digital diseñados para hacer crecer tu negocio y fortalecer tu presencia en línea.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-8 bg-background/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center group">
                        <div className="p-4 bg-background border rounded-full mb-6 inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                               {service.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-foreground/70">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
