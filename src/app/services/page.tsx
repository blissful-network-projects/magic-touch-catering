
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Catering Services - Magic Touch Catering | Wedding, Corporate & Private Events",
  description: "Professional catering services in Phoenix, AZ. Specializing in wedding catering, corporate events, and private parties. Buffet, plated service, stations, and cocktail receptions.",
  keywords: "catering services Phoenix, wedding catering, corporate catering, private party catering, buffet service, plated dinner service, cocktail reception catering",
  openGraph: {
    title: "Professional Catering Services - Magic Touch Catering",
    description: "Elevate your events with our professional catering services in Phoenix, AZ. Wedding, corporate, and private event specialists.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="pt-20">
        <Services />
        
        {/* Enhanced Services Content */}
        <section className="py-32 bg-gradient-to-b from-[#1B1B1B] to-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl heading-primary text-[#F5F3F0] mb-8">
                  Why Choose
                  <span className="block text-[#9B8FC7]">Magic Touch?</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#A8C4A0] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl text-[#A8C4A0] mb-2 subheading-elegant">25+ Years of Excellence</h3>
                      <p className="text-[#F5F3F0]/80 body-luxury">Over two decades of creating unforgettable culinary experiences for discerning clients throughout Phoenix and Scottsdale.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#A8C4A0] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl text-[#A8C4A0] mb-2 subheading-elegant">Comprehensive Service</h3>
                      <p className="text-[#F5F3F0]/80 body-luxury">From setup to cleanup, we handle every detail so you can focus on enjoying your event and connecting with your guests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#A8C4A0] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl text-[#A8C4A0] mb-2 subheading-elegant">Dietary Accommodations</h3>
                      <p className="text-[#F5F3F0]/80 body-luxury">Expert accommodation of all dietary needs including gluten-free, vegan, kosher, and allergen-free options without compromising on taste.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/professional-catering-presentation.jpg"
                  alt="Professional catering presentation"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#9B8FC7] to-[#A8C4A0] p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">500+</div>
                    <div className="text-sm text-black/80 tracking-wider">Events Catered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
