
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Magic Touch Catering | Catering Questions & Answers",
  description: "Find answers to frequently asked questions about Magic Touch Catering services, pricing, dietary accommodations, and event planning in Phoenix, AZ.",
  keywords: "catering FAQ, catering prices Phoenix, wedding catering cost, corporate catering FAQ, dietary accommodations catering",
  openGraph: {
    title: "FAQ - Magic Touch Catering | Catering Questions & Answers",
    description: "Find answers to frequently asked questions about Magic Touch Catering services, pricing, and event planning.",
    url: "https://magictouchcatering.com/faq"
  }
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
