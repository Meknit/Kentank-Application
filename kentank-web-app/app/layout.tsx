import type { Metadata, Viewport } from "next";
import { Rubik, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";
import { site } from "@/lib/site";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kentank - Premium Water Storage Solutions Kenya",
  description:
    "Kenya's leading manufacturer of premium water storage tanks. From 1,000L to 10,000L capacity — quality, durability, and reliability you can count on. Nationwide delivery & installation.",
  keywords: [
    "water tanks Kenya",
    "water storage tanks",
    "Kentank",
    "plastic water tanks",
    "Nairobi water tanks",
  ],
  openGraph: {
    title: "Kentank - Premium Water Storage Solutions Kenya",
    description:
      "Trusted by thousands across Kenya. From 1,000L to 10,000L capacity tanks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallFloat href={site.phones[0].href} />
        <WhatsAppFloat phone={site.whatsapp} />
      </body>
    </html>
  );
}
