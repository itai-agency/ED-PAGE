import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Briefcase, HeartHandshake, Users } from "lucide-react";

const clients = [
  { name: "Innovate Inc.", logo: "https://placehold.co/150x50.png", hint: "logo abstract" },
  { name: "Quantum Corp.", logo: "https://placehold.co/150x50.png", hint: "logo technology" },
  { name: "Synergy Solutions", logo: "https://placehold.co/150x50.png", hint: "logo consulting" },
  { name: "Apex Enterprises", logo: "https://placehold.co/150x50.png", hint: "logo mountain" },
  { name: "Pioneer Group", logo: "https://placehold.co/150x50.png", hint: "logo circle" },
  { name: "Zenith Co.", logo: "https://placehold.co/150x50.png", hint: "logo typography" },
];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    hint: "person portrait",
    quote: "Working with Elegant Entry has been a game-changer for our brand. Their attention to detail and creative approach is unparalleled. We've seen a significant increase in engagement since partnering with them."
  },
  {
    name: "Samantha Lee",
    title: "Marketing Director, Quantum Corp.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote: "The team at Elegant Entry is not only talented but also a pleasure to work with. They truly understood our vision and delivered beyond our expectations. Highly recommended for any business looking to make a statement."
  },
  {
    name: "David Chen",
    title: "Founder, Synergy Solutions",
    avatar: "https://placehold.co/100x100.png",
    hint: "man smiling",
    quote: "From the initial concept to the final execution, the process was seamless and professional. Elegant Entry helped us redefine our digital presence and connect with our audience in a meaningful way."
  },
];

const services = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your target audience and stand out in the marketplace."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Audience Engagement",
    description: "Developing compelling campaigns and content to connect with your customers on a deeper level."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: "Client Partnerships",
    description: "Building long-lasting relationships through transparent communication and a commitment to shared success."
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Quality Assurance",
    description: "Ensuring every deliverable meets the highest standards of excellence and aligns with your business goals."
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center bg-accent">
        <div className="absolute inset-0 bg-background/20"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Impressions, Building Futures
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl">
              We specialize in creating elegant and impactful first encounters for your brand. Let's build a lasting impression together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">Learn More &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                Dedicated to Design Excellence
              </h2>
              <p className="text-lg text-foreground/80">
                At Elegant Entry, our mission is to empower brands through sophisticated design and strategic thinking. We believe that a strong first impression is the cornerstone of a successful business relationship. Our team is passionate about creativity, collaboration, and delivering results that matter.
              </p>
              <p className="text-lg text-foreground/80">
                Our values are rooted in integrity, innovation, and a client-first approach. We strive to be more than just a service provider; we aim to be a trusted partner in your journey to success.
              </p>
            </div>
            <div className="relative h-80 w-full lg:h-full rounded-lg overflow-hidden shadow-xl">
               <Image
                src="https://placehold.co/600x400.png"
                alt="Our team working"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-accent">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What We Offer</h2>
            <p className="text-lg text-foreground/80">
              We provide a comprehensive range of services designed to elevate your brand's presence and impact.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-left transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  <p className="mt-2 text-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Clients</div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Trusted by Industry Leaders</h2>
            <p className="text-lg text-foreground/80">
              We are proud to have partnered with a diverse range of innovative companies.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={50}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  data-ai-hint={client.hint}
                />
              </div>
            ))}
          </div>
          <div className="mt-20">
             <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <blockquote className="text-lg italic text-foreground/90">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 font-bold font-headline">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-accent">
         <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Let's discuss how we can help you make an unforgettable first impression.
                </p>
                <Button size="lg" className="mt-8">
                    Get in Touch
                </Button>
            </div>
         </div>
      </section>
    </>
  );
}
