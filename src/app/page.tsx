
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCateringButton from "@/components/FloatingCateringButton";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Menu />
        <Contact />
        <Footer />
      </main>
      <FloatingCateringButton />
    </>
  );
}
