
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Magic Touch Catering | Get Your Free Quote Today",
  description: "Contact Magic Touch Catering for your next event. Located in Scottsdale, AZ. Get a free quote for wedding catering, corporate events, and private parties. Call or email today!",
  keywords: "contact Magic Touch Catering, Scottsdale catering, Phoenix catering contact, free catering quote, wedding catering consultation",
  openGraph: {
    title: "Contact Magic Touch Catering - Free Quote & Consultation",
    description: "Get in touch for your catering needs. Professional service in Phoenix and Scottsdale, Arizona.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="pt-20">
        <Contact />
        
        {/* Enhanced Contact Content */}
        <section className="py-32 bg-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl heading-primary text-[#F5F3F0] mb-8">
                Service
                <span className="block text-[#9B8FC7]">Areas</span>
              </h2>
              <p className="max-w-3xl mx-auto text-[#F5F3F0]/80 body-luxury text-lg">
                We proudly serve the greater Phoenix metropolitan area with our premium catering services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Phoenix", "Scottsdale", "Tempe", "Mesa",
                "Chandler", "Glendale", "Peoria", "Paradise Valley",
                "Fountain Hills", "Cave Creek", "Carefree", "Gilbert"
              ].map((city, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-[#1B1B1B] to-[#2A2A2A] rounded-xl border border-[#9B8FC7]/20">
                  <h3 className="text-lg text-[#A8C4A0] subheading-elegant">{city}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
