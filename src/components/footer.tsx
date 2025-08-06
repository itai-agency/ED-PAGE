
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: "#" },
  { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/expertizdigital/?locale=es_LA" },
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
                        <h3 className="font-bold text-lg mb-4 text-primary">{section.title}</h3>
                        <ul className="space-y-3">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
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
                            <img src="https://imgur.com/p8fziZ7.png" alt="ExpertizDigital Logo" className="h-8 w-auto" />
                        </Link>
                        <h3 className="font-bold text-lg mb-4 mt-8 text-primary">Redes sociales</h3>
                        <div className="flex items-center justify-start lg:justify-end space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href} className="text-primary hover:text-primary/80 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
            <p>
                &copy; {new Date().getFullYear()} ExpertizDigital. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
