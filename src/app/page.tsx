
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lightbulb, Users, Rocket, LayoutTemplate, Video, Palette, Award, Sparkles, Handshake, MapPin, Goal, Eye } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import "./marquee.css";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useIsMobile } from "@/hooks/use-mobile";


const logos = [
  { src: "https://imgur.com/dWrNNXH.png", alt: "Logo 2", hint: "company logo" },
  { src: "https://imgur.com/P3fj2nE.png", alt: "Logo 3", hint: "company logo" },
  { src: "https://imgur.com/wDZiHvv.png", alt: "Logo 4", hint: "company logo" },
  { src: "https://imgur.com/F9lY6i7.png", alt: "Logo 5", hint: "company logo" },
  { src: "https://imgur.com/LJngIKf.png", alt: "Logo 6", hint: "company logo" },
  { src: "https://imgur.com/V92oxZI.png", alt: "Logo 7", hint: "company logo" },
  { src: "https://imgur.com/CtFRjlx.png", alt: "New Logo", hint: "company logo" },
  { src: "https://imgur.com/ErDRd51.png", alt: "New Logo 2", hint: "company logo" },
  { src: "https://imgur.com/SVWvXuw.png", alt: "New Logo 3", hint: "company logo" },
  { src: "https://imgur.com/OXYar1X.png", alt: "New Logo 4", hint: "company logo" },
  { src: "https://imgur.com/31TSput.png", alt: "New Logo 5", hint: "company logo" },
  { src: "https://imgur.com/4EaT7W4.png", alt: "New Logo 6", hint: "company logo" },
];

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

const locations = [
    { name: "Baja California" },
    { name: "Baja California Sur" },
    { name: "Sonora" },
    { name: "Chihuahua" },
    { name: "Coahuila" },
    { name: "Nuevo León" },
    { name: "San Luis Potosí" },
    { name: "Guanajuato" },
    { name: "Querétaro" },
    { name: "Ciudad de México" },
    { name: "Tamaulipas" },
    { name: "Veracruz" },
    { name: "Jalisco" },
    { name: "Quintana Roo" },
    { name: "Zacatecas" },
    { name: "Estado de México" },
    { name: "Sinaloa" },
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

const formSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido." }),
  city: z.string().min(1, { message: "La ciudad es requerida." }),
  email: z.string().email({ message: "Por favor ingresa un correo válido." }),
  phone: z.string().min(1, { message: "El teléfono es requerido." }),
  position: z.string().min(1, { message: "El puesto es requerido." }),
  message: z.string().min(1, { message: "El mensaje es requerido." }),
});


