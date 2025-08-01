"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#culture", label: "Cultura" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
          <img src="https://imgur.com/p8fziZ7.png" alt="ExpertizDigital Logo" className="h-8 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition-colors hover:text-primary"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
            <Link href="#contact">
                <Button className="rounded-full">Escríbenos</Button>
            </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs p-0 bg-background/95">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <img src="https://imgur.com/p8fziZ7.png" alt="ExpertizDigital Logo" className="h-8 w-auto" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="flex flex-col items-start space-y-2 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg w-full p-3 rounded-md font-medium transition-colors hover:text-primary hover:bg-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                    <Link href="#contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full rounded-full">Escríbenos</Button>
                    </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
