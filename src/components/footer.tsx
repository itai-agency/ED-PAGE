import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, } from "lucide-react";

const socials = [
  { href: "https://www.facebook.com/expertizdigital/?locale=es_LA", Icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
  { href: "https://www.instagram.com/expertizdigital/", Icon: Instagram, label: "Instagram" },
];

const aboutLinks = [
  { label: "How it works", href: "#" },
  { label: "Featured", href: "#" },
  { label: "Partnership", href: "#" },
  { label: "Business Relation", href: "#" },
];

const communityLinks = [
  { label: "Events", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Podcast", href: "#" },
  { label: "Invite a friend", href: "#" },
];

const socialTextLinks = [
  { label: "Discord", href: "https://discord.com" },
  { label: "Instagram", href: "https://www.instagram.com/expertizdigital/" },
  { label: "Twitter", href: "https://twitter.com" },
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
              Our vision is to provide convenience and help increase your sales business.
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
            <h3 className="text-white font-semibold mb-4">About</h3>
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
            <h3 className="text-white font-semibold mb-4">Community</h3>
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
            <h3 className="text-white font-semibold mb-4">Socials</h3>
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
          <p>©{year} Company Name. All rights reserved</p>

          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
