
"use client";

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: object;
  noindex?: boolean;
  alternateLanguages?: { hreflang: string; href: string }[];
}

export default function AdvancedSEO({
  title = "Magic Touch Catering - Premium Catering Services in Scottsdale, AZ",
  description = "Magic Touch Catering offers premium catering services in Scottsdale, AZ for weddings, corporate events, and private parties. 25+ years of culinary excellence with pricing from $24-$38 per person.",
  keywords = "catering Scottsdale, wedding catering Scottsdale, corporate catering, private party catering, Scottsdale catering AZ, Arizona catering, gourmet catering Scottsdale, professional catering services Scottsdale, catering pricing Scottsdale",
  canonicalUrl,
  ogImage = "/magic-touch-catering-logo.svg",
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
  noindex = false,
  alternateLanguages = []
}: AdvancedSEOProps) {
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://magictouchcatering.com';
  const canonical = canonicalUrl || currentUrl;

  return (
    <>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Magic Touch Catering" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://magictouchcatering.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Magic Touch Catering - Premium Catering Services" />
      <meta property="og:site_name" content="Magic Touch Catering" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://magictouchcatering.com${ogImage}`} />
      <meta name="twitter:image:alt" content="Magic Touch Catering - Premium Catering Services" />
      
      {/* Geographic SEO */}
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content="Scottsdale, Arizona" />
      <meta name="geo.position" content="33.5731;-111.8910" />
      <meta name="ICBM" content="33.5731, -111.8910" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="9343 E Shea Blvd B-135" />
      <meta name="business:contact_data:locality" content="Scottsdale" />
      <meta name="business:contact_data:region" content="AZ" />
      <meta name="business:contact_data:postal_code" content="85260" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-602-555-0123" />
      <meta name="business:contact_data:email" content="info@magictouchcatering.com" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Alternate Languages */}
      {alternateLanguages.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
      ))}
      
      {/* Custom Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
