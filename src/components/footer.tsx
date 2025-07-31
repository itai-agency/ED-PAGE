import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.528 8.014a5.5 5.5 0 1 0-5.487 5.487v.038" />
        <path d="M12.528 8.014a5.5 5.5 0 0 1 5.487-5.487v10.974A5.5 5.5 0 1 1 7.04 13.5v-5.46"/>
    </svg>
);

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: "#" },
  { icon: <Youtube className="h-6 w-6" />, href: "#" },
  { icon: <Linkedin className="h-6 w-6" />, href: "#" },
  { icon: <TikTokIcon className="h-6 w-6" />, href: "#" },
];

const footerSections = [
    {
        title: "Servicios",
        links: [
            { label: "Redes Sociales", href: "#services" },
            { label: "Diseño Web", href: "#services" },
            { label: "Social Media Management", href: "#services" },
            { label: "Creación de Videos", href: "#services" },
            { label: "Diseño Gráfico", href: "#services" },
            { label: "Branding", href: "#services" },
        ],
    },
    {
        title: "Soluciones",
        links: [
            { label: "Estrategias de Contenido", href: "#" },
            { label: "Campañas Publicitarias", href: "#" },
            { label: "SEO y SEM", href: "#" },
            { label: "E-commerce", href: "#" },
            { label: "Marketing de Influencers", href: "#" },
        ],
    },
    {
        title: "Institucional",
        links: [
            { label: "Nosotros", href: "#about" },
            { label: "Servicios", href: "#services" },
            { label: "Clientes", href: "#clients" },
            { label: "Contacto", href: "#" },
            { label: "Política de Privacidad", href: "#" },
        ],
    }
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-bold text-lg mb-4 text-white">{section.title}</h3>
                        <ul className="space-y-3">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="md:col-start-2 lg:col-start-4 lg:flex lg:justify-end">
                    <div className="text-left lg:text-right">
                        <Link href="/" className="flex items-center justify-start lg:justify-end space-x-2 mb-4">
                            <img src="https://i.imgur.com/aUI6WX7.png" alt="ExpertizDigital Logo" className="h-8 w-auto brightness-0 invert" />
                            <span className="text-2xl font-bold text-white">Expertiz<span className="text-primary">Digital</span></span>
                        </Link>
                        <h3 className="font-bold text-lg mb-4 mt-8 text-white">Redes sociales</h3>
                        <div className="flex items-center justify-start lg:justify-end space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href} className="text-muted-foreground hover:text-white transition-colors duration-300">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
            <p>
                &copy; {new Date().getFullYear()} ExpertizDigital. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
