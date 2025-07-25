
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
                  icon: (
                    <svg className="w-10 h-10 text-[#9B8FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "Constantly evolving our culinary techniques and presentation.",
                  icon: (
                    <svg className="w-10 h-10 text-[#A8C4A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Service",
                  description: "Anticipating needs and exceeding expectations at every turn.",
                  icon: (
                    <svg className="w-10 h-10 text-[#9B8FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Passion",
                  description: "Genuine love for creating extraordinary culinary experiences.",
                  icon: (
                    <svg className="w-10 h-10 text-[#A8C4A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20">
                  <div className="flex justify-center mb-6">{value.icon}</div>
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
