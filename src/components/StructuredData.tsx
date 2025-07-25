
"use client";

export default function StructuredData() {
  // Main Business Schema
  const businessSchema = {
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
      {
        "@type": "City",
        "name": "Phoenix",
        "containedInPlace": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      {
        "@type": "City",
        "name": "Scottsdale",
        "containedInPlace": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      {
        "@type": "City",
        "name": "Tempe",
        "containedInPlace": {
          "@type": "State",
          "name": "Arizona"
        }
      }
    ],
    "serviceType": [
      "Wedding Catering", "Corporate Catering", "Private Event Catering",
      "Buffet Service", "Plated Service", "Cocktail Reception", 
      "Hors d'oeuvres", "Bar Service"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Catering",
          "description": "Complete wedding catering services with customizable menus"
        },
        "priceRange": "$28-$38 per person",
        "areaServed": "Phoenix Metropolitan Area"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Catering",
          "description": "Professional corporate event catering and business lunch services"
        },
        "priceRange": "$24-$32 per person",
        "areaServed": "Phoenix Metropolitan Area"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Buffet Service",
            "description": "Self-service buffet setup with chafing dishes and serving utensils"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plated Service",
            "description": "Elegant plated dinner service with professional waitstaff"
          }
        }
      ]
    },
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
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "datePublished": "2024-02-10",
        "reviewBody": "Outstanding corporate catering service. Professional, punctual, and delicious food that impressed all our clients.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/magictouchcatering",
      "https://www.instagram.com/magictouchcatering",
      "https://www.linkedin.com/company/magic-touch-catering"
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Magic Touch Catering",
    "image": "https://magictouchcatering.com/magic-touch-catering-logo.svg",
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
      "latitude": 33.5731,
      "longitude": -111.8910
    },
    "url": "https://magictouchcatering.com",
    "telephone": "+1-602-555-0123",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your pricing range for catering services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our catering pricing ranges from $24-$38 per person, depending on the menu selection and service style. Wedding packages typically range $28-$38 per person, while corporate events range $24-$32 per person."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accommodate dietary restrictions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we accommodate various dietary restrictions including gluten-free, vegan, vegetarian, kosher, nut-free, lactose-free, and organic options. Please inform us of any dietary needs when booking."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve the greater Phoenix metropolitan area including Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale, Peoria, Paradise Valley, Fountain Hills, Cave Creek, Carefree, and Gilbert."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 4-6 weeks in advance for most events. For wedding catering, we suggest 2-3 months in advance, especially during peak season (October-May in Arizona)."
        }
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Magic Touch Catering",
    "url": "https://magictouchcatering.com",
    "logo": "https://magictouchcatering.com/magic-touch-catering-logo.svg",
    "description": "Premium catering services in Phoenix, Arizona with over 25 years of culinary excellence",
    "foundingDate": "1998",
    "founder": {
      "@type": "Person",
      "name": "Magic Touch Catering Team"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-602-555-0123",
      "contactType": "customer service",
      "email": "info@magictouchcatering.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9343 E Shea Blvd B-135",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "postalCode": "85260",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
