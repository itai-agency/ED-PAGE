import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { WhatsappButton } from '@/components/whatsapp-button';
import { ScrollIndicator } from '@/components/scroll-indicator';

export const metadata: Metadata = {
  title: 'ExpertizDigital',
  description: 'Best Marketing Company',
  icons: {
    icon: 'https://i.imgur.com/4yti2TO.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        <Toaster />
        <ScrollIndicator />
        <ScrollToTopButton />
        <WhatsappButton />
      </body>
    </html>
  );
}