export default function Home() {
  const isMobile = useIsMobile();
  const [aboutRef, isAboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cultureRef, isCultureVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, isServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [locationsRef, isLocationsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });
  
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
      <section className="pt-16 pb-12 md:pt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-6 text-center md:text-left max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Acelera las ventas y la <span className="text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">presencia digital</span> de tu concesionaria.
              </h1>
              <div className="text-foreground/80 md:text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                <p>Impulsamos tu concesionaria con estrategias digitales efectivas, contenido que conecta con tus clientes y acciones basadas en datos para ayudarte a vender más y mejor.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="#services">
                  <Button size="lg" className="rounded-full w-full sm:w-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                    Descubre lo que podemos hacer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={heroWhatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                    Agenda una asesoría
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0">
              <div className="relative flex justify-center">
                <Image
                  src="https://imgur.com/E2INdht.png"
                  alt="Mujer profesional sonriendo"
                  width={500}
                  height={600}
                  className="object-contain"
                  data-ai-hint="woman smiling"
                />
              </div>
            </div>
          </div>
          <div className="py-12">
            <div className="marquee">
                <div className="marquee-content">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center flex-shrink-0 mx-8 h-24">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={70}
                                height={90}
                                className="grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 object-contain"
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
                <p className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>+8</p>
                <p className="text-sm" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Somos el motor que impulsa tu marketing automotriz</h2>
                <div className="text-foreground/80 text-lg space-y-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    <p>No solo creamos anuncios: desarrollamos un sistema integral de crecimiento para tu concesionaria. Desde la estrategia hasta la implementación, con procesos claros y tableros que hablan el idioma del piso de ventas.</p>
                </div>
              </div>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Innovamos al ritmo del mercado</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Adoptamos herramientas y formatos probados en el ecosistema automotriz, evitando modas pasajeras.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Resultados medibles</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Cada acción está respaldada por un KPI. Si no genera visitas, citas, pruebas de manejo o ventas, no se implementa.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Acompañamiento real</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Trabajamos como parte de tu equipo: diseñamos estrategias, implementamos y damos seguimiento semanal. Sin humo, solo resultados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" ref={cultureRef} className={`relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden observed bg-black/80 ${isCultureVisible ? 'animate-fade-in' : ''}`}>
        <div className="relative z-20 container mx-auto px-4 md:px-6">
            <div className="text-center">
              <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                  Cultura ExpertizDigital
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Cuando la pasión nos mueve, no hay curva que nos detenga
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 mb-8"></div>
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
                                Ser el aliado creativo que transforme el marketing automotriz en México, conectando concesionarias con sus clientes a través de experiencias memorables que generen ventas reales.
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
                                Impulsar el crecimiento de cada concesionaria con estrategias digitales inteligentes, creatividad enfocada y decisiones basadas en datos, construyendo relaciones sólidas y duraderas.
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
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Soluciones especializadas en marketing automotriz</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Soluciones Integrales para tu Éxito Digital</h2>
                <p className="text-foreground/80 text-lg mt-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Estrategias, tecnología e inteligencia artificial para atraer, convertir y fidelizar a tus clientes ideales.
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
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div>
                        <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>¿DÓNDE ESTAMOS?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            En las ciudades que mueven el volante del país
                        </h2>
                    </div>
                    <p className="text-foreground/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                        Estamos en las principales ciudades de México, preparados para acelerar el crecimiento digital de tu concesionaria sin importar el código postal.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {locations.map((loc) => (
                            <Button key={loc.name} variant="outline" className="justify-start text-left bg-transparent border-gray-200 hover:bg-gray-50 hover:border-primary/50">
                                <MapPin className="mr-2 h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground/80">{loc.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <Image 
                        src="https://imgur.com/QaeuFxv.png"
                        alt="Mapa estilizado de México"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded-xl"
                        data-ai-hint="mexico map"
                    />
                </div>
            </div>
        </div>
      </section>
      
      <section id="contact" ref={contactRef} className={`py-20 md:py-32 observed ${isContactVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ¿Listo para acelerar el crecimiento de tu concesionaria?
            </h2>
            <p className="text-foreground/80 text-lg mt-4 mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Estrategias digitales, creatividad y tecnología para atraer más clientes y cerrar más ventas.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full">
                  Quiero mi asesoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Hablemos</DialogTitle>
                  <DialogDescription style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    Completa el formulario y te enviaremos un mensaje de WhatsApp para agendar tu asesoría.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <div className="grid gap-4 py-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder={error ? error.message : "Tu nombre completo"} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Ciudad</FormLabel>
                          <FormControl>
                            <Input placeholder={error ? error.message : "Ciudad de residencia"} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Correo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={error ? error.message : "tu.correo@ejemplo.com"} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Teléfono</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={error ? error.message : "Tu número de teléfono"} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Puesto</FormLabel>
                          <FormControl>
                            <Input placeholder={error ? error.message : "Tu puesto actual"} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel className="text-right" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea placeholder={error ? error.message : "Cuéntanos sobre tu proyecto..."} className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </Form>
                <div className="flex justify-end gap-4 mt-4">
                  <Button type="button" onClick={handleWhatsappSubmit} className="rounded-full">
                    Enviar mensaje
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
}

    

    



    

    











