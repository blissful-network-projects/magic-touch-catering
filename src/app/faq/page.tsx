
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Magic Touch Catering | Pricing, Services & Dietary Options",
  description: "Find answers to common questions about Magic Touch Catering. Learn about our pricing ($24-$38 per person), services, dietary accommodations, and what's included in our catering packages.",
  keywords: "catering FAQ, catering pricing Phoenix, wedding catering cost, buffet service pricing, plated dinner cost, dietary accommodations catering",
  openGraph: {
    title: "FAQ - Magic Touch Catering | Pricing & Services",
    description: "Get answers about our catering services, pricing, and dietary options. Professional catering in Phoenix, AZ.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
