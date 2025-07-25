
export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Magic Touch Catering",
    "description": "Premium catering services for weddings, corporate events, and private parties in Phoenix, Arizona.",
    "url": "https://magictouchcatering.com",
    "logo": "https://magictouchcatering.com/magic-touch-catering-logo.svg",
    "image": "https://magictouchcatering.com/magic-touch-banquet-food.jpg",
    "telephone": "+1-480-555-0123",
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
      "latitude": "33.5761",
      "longitude": "-111.9318"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$24-$38",
    "servesCuisine": [
      "American",
      "Italian",
      "Mediterranean",
      "French",
      "Mexican",
      "Indian",
      "Spanish",
      "Middle Eastern"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.5761",
        "longitude": "-111.9318"
      },
      "geoRadius": "50"
    },
    "sameAs": [
      "https://www.facebook.com/AZMagicTouchCatering",
      "https://www.instagram.com/magic.touch.catering/",
      "https://www.weddingwire.com/biz/magic-touch-catering-phoenix/a0086a0120b94dd1.html"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://magictouchcatering.com",
    "name": "Magic Touch Catering",
    "image": "https://magictouchcatering.com/magic-touch-banquet-food.jpg",
    "telephone": "+1-480-555-0123",
    "email": "info@magictouchcatering.com",
    "url": "https://magictouchcatering.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9343 E Shea Blvd B-135",
      "addressLocality": "Scottsdale",
      "addressRegion": "Arizona",
      "postalCode": "85260",
      "addressCountry": "United States"
    },
    "description": "Magic Touch Catering provides premium catering services for weddings, corporate events, and private parties throughout Phoenix and Scottsdale, Arizona.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$24-$38 per person",
    "paymentAccepted": "Credit Card, Cash, Check",
    "currenciesAccepted": "USD"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Catering Services",
    "description": "Luxury wedding catering with custom menus, professional service, and elegant presentation.",
    "provider": {
      "@type": "Organization",
      "name": "Magic Touch Catering"
    },
    "areaServed": {
      "@type": "State",
      "name": "Arizona"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Catering",
            "description": "Full-service wedding catering with custom menus"
          },
          "price": "38",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "38",
            "priceCurrency": "USD",
            "unitText": "per person"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Catering",
            "description": "Professional catering for business events"
          },
          "price": "24",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "24",
            "priceCurrency": "USD",
            "unitText": "per person"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
