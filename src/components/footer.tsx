import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, } from "lucide-react";

const socials = [
  { href: "https://www.facebook.com/expertizdigital/?locale=es_LA", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/expertizdigital/", Icon: Instagram, label: "Instagram" },
];

const aboutLinks = [
  { label: "Cómo funciona", href: "#" },
  { label: "Destacado", href: "#" },
  { label: "Asociación", href: "#" },
  { label: "Relacion comercial", href: "#" },
];

const communityLinks = [
  { label: "Blog", href: "#" },
  { label: "Podcast", href: "#" },
];

const socialTextLinks = [
  { label: "Instagram", href: "https://www.instagram.com/expertizdigital/" },
  { label: "Facebook", href: "https://www.facebook.com/expertizdigital/?locale=es_LA" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2A313A] text-white">
      <div className="container mx-auto px-6 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + vision + social bubbles */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="https://imgur.com/egofLQq.png"
                alt="ExpertizDigital"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            <p
              className="mt-6 text-sm text-white/70 leading-relaxed"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Nuestra visión es proporcionar comodidad y ayudar a aumentar tus ventas.
            </p> 

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white
                             hover:bg-orange-600 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nosotros</h3>
            <ul className="space-y-3 text-white/80">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Comunidad</h3>
            <ul className="space-y-3 text-white/80">
              {communityLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials (text list) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-3 text-white/80">
              {socialTextLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors" target="_blank">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/15" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/60">
          <p>©{year} ExpertizDigital. Todos los derechos reservados</p>

          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacidad y política
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
