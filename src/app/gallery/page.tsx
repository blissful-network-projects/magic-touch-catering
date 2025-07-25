
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Magic Touch Catering | Event Photos & Food Presentations",
  description: "View our portfolio of catered events, gourmet food presentations, and elegant setups. See why Magic Touch Catering is Phoenix's premier catering service.",
  keywords: "catering gallery, event photos, food presentation, wedding catering photos, corporate event photos, catering portfolio Phoenix",
  openGraph: {
    title: "Gallery - Magic Touch Catering Portfolio",
    description: "Browse our stunning catering portfolio showcasing elegant events and gourmet presentations.",
    type: "website",
  },
};

export default function GalleryPage() {
  const galleryImages = [
    { src: "/elegant-wedding-catering-setup.jpg", alt: "Elegant wedding catering setup", category: "Wedding" },
    { src: "/corporate-event-catering.jpg", alt: "Corporate event catering", category: "Corporate" },
    { src: "/luxury-catering-experience.jpg", alt: "Luxury catering experience", category: "Private" },
    { src: "/professional-catering-presentation.jpg", alt: "Professional catering presentation", category: "Corporate" },
    { src: "/gourmet-catering-display.jpg", alt: "Gourmet catering display", category: "Wedding" },
    { src: "/magic-touch-banquet-food.jpg", alt: "Magic Touch banquet food", category: "Banquet" },
    { src: "/artisan-food-presentation.jpg", alt: "Artisan food presentation", category: "Private" },
    { src: "/elegant-dessert-presentation.jpg", alt: "Elegant dessert presentation", category: "Wedding" },
    { src: "/luxury-appetizer-catering.jpg", alt: "Luxury appetizer catering", category: "Corporate" }
  ];

  return (
    <>
      <StructuredData />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-b from-[#1B1B1B] to-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Our Work</p>
              <h1 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
                Event
                <span className="block text-[#9B8FC7]">Gallery</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
              <p className="max-w-2xl mx-auto text-[#F5F3F0]/70 body-luxury">
                Explore our portfolio of extraordinary events and culinary masterpieces. Each image tells a story of precision, elegance, and unforgettable moments.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-[#9B8FC7] text-xs rounded-full mb-2 tracking-wide">
                      {image.category}
                    </span>
                    <h3 className="text-lg subheading-elegant">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-[#1B1B1B]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl heading-primary text-[#F5F3F0] mb-8">
              Ready to Create
              <span className="block text-[#9B8FC7]">Your Masterpiece?</span>
            </h2>
            <p className="text-[#F5F3F0]/80 body-luxury text-lg mb-12">
              Let us bring the same level of excellence and artistry to your next event. Contact us today to begin planning your extraordinary experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-[#1A1A1A] rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
              >
                Start Planning
              </a>
              <a
                href="/menu"
                className="px-10 py-4 border border-[#F5F3F0]/40 text-[#F5F3F0] hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10 transition-all duration-300 body-luxury font-light tracking-wide rounded-full"
              >
                View Menu
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
