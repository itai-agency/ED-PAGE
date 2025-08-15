'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'about', label: 'Nosotros' },
  { id: 'culture', label: 'Cultura' },
  { id: 'services', label: 'Servicios' },
  { id: 'locations', label: 'Presencia' },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      setActiveSection(sectionId);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      
      // Reset scrolling flag after scroll completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed right-[-90px] top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="flex items-center group transition-all duration-300"
          aria-label={`Ir a ${section.label}`}
        >
          <div className="flex items-center relative">
            <div 
              className={cn(
                'w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 flex items-center justify-center',
                activeSection === section.id ? 'bg-primary scale-125' : 'bg-background/80 hover:bg-background/60'
              )}
            >
              <div className={cn(
                'w-1.5 h-1.5 rounded-full bg-background transition-transform duration-300',
                activeSection === section.id ? 'scale-100' : 'scale-0'
              )} />
            </div>
            <span className="ml-3 opacity-0 group-hover:opacity-100 text-sm font-medium text-foreground bg-background/90 px-3 py-1 rounded-full shadow-sm transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
              {section.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
