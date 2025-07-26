import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AdvancedSEO from "@/components/AdvancedSEO";

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
    default: "Magic Touch Catering - Premium Catering Services in Scottsdale, AZ | Wedding & Corporate Events",
    template: "%s | Magic Touch Catering - Scottsdale's Premier Catering Service"
  },
  description: "★★★★★ Magic Touch Catering - Scottsdale's #1 premium catering service since 1998. Wedding, corporate & private event catering from $24-$38/person. Serving Scottsdale, Phoenix, Paradise Valley. FREE quotes!",
  keywords: "catering Scottsdale, wedding catering Scottsdale, corporate catering Scottsdale AZ, private party catering Scottsdale, gourmet catering services Scottsdale, professional catering Scottsdale Arizona, event catering Scottsdale, catering pricing Scottsdale, best catering company Scottsdale, luxury catering services Arizona",
  authors: [{ name: "Magic Touch Catering Team", url: "https://magictouchcatering.com/about" }],
  creator: "Magic Touch Catering",
  publisher: "Magic Touch Catering",
  category: "Food & Beverage",
  classification: "Catering Services",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://magictouchcatering.com",
    languages: {
      'en-US': 'https://magictouchcatering.com',
    },
  },
  openGraph: {
    title: "Magic Touch Catering - Premium Catering Services in Scottsdale, AZ | Wedding & Corporate Events",
    description: "★★★★★ Scottsdale's #1 premium catering service since 1998. Wedding, corporate & private event catering from $24-$38/person. Serving Scottsdale, Phoenix, Paradise Valley. FREE quotes!",
    url: "https://magictouchcatering.com",
    siteName: "Magic Touch Catering",
    images: [
      {
        url: "/magic-touch-catering-logo.svg",
        width: 1200,
        height: 630,
        alt: "Magic Touch Catering - Premium Catering Services in Phoenix Arizona",
        type: "image/svg+xml",
      },
      {
        url: "/elegant-wedding-catering-setup.jpg",
        width: 1200,
        height: 630,
        alt: "Elegant wedding catering setup by Magic Touch Catering",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
    emails: ["info@magictouchcatering.com"],
    phoneNumbers: ["+1-602-555-0123"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@magictouchcatering",
    creator: "@magictouchcatering",
    title: "Magic Touch Catering - Premium Catering Services in Scottsdale, AZ",
    description: "25+ years of culinary excellence in Scottsdale, AZ",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <AdvancedSEO />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="theme-color" content="#9B8FC7" />
        <meta name="msapplication-TileColor" content="#9B8FC7" />

        {/* Favicon hierarchy for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${lora.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <noscript>
          <div style={{padding: '20px', textAlign: 'center', backgroundColor: '#f3f4f6'}}>
            <p>This website works best with JavaScript enabled. Please enable JavaScript for the best experience.</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}