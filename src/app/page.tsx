
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Rocket, LayoutTemplate, Video, Palette, Sparkles, Goal } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import "./marquee.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import banner from "@/assets/banner.png";
import l2 from "@/assets/I2.jpg";
import l3 from "@/assets/I3.jpg";
import l4 from "@/assets/I4.jpg";
import l5 from "@/assets/I5.jpg";
import l6 from "@/assets/I6.jpg";
import l7 from "@/assets/I7.jpg";
import l8 from "@/assets/I8.jpg"; 
import l9 from "@/assets/I9.jpg";
import l10 from "@/assets/I10.jpg";
import l11 from "@/assets/I11.jpg";
import l12 from "@/assets/I12.png";
import EDLogo from "@/assets/EDLogo.png";
import EDLogo2 from "@/assets/EDLogo2.png";
import MAPA_PC from "@/assets/MAPA-PC.png";
import MAPA_MB from "@/assets/MAPA-MB.png";

const services = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Estrategias digitales & redes Sociales",
        description: "Creamos contenido estratégico y campañas basadas en inbound marketing que atraen prospectos calificados y generan oportunidades reales de venta.",
    },
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        title: "Diseño web & experiencia digital",
        description: "Diseñamos páginas rápidas, intuitivas y optimizadas para captar leads y conectar con tu piso de ventas.",
    },
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Gestión de medios & publicidad inteligente",
        description: "Ejecutamos estrategias publicitarias multicanal, potenciadas con inteligencia artificial para maximizar el retorno de inversión.",
    },
    {
        icon: <Video className="h-8 w-8 text-primary" />,
        title: "Producción de contenido audiovisual",
        description: "Creamos material en HD y 4K para campañas, redes sociales y presentaciones, diseñado para captar atención y transmitir tu propuesta de valor.",
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Diseño gráfico",
        description: "Creamos identidad visual y piezas gráficas coherentes con tu marca, fortaleciendo tu posicionamiento en el mercado automotriz.",
    },
    {
        icon: <Sparkles className="h-8 w-8 text-primary" />,
        title: "Innovación & tecnología con IA",
        description: "Nuestro departamento de tecnología e inteligencia artificial co-crea contigo soluciones que optimizan procesos, mejoran la eficiencia y elevan el rendimiento de tus campañas.",
    },
]

const serviceImages = [
  { src: l2, alt: "Estrategias digitales & redes Sociales" },
  { src: l3, alt: "Diseño web & experiencia digital" },
  { src: l4, alt: "Gestión de medios & publicidad inteligente" },
  { src: l5, alt: "Producción de contenido audiovisual" },
  { src: l6, alt: "Diseño gráfico" },
  { src: l7, alt: "Innovación & tecnología con IA" },
];

const clientLogos = [
  { src: EDLogo, alt: "Google", w: 180, h: 60 },
  { src: EDLogo2, alt: "YouTube", w: 180, h: 60 },
];

const cultureValues = ["Innovación", "Colaboración", "Resultados", "Creatividad", "Transparencia"];

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

const formSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido." }),
  city: z.string().min(1, { message: "La ciudad es requerida." }),
  email: z.string().email({ message: "Por favor ingresa un correo válido." }),
  phone: z.string().min(1, { message: "El teléfono es requerido." }),
  position: z.string().min(1, { message: "El puesto es requerido." }),
  message: z.string().min(1, { message: "El mensaje es requerido." }),
});


