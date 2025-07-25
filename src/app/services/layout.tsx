
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Services - Magic Touch Catering | Wedding, Corporate & Private Events",
  description: "Comprehensive catering services including wedding catering, corporate events, and private parties in Phoenix, AZ. Professional service, custom menus, and exceptional quality.",
  keywords: "wedding catering Phoenix, corporate catering Arizona, private party catering, event catering services, buffet catering, plated service catering",
  openGraph: {
    title: "Catering Services - Magic Touch Catering | Wedding, Corporate & Private Events",
    description: "Comprehensive catering services for weddings, corporate events, and private parties in Phoenix, AZ.",
    url: "https://magictouchcatering.com/services"
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
