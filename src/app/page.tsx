
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle, Lightbulb, Users, Rocket, LayoutTemplate, Video, Palette, Award, Sparkles, Handshake, MapPin, Goal, Eye } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import "./marquee.css";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
        description: "Trabajamos con las redes sociales que tu negocio necesita. Desarrollamos La estrategia que te hará darte a conocer y viralizar tu marca. Creamos el contenido realizando los diseños mas virales.",
    },
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        title: "Diseño Web",
        description: "Desarrollo de la página web y soporte. Nuestro equipo Hará de tu página web un Espacio donde el cliente Encuentre fácilmente lo que Busca y a la vez sea cautivado Por el diseño de la misma.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Social Media Management",
        description: "Nos encargamos de construir y llevar la comunidad online de tu negocio que hay alrededor de tu marca. Nuestro objetivo es crear comunidad y dinamizarla. Aportando ideas frescas.",
    },
    {
        icon: <Video className="h-8 w-8 text-primary" />,
        title: "Creación de Videos Profesionales",
        description: "Creamos videos en HD, 4K para la imagen de Tu negocio. Somos Profesionales en este Servicio, con la mejor Calidad contenido Dirigido e impacto Visual dirigido.",
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Diseño Gráfico",
        description: "Materializamos los mejores diseños para tu negocio. Creamos el branding de tu marca basándonos en un estudio previo. Ademas de crear contenido gráfico de acuerdo a una Personalidad única de tu negocio.",
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Branding",
        description: "Construimos tu marca, mediante La administración estratégica del Conjunto total de activos vinculados En forma directa o indirecta al Nombre y/o símbolo (logotipo) que identifica tu marca.",
    },
]

const locations = [
  { state: "Ciudad de México", city: "CDMX" },
  { state: "Jalisco", city: "Guadalajara" },
  { state: "Nuevo León", city: "Monterrey" },
  { state: "Quintana Roo", city: "Cancún" },
  { state: "Baja California", city: "Tijuana" },
  { state: "Yucatán", city: "Mérida" },
];

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options]);

  return [elementRef, isVisible] as const;
};


