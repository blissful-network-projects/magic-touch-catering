
"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CateringBusiness",
    "name": "Magic Touch Catering",
    "description": "Premium catering services in Phoenix, AZ specializing in weddings, corporate events, and private parties with over 25 years of culinary excellence.",
    "url": "https://magictouchcatering.com",
    "telephone": "+1-602-555-0123",
    "email": "info@magictouchcatering.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9343 E Shea Blvd B-135",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "postalCode": "85260",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5731",
      "longitude": "-111.8910"
    },
    "openingHours": [
      "Mo-Th 09:00-18:00",
      "Fr 09:00-19:00",
      "Sa 10:00-16:00"
    ],
    "priceRange": "$24-$38 per person",
    "servesCuisine": [
      "American", "Italian", "French", "Mediterranean", "Mexican", 
      "Spanish", "Indian", "Middle Eastern", "African", "Caribbean",
      "Latin American", "German", "Southern"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "hasMenu": "https://magictouchcatering.com/menu",
    "foundingDate": "1998",
    "numberOfEmployees": "25-50",
    "areaServed": [
      "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", 
      "Glendale", "Peoria", "Paradise Valley"
    ],
    "serviceType": [
      "Wedding Catering", "Corporate Catering", "Private Event Catering",
      "Buffet Service", "Plated Service", "Cocktail Reception", 
      "Hors d'oeuvres", "Bar Service"
    ],
    "dietaryOptions": [
      "Gluten Free", "Vegan", "Vegetarian", "Kosher", "Nut Free",
      "Lactose Free", "Organic"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2024-01-15",
        "reviewBody": "Magic Touch Catering made our wedding absolutely perfect. The food was exceptional and the service was flawless.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
