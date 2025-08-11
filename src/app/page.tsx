
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
];

const services = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Redes Sociales",
        description: "Trabajamos con las redes que tu concesionaria necesita. Desarrollamos la estrategia que hará darte a conocer y conseguir los clientes ideales que necesita tu sucursal para cerrar el mes con éxito. Creamos un contenido creativo y de conexión para tu audiencia objetiva.",
    },
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        title: "Diseño Web",
        description: "Desarrollo de la página web y soporte continuo. Te brindamos la creación u optimización de la página web de tu concesionaria, donde sea el espacio propicio para que tu cliente ideal encuentre de manera intuitiva y sencilla lo que busca.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Social Media Management",
        description: "Nos encargamos de construir, llevar, conectar y tener una comunicación eficaz con la comunidad alrededor de tu concesionaria. Estando cerca de tus clientes ideales y optimizar su recorrido de comprador.",
    },
    {
        icon: <Video className="h-8 w-8 text-primary" />,
        title: "Creación de Videos Profesionales",
        description: "Producimos contenido audiovisual en calidad HD y 4K para que tu concesionaria tenga presencia, impacto y estilo. Diseñamos cada video con estrategia, gancho visual y foco total en redes sociales.",
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Diseño Gráfico",
        description: "Diseñamos piezas gráficas que no pasan desapercibidas. Desde branding hasta contenido visual para redes, nos basamos en tu identidad, tu voz y tu objetivo para que cada diseño conecte y potencie tu concesionaria.",
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Branding",
        description: "Tomamos tu logo, slogan, naming y línea gráfica, y los convertimos en una experiencia de marca coherente, atractiva y estratégica. No solo diseñamos, le damos alma a tu concesionaria.",
    },
]

const locations = [
    { city: "Tijuana", state: "Baja California" },
    { city: "Mexicali", state: "Baja California" },
    { city: "Ensenada", state: "Baja California" },
    { city: "La Paz", state: "Baja California Sur" },
    { city: "Hermosillo", state: "Sonora" },
    { city: "Chihuahua", state: "Chihuahua" },
    { city: "Saltillo", state: "Coahuila" },
    { city: "Monterrey", state: "Nuevo León" },
    { city: "San Luis Potosí", state: "San Luis Potosí" },
    { city: "León", state: "Guanajuato" },
    { city: "Querétaro", state: "Querétaro" },
    { city: "Ciudad de México", state: "CDMX" },
    { city: "Tampico", state: "Tamaulipas" },
    { city: "Veracruz", state: "Veracruz" },
    { city: "Guadalajara", state: "Jalisco" },
    { city: "Chetumal", state: "Quintana Roo" },
    { city: "Zacatecas", state: "Zacatecas" },
    { city: "Estado de México", state: "Estado de México" },
    { city: "Culiacán", state: "Sinaloa" },
    { city: "Los Mochis", state: "Sinaloa" },
    { city: "Ciudad Juárez", state: "Chihuahua" },
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

  return (
    <>
      <section className="pt-16 pb-12 md:pt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="space-y-6 text-center md:text-left max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pisa el acelerador del marketing de tu concesionaria
              </h1>
              <div className="text-foreground/80 md:text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                <p>Transformamos tu concesionario en un referente en redes sociales, con campañas efectivas, contenido que conecta y estrategias basadas en datos que garantizan resultados.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="#services">
                  <Button size="lg" className="rounded-full w-full sm:w-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                    Descubre lo que podemos hacer
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                <p className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>+8</p>
                <p className="text-sm" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Somos el motor detrás de tu marketing</h2>
                <div className="text-foreground/80 text-lg space-y-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                    <p>En Expertiz Digital no solo hacemos campañas: Somos un equipo obsesionado con hacer que tu concesionaria <strong>suene, se vea y se sienta auténtica.</strong></p>
                    <p>Porque no se trata solo de vender autos, se trata de transmitir tu esencia, tu historia, tu estilo. Y eso, lo hacemos con <strong>marketing automotriz</strong> que realmente responde.</p>
                </div>
              </div>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Innovamos todo el tiempo</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Nos movemos al ritmo de las tendencias, pero no solo en estilo. Usamos herramientas y estrategias que realmente solucionan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Resultados que se ven (y se miden)</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Cada paso que damos está respaldado por datos claros y orientado a resultados concretos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>No te vendemos un servicio. Te acompañamos en el camino.</h3>
                    <p className="text-foreground/80" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Creemos en las relaciones a largo plazo, con metas compartidas y una dirección clara: el éxito de tu concesionaria.</p>
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
            src="https://imgur.com/n0hEQLB.png"
            alt="Equipo de trabajo colaborando"
            fill
            className="z-0 object-cover"
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
                Porque cuando el motor es la pasión, no hay curva que nos detenga
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
                            <Eye className="h-8 w-8 text-primary shrink-0" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Visión
                            </h3>
                            <p className="text-white/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                                Ser el motor creativo que revoluciona el marketing automotriz. Transformamos concesionarias en marcas memorables, conectando con las personas de forma auténtica y llevando su presencia digital a lo más alto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-card/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10 text-white">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-full">
                            <Goal className="h-8 w-8 text-primary shrink-0" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Misión
                            </h3>
                            <p className="text-white/80 text-lg" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                                Impulsar el crecimiento de cada concesionaria con estrategias digitales inteligentes, creatividad sin frenos y decisiones basadas en datos. Consolidando así relaciones duraderas generando resultados medibles.
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
                <span className="text-primary uppercase tracking-wider" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Lo que te ofrecemos</span>
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="text-primary">¿Dónde estamos?</span>
                        <span className="text-foreground/80 block text-2xl md:text-3xl font-normal mt-1">En las ciudades que mueven el volante del país</span>
                    </h2>
                    <p className="text-foreground/80 text-lg mt-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                        Estamos en las <strong>principales ciudades de México</strong>, preparados para acelerar el crecimiento digital de tu concesionaria sin importar el código postal.
                    </p>
                    <div className="relative mt-8">
                        <Image 
                            src="https://imgur.com/YwiOQ5z.png"
                            alt="Mapa de México con ubicaciones de ExpertizDigital"
                            width={800}
                            height={500}
                            className="w-full max-w-md h-auto object-contain"
                            data-ai-hint="mexico map"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {locations.map((loc, index) => (
                        <div key={index}>
                            <p className="text-foreground font-semibold" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>{loc.city}</p>
                            <p className="text-foreground/70 text-sm" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>{loc.state}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      <section id="contact" ref={contactRef} className={`py-20 md:py-32 observed ${isContactVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ¿Listo para acelerar el crecimiento digital de tu concesionaria?
            </h2>
            <p className="text-foreground/80 text-lg mt-4 mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Estamos listos para ayudarte a despegar con estrategia, creatividad y resultados.
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
                    Completa el formulario y elige tu método de contacto preferido.
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

    