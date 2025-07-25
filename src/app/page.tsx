
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCateringButton from "@/components/FloatingCateringButton";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Touch Catering - Scottsdale's #1 Premium Catering Service | Wedding & Corporate Events",
  description: "★★★★★ Award-winning catering in Scottsdale since 1998! Wedding, corporate & private event catering $24-$38/person. Serving 500+ events yearly. FREE consultation & quotes. Call (602) 555-0123",
  keywords: "catering Scottsdale AZ, wedding catering Scottsdale, corporate catering Scottsdale Arizona, private party catering Scottsdale, gourmet catering services Scottsdale, professional event catering Scottsdale, luxury catering Scottsdale Paradise Valley, best catering company Scottsdale, catering pricing Scottsdale, award winning catering services Arizona",
  alternates: {
    canonical: "https://magictouchcatering.com",
  },
  openGraph: {
    title: "Magic Touch Catering - Scottsdale's #1 Premium Catering Service",
    description: "★★★★★ Award-winning catering in Scottsdale since 1998! 500+ events yearly, $24-$38/person. FREE consultation!",
    url: "https://magictouchcatering.com",
    type: "website",
    images: [
      {
        url: "/elegant-wedding-catering-setup.jpg",
        width: 1200,
        height: 630,
        alt: "Magic Touch Catering - Elegant wedding catering setup in Phoenix Arizona",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Menu />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <FloatingCateringButton />
    </>
  );
}
