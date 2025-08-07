
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-1.001z"/>
  </svg>
);


export function WhatsappButton() {
  const text = "Hola ExpertizDigital, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/584141327273?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
                size="icon"
                className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                aria-label="Contactar por WhatsApp"
            >
                <WhatsAppIcon />
            </Button>
        </Link>
    </div>
  );
}
