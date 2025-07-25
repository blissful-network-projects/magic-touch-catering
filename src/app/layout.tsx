import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Magic Touch Catering | Premium Catering Services in Phoenix, AZ",
  description: "Magic Touch Catering offers luxury wedding catering, corporate event catering, and private party catering in Phoenix, AZ. Expert chefs, exceptional service, and unforgettable culinary experiences.",
  keywords: "catering Phoenix AZ, wedding catering Phoenix, corporate catering Arizona, private party catering, luxury catering services, event catering Phoenix, Magic Touch Catering",
  authors: [{ name: "Magic Touch Catering" }],
  creator: "Magic Touch Catering",
  publisher: "Magic Touch Catering",
  robots: "index, follow",
  openGraph: {
    title: "Magic Touch Catering | Premium Catering Services in Phoenix, AZ",
    description: "Luxury wedding, corporate, and private event catering in Phoenix, AZ. Expert chefs and exceptional service for unforgettable culinary experiences.",
    url: "https://magictouchcatering.com",
    siteName: "Magic Touch Catering",
    images: [
      {
        url: "/magic-touch-banquet-food.jpg",
        width: 1200,
        height: 630,
        alt: "Magic Touch Catering - Premium Food Presentation"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Touch Catering | Premium Catering Services in Phoenix, AZ",
    description: "Luxury wedding, corporate, and private event catering in Phoenix, AZ.",
    images: ["/magic-touch-banquet-food.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lora.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
      </body>
    </html>
  );
}
