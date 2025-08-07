
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WhatsappButton() {
  const text = "Hola ExpertizDigital, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/584141327273?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-24 right-4 z-50">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
                size="icon"
                className="rounded-full h-14 w-14 bg-transparent hover:bg-transparent p-0 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                aria-label="Contactar por WhatsApp"
            >
                <img src="https://imgur.com/qAyeB6J.png" alt="WhatsApp" className="h-full w-full object-contain" />
            </Button>
        </Link>
    </div>
  );
}
