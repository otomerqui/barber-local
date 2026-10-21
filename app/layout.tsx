import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import BookingProvider from "@/components/BookingProvider";
import Cursor from "@/components/Cursor";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Self-hosted fonts (the same woff2 files the WordPress theme ships), no network needed at build time.
const bebas = localFont({
  src: "./fonts/bebas-neue-v14-latin-regular.woff2",
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-v40-latin-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/playfair-display-v40-latin-700italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-v21-latin-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/cormorant-garamond-v21-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-v21-latin-300italic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "./fonts/dm-sans-v15-latin-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/dm-sans-v15-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-v15-latin-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Barbería premium`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Barbería premium`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "es_CO",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <BookingProvider>
          <Cursor />
          <FadeIn />
          <Header />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
