
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/expertizdigital/" },
  { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/expertizdigital/?locale=es_LA" },
];

const footerSections = [
    {
        title: "Servicios",
        links: [
            { label: "Estrategias digitales", href: "#services" },
            { label: "Diseño web", href: "#services" },
            { label: "Publicidad inteligente", href: "#services" },
            { label: "Producción audiovisual", href: "#services" },
            { label: "Diseño gráfico", href: "#services" },
            { label: "Innovación con IA", href: "#services" },
        ],
    },
    {
        title: "Nosotros",
        links: [
            { label: "Nuestra Cultura", href: "#culture" },
            { label: "Innovación", href: "#about" },
            { label: "Resultados", href: "#about" },
            { label: "Contacto", href: "#contact" },
        ],
    },
]

export function Footer() {
  return (
    <footer className="bg-black/90 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="md:col-span-1 lg:col-span-2">
                     <Link href="/" className="flex items-center space-x-2 mb-4">
                        <img src="https://imgur.com/p8fziZ7.png" alt="ExpertizDigital Logo" className="h-8 w-auto" />
                    </Link>
                    <p className="text-white/70 max-w-sm mt-4 text-sm" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                        Agencia de marketing digital especializada en el sector automotriz. Diseñamos estrategias que generan demanda y medimos lo que realmente importa: prospectos calificados, citas y ventas concretadas.
                    </p>
                    <div className="flex items-center space-x-4 mt-6">
                        {socialLinks.map((social, index) => (
                            <Link key={index} href={social.href} className="text-primary hover:text-primary/80 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-bold text-lg mb-4 text-primary">{section.title}</h3>
                        <ul className="space-y-3">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-white/50">
            <p>
                &copy; {new Date().getFullYear()} ExpertizDigital. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
