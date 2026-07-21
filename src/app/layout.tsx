import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { JsonLd } from "@/components/layout/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Zeepro | Licensed Interior Renovation, Construction & Technical Services UAE",
    template: "%s | Zeepro",
  },
  description:
    "Zeepro is a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
  metadataBase: new URL("https://zeepro.ae"),
  openGraph: {
    title: "Zeepro | Licensed Interior Renovation, Construction & Technical Services UAE",
    description:
      "Zeepro is a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
    url: "https://zeepro.ae",
    siteName: "Zeepro",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/zeepro_logo.png",
        width: 1200,
        height: 630,
        alt: "Zeepro | Licensed Interior Renovation, Construction & Technical Services UAE",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:inset-inline-start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
