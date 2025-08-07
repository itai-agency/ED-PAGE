
import Link from "next/link";

export function WhatsappButton() {
  const text = "Hola ExpertizDigital, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/584141327273?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-28 right-4 z-50">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
            <div
                className="rounded-full h-20 w-20 p-0 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 flex items-center justify-center"
            >
                <img src="https://i.imgur.com/CAp8mrY.png" alt="WhatsApp" className="h-full w-full object-contain" />
            </div>
        </Link>
    </div>
  );
}
