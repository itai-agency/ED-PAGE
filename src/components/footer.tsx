import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} DeMo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