export default function Home() {
  const [aboutRef, isAboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, isServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    },
  });

  const handleWhatsappSubmit = async () => {
    const isValid = await form.trigger();
    if (!isValid) return;
    
    const { name, city, email, phone, position, message } = form.getValues();
    const text = `
      Hola ExpertizDigital,

      Mi nombre es ${name} y les escribo desde ${city}. Estoy interesado/a en sus servicios y me gustaría recibir más información.

      Les comparto mis datos de contacto:
      - Correo: ${email}
      - Teléfono: ${phone}
      - Puesto: ${position}

      Mi consulta es la siguiente:
      ${message}

      ¡Gracias!
    `.trim().replace(/\n\s*\n/g, '\n\n');
    const whatsappLink = `https://wa.me/525649871454?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
  };

  const heroWhatsappLink = `https://wa.me/525649871454?text=${encodeURIComponent("Hola ExpertizDigital, me gustaría obtener más información.")}`;

  return (
    <>
    {/* ===== HERO sin fondo detrás de la imagen ===== */}
    <section id="inicio" className="relative overflow-hidden">
      {/* ====== FULL-BLEED 50/50 ====== */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Panel blanco con texto — primero en móvil, segundo en desktop */}
          <div className="bg-white order-1 lg:order-2">
            <div className="h-full flex items-center">
              <div
                className="
                  w-full max-w-[720px]
                  px-5 sm:px-8 lg:px-16
                  py-10 lg:py-0 mx-auto
                  text-center lg:text-left
                "
              >
                <h1
                  className="
                    font-extrabold text-zinc-900 tracking-tight
                    text-[28px] sm:text-[36px] lg:text-[56px]
                    leading-[1.28] sm:leading-[1.24] lg:leading-[1.18]
                  "
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Acelera tus ventas con{" "}
                  <span className="text-primary">estrategias digitales</span>{" "}
                  para tu concesionaria
                </h1>

                <p
                  className="
                    mt-4 text-zinc-600
                    text-[15px] sm:text-base lg:text-xl
                    leading-[1.85]
                    max-w-[36ch] lg:max-w-[58ch]
                    mx-auto lg:mx-0
                  "
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Impulsamos tu concesionaria con estrategias digitales, contenido
                  relevante y decisiones basadas en datos para aumentar tus ventas.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link href="#services">
                    <Button
                      size="lg"
                      className="rounded-full px-6 lg:px-7 py-6 text-base lg:text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Descubre lo que podemos hacer
                    </Button>
                  </Link>
                  <Link
                    href={`https://wa.me/525649871454?text=${encodeURIComponent(
                      "Hola ExpertizDigital, me gustaría obtener más información."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-6 lg:px-7 py-6 text-base lg:text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Agenda una asesoría
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen — segunda en móvil, primera en desktop */}
          <div className="relative order-2 lg:order-1 w-full h-[40vh] sm:h-[50vh] lg:h-[78vh]">
            <Image
              src={banner}
              alt="Dashboard"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>

      {/* ====== Pills (centradas en desktop) ====== */}
      <div
        className="
          container mx-auto px-4 md:px-6 pb-4
          relative z-20
          -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20
        "
      >
        {/* Contenedor centrado */}
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 place-items-center sm:place-items-stretch">
            {/* Pill 1 */}
            <div
              className="
                w-[70%] max-w-[360px] sm:w-full
                mx-auto
                rounded-2xl bg-white shadow-lg border border-zinc-200 p-5 sm:p-6
              "
            >
              <p className="text-3xl sm:text-4xl font-bold text-zinc-900 text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>+13</p>
              <p className="mt-1 text-sm tracking-wide text-zinc-500 text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Estados de México
              </p>
            </div>

            {/* Pill 2 */}
            <div
              className="
                w-[70%] max-w-[360px] sm:w-full
                mx-auto
                rounded-2xl text-white shadow-lg p-5 sm:p-6
              "
              style={{ backgroundColor: "#f15f04" }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>+8</p>
              <p className="mt-1 text-sm tracking-wide text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Años de experiencia
              </p>
            </div>

            {/* Pill 3 */}
            <div
              className="
                w-[70%] max-w-[360px] sm:w-full
                mx-auto
                rounded-2xl bg-white shadow-lg border border-zinc-200 p-5 sm:p-6
              "
            >
              <p className="text-3xl sm:text-4xl font-bold text-zinc-900 text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>+95%</p>
              <p className="mt-1 text-sm tracking-wide text-zinc-500 text-start" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Satisfacción del cliente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      ref={aboutRef}
      className={`py-12 md:py-24 observed ${isAboutVisible ? "animate-fade-in-up" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Imagen (izquierda en desktop) */}
          <div className="lg:order-1">
            <div className="max-w-[600px] mx-auto">
              <Image
                src="https://imgur.com/y1IlHIp.png"
                alt="Equipo de ExpertizDigital colaborando"
                width={600}
                height={600}
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>

          {/* Texto (derecha en desktop, centrado en móvil) */}
          <div className="space-y-4 lg:order-2 lg:pl-4 text-center lg:text-left">
            <span
              className="text-primary font-semibold tracking-wide block
                        text-[14px] sm:text-[15px] md:text-base"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Sobre Nosotros
            </span>

            <h2
              className="
                font-bold text-foreground
                text-[22px] sm:text-[26px] md:text-4xl lg:text-5xl
                leading-[1.35] sm:leading-[1.3] md:leading-[1.2]
              "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Somos el motor que impulsa tu marketing automotriz
            </h2>

            <div
              className="
                mx-auto lg:mx-0
                max-w-[32ch] sm:max-w-[44ch] md:max-w-none
                pt-2 sm:pt-4
              "
            >
              <p
                className="
                  text-foreground text-[14px] sm:text-[15.5px] md:text-lg
                  leading-[1.95] sm:leading-[1.9] md:leading-[1.85]
                "
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                No solo creamos anuncios: desarrollamos un sistema integral de
                crecimiento para tu concesionaria. Desde la estrategia hasta la
                implementación, con procesos claros y tableros que hablan el
                idioma del piso de ventas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section id="valores" className="relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Wrapper para manejar el stacking y el posicionamiento de las líneas */}
        <div className="relative z-0">

          {/* ========= LÍNEAS (dos trazos individuales) ========= */}
          {/* Entre item 1 y item 2 */}
          <svg
            className="hidden md:block absolute pointer-events-none text-zinc-300 z-0
                       top-[34px] lg:top-[-25px] left-[20%] w-[25%] h-[100px]"
            viewBox="0 0 340 72"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 58 C 70 22, 160 6, 238 34 C 292 54, 326 54, 338 50"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Entre item 2 y item 3 */}
          <svg
            className="hidden md:block absolute pointer-events-none text-zinc-300 z-0
                       top-[34px] lg:top-[-25px] left-[55%] w-[25%] h-[100px]"
            viewBox="0 0 340 72"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 58 C 70 22, 160 6, 238 34 C 292 54, 326 54, 338 50"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* ========= GRID DE TARJETAS ========= */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
            {/* Item 1 */}
            <div className="text-center max-w-md mx-auto">
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-orange-500 text-white grid place-items-center shadow-xl">
                <Lightbulb className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3
                className="text-2xl md:text-[28px] font-bold text-foreground"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Innovamos al ritmo del mercado
              </h3>
              <p
                className="mt-3 text-base md:text-[17px] leading-7 text-foreground/80"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Adoptamos herramientas y formatos probados en el ecosistema automotriz, evitando modas pasajeras.
              </p>
            </div>

            {/* Item 2 */}
            <div className="text-center max-w-md mx-auto">
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-orange-500 text-white grid place-items-center shadow-xl">
                <Goal className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3
                className="text-2xl md:text-[28px] font-bold text-foreground"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Resultados medibles
              </h3>
              <p
                className="mt-3 text-base md:text-[17px] leading-7 text-foreground/80"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Cada acción está respaldada por un KPI. Si no genera visitas, citas, pruebas de manejo o ventas, no se implementa.
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-center max-w-md mx-auto">
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-orange-500 text-white grid place-items-center shadow-xl">
                <Users className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3
                className="text-2xl md:text-[28px] font-bold text-foreground"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Acompañamiento real
              </h3>
              <p
                className="mt-3 text-base md:text-[17px] leading-7 text-foreground/80"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Trabajamos como parte de tu equipo: diseñamos estrategias, implementamos y damos seguimiento semanal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="services"
      ref={servicesRef}
      className={`py-16 md:py-24 observed ${isServicesVisible ? "animate-fade-in-up" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className="
              font-bold text-foreground
              text-[22px] sm:text-[26px] md:text-[34px]
              leading-[1.35] sm:leading-[1.45] md:leading-[1.55]
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Servicios especializados en <br className="hidden sm:block" />
            marketing automotriz
          </h2>

          <p
            className="
              mt-3 sm:mt-4 text-foreground/80
              text-[14px] sm:text-[15px] md:text-[18px]
              leading-[1.8] md:leading-[1.9]
            "
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            Estrategias, tecnología e inteligencia artificial para atraer,
            <br className="hidden sm:block" />
            convertir y fidelizar a tus clientes ideales.
          </p>
        </div>

        {/* Tarjetas de servicio */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const img = serviceImages[index]; // tu mapeo 1 a 1
            return (
              <article
                key={index}
                className="
                  rounded-2xl bg-card border border-border/10 shadow-lg overflow-hidden
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                "
              >
                {/* Imagen superior */}
                <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
                  <Image
                    src={img?.src || "/assets/l2.jpg"}
                    alt={img?.alt || service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>

                {/* Contenido centrado */}
                <div className="p-5 sm:p-6 text-center">
                  <h3
                    className="
                      text-foreground font-bold mb-2
                      text-[18px] sm:text-[20px] md:text-[22px]
                    "
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-foreground/70
                      text-[14px] sm:text-[15px] md:text-[16px]
                      leading-[1.8]
                    "
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section id="clientes" className="relative py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título y subtítulo */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="
              font-semibold text-[#122046]
              text-[22px] sm:text-[26px] md:text-[34px]
              leading-[1.35] sm:leading-[1.4] md:leading-[1.5]
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Nuestros clientes confían en nosotros
          </h2>

          <p
            className="
              mt-3 sm:mt-4 text-zinc-500
              text-[14px] sm:text-[15px] md:text-[18px]
              leading-[1.7] md:leading-[1.9]
            "
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            Colaboramos con marcas líderes en la industria automotriz para
            <br className="hidden sm:block" />
            impulsar su presencia digital
          </p>
        </div>

        {/* Logos */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-12 gap-y-6 sm:gap-y-8">
          {clientLogos.map((l, i) => (
            <div key={i} className="opacity-40 grayscale hover:opacity-70 transition-opacity">
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                className="h-auto w-auto max-h-10 sm:max-h-12 md:max-h-16 object-contain"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="pasion" className="py-8 sm:py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl bg-primary text-primary-foreground shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-5 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-10">
            {/* Texto */}
            <div className="md:pl-2">
              <h3
                className="
                  font-bold text-center md:text-left
                  text-[28px] sm:text-[24px] md:text-[32px] lg:text-[40px]
                  leading-[1.25] sm:leading-[1.3] md:leading-[1.35]
                "
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Cuando la pasión nos mueve, no hay curva
                <br className="hidden sm:block" /> que nos detenga
              </h3>
            </div>

            {/* Imagen (más alta, sin recorte) */}
            <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-[22rem] xl:h-[24rem] bg-primary/20 rounded-2xl">
              <Image
                src={l8}
                alt="Equipo trabajando"
                fill
                className="object-contain rounded-3xl"
                sizes="(min-width:1280px) 40vw, (min-width:768px) 45vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="valores-empresa" className="py-12 sm:py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.25fr] items-start">
          {/* Texto */}
          <div>
            <h2
              className="
                font-semibold text-[#122046] mb-3 sm:mb-4
                text-[20px] sm:text-[24px] md:text-[32px]
                leading-[1.35] md:leading-[1.5]
              "
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              Valores de la empresa
            </h2>

            <p
              className="
                text-zinc-600
                text-[14px] sm:text-[15px] md:text-[17px]
                leading-[1.85] md:leading-[1.9]
                text-left md:text-justify
              "
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              Conectamos concesionarias con sus clientes a través de creatividad, datos y
              estrategias digitales que generan ventas reales y relaciones duraderas.
            </p>

            <p
              className="
                mt-3 sm:mt-4 text-zinc-600
                text-[14px] sm:text-[15px] md:text-[17px]
                leading-[1.85] md:leading-[1.9]
                text-left md:text-justify
              "
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              Creamos experiencias que inspiran confianza, fortalecen la marca y convierten
              cada contacto en una oportunidad de crecimiento.
            </p>
          </div>

          {/* Imágenes derecha */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <figure className="flex flex-col">
              <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={l9}
                  alt="Resultados"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 28vw, (min-width:640px) 33vw, 100vw"
                  priority
                />
              </div>
              <figcaption
                className="mt-3 text-center text-sm font-semibold tracking-wide text-orange-500"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", lineHeight: "2", fontWeight: 700 }}
              >
                RESULTADOS
              </figcaption>
            </figure>

            {/* Card 2 */}
            <figure className="flex flex-col">
              <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={l10}
                  alt="Colaboración"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 28vw, (min-width:640px) 33vw, 100vw"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-sm font-semibold tracking-wide text-orange-500"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", lineHeight: "2", fontWeight: 700 }}
              >
                COLABORACIÓN
              </figcaption>
            </figure>

            {/* Card 3 */}
            <figure className="flex flex-col">
              <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={l11}
                  alt="Innovación"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 28vw, (min-width:640px) 33vw, 100vw"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-sm font-semibold tracking-wide text-orange-500"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", lineHeight: "2", fontWeight: 700 }}
              >
                INNOVACIÓN
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

      <section id="donde-estamos" className="py-1 md:py-2">
        <div className="container mx-auto px-4 md:px-6">
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="text-orange-500 font-semibold block
                        text-[14px] sm:text-[15px] md:text-base"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              ¿Dónde estamos?
            </span>

            <h2
              className="
                mt-2 font-bold text-[#122046]
                text-[22px] sm:text-[26px] md:text-4xl lg:text-5xl
                leading-[1.35] sm:leading-[1.3] md:leading-[1.2]
              "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Somos el motor que impulsa
              <br className="hidden sm:block" />
              tu marketing automotriz
            </h2>

            <p
              className="
                mt-4 text-zinc-500 mx-auto
                text-[14.5px] sm:text-[15.5px] md:text-lg
                leading-[1.95] sm:leading-[1.9] md:leading-[1.85]
                max-w-[34ch] sm:max-w-[42ch] md:max-w-none
              "
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              Estamos en las principales ciudades de México, preparados para acelerar el crecimiento
              digital de tu concesionaria sin importar el código postal.
            </p>
          </div>

          {/* Mapa con versiones responsive */}
          <div className="relative mt-8 md:mt-12 rounded-3xl overflow-hidden shadow-2xl">
            {/* Contenedor con altura adaptada (en móvil un poco más alta para la imagen vertical) */}
            <div className="relative w-full h-[520px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
              {/* Imagen móvil (solo < sm) */}
              <div className="absolute inset-0 block sm:hidden">
                <Image
                  src={MAPA_MB}
                  alt="Mapa de México (móvil)"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Imagen tablet/desktop (>= sm) */}
              <div className="absolute inset-0 hidden sm:block">
                <Image
                  src={MAPA_PC}
                  alt="Mapa de México"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
                {/* degradado sutil para contraste SOLO en desktop/tablet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Título */}
          <h2
            className="
              text-center font-semibold text-[#122046]
              text-[22px] sm:text-[26px] md:text-4xl lg:text-5xl
              leading-[1.35] sm:leading-[1.32] md:leading-[1.2]
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ¿Listo para acelerar el crecimiento
            <br className="hidden md:block" /> de tu concesionaria?
          </h2>

          {/* Contenido responsive */}
          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Imagen (arriba en móvil) */}
            <div className="relative order-1 md:order-2 w-full h-[320px] sm:h-[360px] md:h-72 lg:h-80">
              <Image
                src={l12}
                alt="Dashboard con métricas"
                fill
                priority
                className="object-cover rounded-2xl shadow-lg"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>

            {/* Texto + CTA (debajo en móvil) */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p
                className="
                  text-zinc-600 mx-auto md:mx-0
                  text-[15px] sm:text-[15.5px] md:text-lg
                  leading-[1.9] md:leading-[1.85]
                  max-w-[34ch] sm:max-w-[40ch] md:max-w-xl
                "
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
              >
                Estrategias digitales, creatividad y tecnología para atraer más clientes y
                cerrar más ventas.
              </p>

              <div className="mt-6">
                <Link
                  href={`https://wa.me/525649871454?text=${encodeURIComponent(
                    "Hola ExpertizDigital, quiero agendar mi asesoría."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="
                      rounded-full bg-orange-500 hover:bg-orange-600 text-white
                      px-6 md:px-7 py-5
                      text-[14.5px] sm:text-[15px] md:text-base
                    "
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    QUIERO MI ASESORÍA
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

    

    



    

    
















