import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://magictouchcatering.com'),
  title: {
    default: "Magic Touch Catering - Premium Catering Services in Phoenix, AZ",
    template: "%s | Magic Touch Catering"
  },
  description: "Magic Touch Catering offers premium catering services in Phoenix, AZ for weddings, corporate events, and private parties. 25+ years of culinary excellence with customizable menus and professional service.",
  keywords: "catering Phoenix, wedding catering, corporate catering, private party catering, Scottsdale catering, Arizona catering, gourmet catering, professional catering services",
  authors: [{ name: "Magic Touch Catering" }],
  creator: "Magic Touch Catering",
  publisher: "Magic Touch Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Magic Touch Catering - Premium Catering Services in Phoenix, AZ",
    description: "25+ years of culinary excellence. Professional catering for weddings, corporate events, and private parties in Phoenix and Scottsdale.",
    url: "https://magictouchcatering.com",
    siteName: "Magic Touch Catering",
    images: [
      {
        url: "/magic-touch-catering-logo.svg",
        width: 1200,
        height: 630,
        alt: "Magic Touch Catering - Premium Catering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Touch Catering - Premium Catering Services",
    description: "25+ years of culinary excellence in Phoenix, AZ",
    images: ["/magic-touch-catering-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${lora.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}