export default function Home({
  params,
  searchParams,
}: {
  params: {};
  searchParams: Record<string,
    string | string[] | undefined>
}) {

  const [aboutRef, isAboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cultureRef, isCultureVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, isServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [locationsRef, isLocationsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Nuevo mensaje de contacto de: ${name}`;
    const body = `
      Un nuevo cliente potencial ha llenado el formulario de contacto.

      Aquí están los detalles:
      - Nombre: ${name}
      - Ciudad: ${city}
      - Correo Electrónico: ${email}
      - Teléfono: ${phone}
      - Puesto: ${position}
      - Mensaje:
      ${message}
    `;

    const mailtoLink = `mailto:contacto@expertizdigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };


  return (
    <>
      <section className="pt-16 pb-12 md:pt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-6 text-center md:text-left max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Amplifica el Pulso Digital de tu Marca
              </h1>
              <p className="text-foreground/80 md:text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Somos una agencia de marketing digital de servicio completo dedicada a elevar la presencia online de tu marca. Desde SEO hasta redes sociales, creamos estrategias basadas en datos que ofrecen resultados reales.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="#services">
                  <Button size="lg" className="rounded-full w-full sm:w-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                    Explora Nuestros Servicios
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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
          <div className="py-12">
            <div className="marquee">
                <div className="marquee-content">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-8">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={70}
                                height={90}
                                className="grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                data-ai-hint={logo.hint}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className={`py-20 md:py-32 observed ${isAboutVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <Image
                src="https://imgur.com/y1IlHIp.png"
                alt="Equipo de ExpertizDigital colaborando"
                width={600}
                height={600}
                className="rounded-xl shadow-2xl object-cover"
                data-ai-hint="team collaboration"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 text-primary-foreground text-center shadow-lg w-48">
                <p className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>+10</p>
                <p className="text-sm" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Tu Socio Estratégico para el Crecimiento Digital</h2>
                <p className="text-foreground/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                  En ExpertizDigital, no solo creamos campañas; construimos legados. Somos un equipo de estrategas apasionados, creativos y analistas dedicados a un solo objetivo: hacer que tu marca brille en el saturado mundo digital.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Innovación Constante</h3>
                    <p className="text-foreground/70" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Nos mantenemos a la vanguardia de las tendencias para ofrecerte siempre las soluciones más efectivas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Resultados Medibles</h3>
                    <p className="text-foreground/70" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Creemos en la transparencia. Cada acción que tomamos está respaldada por datos y orientada a resultados tangibles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Asociación Verdadera</h3>
                    <p className="text-foreground/70" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Consideramos a nuestros clientes como socios. Tu éxito es nuestro éxito.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" ref={cultureRef} className={`relative text-white pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden observed ${isCultureVisible ? 'animate-fade-in' : ''}`}>
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

        <div className="relative z-20 container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Cultura ExpertizDigital
              </h2>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Donde la Pasión por el Marketing Digital nos Une
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <Button className="rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                      <Lightbulb className="mr-2 h-5 w-5" /> Innovación
                  </Button>
                  <Button className="rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                      <Users className="mr-2 h-5 w-5" /> Colaboración
                  </Button>
                  <Button className="rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                      <Rocket className="mr-2 h-5 w-5" /> Resultados
                  </Button>
                  <Button className="rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                      <Sparkles className="mr-2 h-5 w-5" /> Creatividad
                  </Button>
                  <Button className="rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                      <Handshake className="mr-2 h-5 w-5" /> Transparencia
                  </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="bg-card/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10 text-white">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-full">
                            <Eye className="h-8 w-8 text-white shrink-0" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Visión
                            </h3>
                            <p className="text-white/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                                Ser la agencia de marketing digital líder que transforma marcas, impulsando su crecimiento y conectándolas de manera auténtica con su audiencia a nivel global.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-card/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10 text-white">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-full">
                            <Goal className="h-8 w-8 text-white shrink-0" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Misión
                            </h3>
                            <p className="text-white/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                                Potenciar el éxito de nuestros clientes a través de estrategias digitales innovadoras, creativas y basadas en datos, construyendo relaciones duraderas y generando resultados medibles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className={`py-20 md:py-32 observed ${isServicesVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Nuestros Servicios</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Soluciones Integrales para tu Éxito Digital</h2>
                <p className="text-foreground/80 text-lg mt-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
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
                        <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{service.title}</h3>
                        <p className="text-foreground/70" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="locations" ref={locationsRef} className={`py-20 md:py-32 observed ${isLocationsVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    ¿Dónde nos <span className="text-primary">encontramos?</span>
                </h2>
                <p className="text-foreground/80 text-lg mt-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Tenemos presencia en las ciudades más importantes de México, listos para impulsar tu marca a nivel nacional.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {locations.map((loc, index) => (
                        <div key={index} className="group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                            <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                                <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="text-foreground text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>{loc.city}</p>
                                <p className="text-foreground/70" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>{loc.state}</p>
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
      
      <section id="contact" ref={contactRef} className={`py-20 md:py-32 observed ${isContactVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ¿Listo para llevar tu marca al siguiente nivel?
            </h2>
            <p className="text-foreground/80 text-lg mt-4 mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Hablemos de tu proyecto. Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full">
                  Comienza tu Proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Hablemos</DialogTitle>
                  <DialogDescription style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContactSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Nombre
                      </Label>
                      <Input id="name" placeholder="Tu nombre completo" className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="city" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Ciudad
                      </Label>
                      <Input id="city" placeholder="Ciudad de residencia" className="col-span-3" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Correo
                      </Label>
                      <Input id="email" type="email" placeholder="tu.correo@ejemplo.com" className="col-span-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Teléfono
                      </Label>
                      <Input id="phone" type="tel" placeholder="Tu número de teléfono" className="col-span-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="position" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Puesto
                      </Label>
                      <Input id="position" placeholder="Tu puesto actual" className="col-span-3" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                        Mensaje
                      </Label>
                      <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." className="col-span-3" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-end">
                      <Button type="submit" className="rounded-full">Enviar Mensaje</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
}

    