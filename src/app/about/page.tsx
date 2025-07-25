
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Magic Touch Catering | 25+ Years of Culinary Excellence",
  description: "Learn about Magic Touch Catering's 25+ year journey in Phoenix, AZ. Our story of culinary excellence, professional team, and commitment to creating extraordinary events.",
  keywords: "about Magic Touch Catering, Phoenix catering company, catering history, professional catering team, culinary excellence Phoenix",
  openGraph: {
    title: "About Magic Touch Catering - 25+ Years of Excellence",
    description: "Discover our story of culinary passion and professional excellence in Phoenix, Arizona catering.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="pt-20">
        <About />
        
        {/* Enhanced About Content */}
        <section className="py-32 bg-[#1B1B1B]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl heading-primary text-[#F5F3F0] mb-8">
                Our
                <span className="block text-[#9B8FC7]">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "Every dish, every detail, every moment crafted to perfection.",
                  icon: "⭐"
                },
                {
                  title: "Innovation",
                  description: "Constantly evolving our culinary techniques and presentation.",
                  icon: "🎨"
                },
                {
                  title: "Service",
                  description: "Anticipating needs and exceeding expectations at every turn.",
                  icon: "🤝"
                },
                {
                  title: "Passion",
                  description: "Genuine love for creating extraordinary culinary experiences.",
                  icon: "❤️"
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl text-[#A8C4A0] mb-4 subheading-elegant">{value.title}</h3>
                  <p className="text-[#F5F3F0]/70 body-luxury">{value.description}</p>
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
