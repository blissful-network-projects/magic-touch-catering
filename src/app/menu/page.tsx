
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Menu - Magic Touch Catering | Gourmet Cuisine & Custom Menus",
  description: "Explore our gourmet catering menu featuring appetizers, main courses, desserts, and beverages. Custom menus available for weddings, corporate events, and private parties in Phoenix, AZ.",
  keywords: "catering menu Phoenix, wedding menu, corporate catering menu, gourmet catering, custom menu design, appetizers, main courses, desserts, beverages",
  openGraph: {
    title: "Gourmet Catering Menu - Magic Touch Catering",
    description: "Discover our signature catering menu with customizable options for any event. Premium ingredients and artistic presentation.",
    type: "website",
  },
};

export default function MenuPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="pt-20">
        <Menu />
        
        {/* Enhanced Menu Content */}
        <section className="py-32 bg-gradient-to-b from-[#1B1B1B] to-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl heading-primary text-[#F5F3F0] mb-8">
                Cuisine
                <span className="block text-[#9B8FC7]">Specialties</span>
              </h2>
              <p className="max-w-3xl mx-auto text-[#F5F3F0]/80 body-luxury text-lg">
                Our culinary team specializes in diverse international cuisines, ensuring authentic flavors and exceptional presentation for every dish.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "American", description: "Classic comfort foods with gourmet twists", image: "/american-cuisine.jpg" },
                { name: "Italian", description: "Authentic pasta, risotto, and Mediterranean flavors", image: "/italian-cuisine.jpg" },
                { name: "French", description: "Sophisticated techniques and refined presentations", image: "/french-cuisine.jpg" },
                { name: "Mediterranean", description: "Fresh ingredients and healthy, flavorful dishes", image: "/mediterranean-cuisine.jpg" },
                { name: "Mexican", description: "Vibrant spices and traditional cooking methods", image: "/mexican-cuisine.jpg" },
                { name: "Indian", description: "Aromatic spices and authentic regional specialties", image: "/indian-cuisine.jpg" }
              ].map((cuisine, index) => (
                <div key={index} className="group bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300 overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#9B8FC7]/20 to-[#A8C4A0]/20 flex items-center justify-center">
                    <h3 className="text-2xl text-[#F5F3F0] heading-secondary">{cuisine.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#F5F3F0]/70 body-luxury">{cuisine.description}</p>
                  </div>
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
