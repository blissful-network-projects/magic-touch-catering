
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCateringButton from "@/components/FloatingCateringButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Touch Catering - Premium Catering Services in Phoenix, AZ",
  description: "Magic Touch Catering offers premium catering services in Phoenix, AZ for weddings, corporate events, and private parties. 25+ years of culinary excellence with pricing from $24-$38 per person.",
  keywords: "catering Phoenix, wedding catering, corporate catering, private party catering, Scottsdale catering, Arizona catering, gourmet catering, professional catering services, catering pricing",
};

export default function Home() {
  return (
    <>
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
