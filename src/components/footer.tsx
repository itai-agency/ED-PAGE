import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold font-headline text-xl">
              Elegant Entry
            </Link>
            <p className="text-sm mt-1">First impressions that last.</p>
          </div>
          <div className="mb-4 md:mb-0">
             <div className="flex justify-center md:justify-start space-x-4">
                <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Elegant Entry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
