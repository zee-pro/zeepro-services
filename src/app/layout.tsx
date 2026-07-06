import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zeepro | Licensed Mechanical, Plumbing, Finishing & Steel Services UAE",
    template: "%s | Zeepro",
  },
  description:
    "Zeepro is a UAE-based licensed contractor specializing in mechanical, plumbing, interior finishing, and steel services.",
  metadataBase: new URL("https://zeepro.ae"),
  openGraph: {
    title: "Zeepro | Licensed Mechanical, Plumbing, Finishing & Steel Services UAE",
    description:
      "Zeepro is a UAE-based licensed contractor specializing in mechanical, plumbing, interior finishing, and steel services.",
    url: "https://zeepro.ae",
    siteName: "Zeepro",
    locale: "en_AE",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
