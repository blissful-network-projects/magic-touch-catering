
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Magic Touch Catering | Event Photos & Food Presentation",
  description: "View our portfolio of elegant weddings, corporate events, and private parties catered by Magic Touch Catering in Phoenix, AZ. See our culinary artistry in action.",
  keywords: "catering gallery Phoenix, wedding catering photos, corporate event catering gallery, food presentation photos, catering portfolio Arizona",
  openGraph: {
    title: "Gallery - Magic Touch Catering | Event Photos & Food Presentation",
    description: "View our portfolio of elegant events and culinary presentations by Magic Touch Catering.",
    url: "https://magictouchcatering.com/gallery"
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
