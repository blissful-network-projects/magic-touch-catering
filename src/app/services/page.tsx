
"use client";

import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const servicePackages = [
    {
      title: "Wedding Catering Excellence",
      description: "Complete wedding catering service with premium attention to detail",
      price: "Starting at $38/person",
      image: "/elegant-wedding-catering-setup.jpg",
      features: [
        "Full service setup and cleanup",
        "Professional cake cutting service",
        "Customizable menu options",
        "Bridal tasting session",
        "Dedicated event coordinator",
        "Premium table settings",
        "Professional service staff"
      ],
      cuisines: ["American", "Italian", "Mediterranean", "French", "Mexican"]
    },
    {
      title: "Corporate Event Catering",
      description: "Professional catering solutions for business events and meetings",
      price: "Starting at $24/person",
      image: "/corporate-event-catering.jpg",
      features: [
        "Buffet and plated service options",
        "Interactive food stations",
        "Professional presentation",
        "Dietary accommodation",
        "Flexible timing options",
        "Corporate-friendly menus",
        "Setup and cleanup included"
      ],
      cuisines: ["American", "Asian", "Mediterranean", "Latin American", "Italian"]
    },
    {
      title: "Private Party Catering",
      description: "Intimate and elegant catering for special celebrations",
      price: "Starting at $26/person",
      image: "/luxury-catering-experience.jpg",
      features: [
        "Customized menu planning",
        "Elegant hors d'oeuvres service",
        "Professional bartender service",
        "Premium equipment rental",
        "Personalized service approach",
        "Special dietary accommodations",
        "Complete event coordination"
      ],
      cuisines: ["French", "Italian", "Spanish", "Middle Eastern", "Indian"]
    }
  ];

  const additionalServices = [
    {
      title: "Bar Services",
      description: "Professional bartending with premium selections",
      icon: "🍸",
      details: [
        "Experienced bartenders",
        "House liquor included",
        "Premium glassware",
        "Custom cocktail creation",
        "Wine and beer service",
        "Non-alcoholic options"
      ]
    },
    {
      title: "Equipment Rental",
      description: "Complete event furnishing and service items",
      icon: "🪑",
      details: [
        "Tables and chairs",
        "Premium china and flatware",
        "Professional barware",
        "Elegant linens",
        "Glassware collection",
        "Chocolate fountain"
      ]
    },
    {
      title: "Event Coordination",
      description: "Full-service event planning and management",
      icon: "📋",
      details: [
        "Professional setup service",
        "Complete cleanup",
        "Timeline coordination",
        "Vendor management",
        "Day-of coordination",
        "Emergency support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Our Expertise
          </p>
          <h1 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
            Comprehensive
            <span className="block text-[#9B8FC7]">Catering Services</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="text-[#F5F3F0]/70 body-luxury max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide exceptional catering services tailored to your unique vision and requirements.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {servicePackages.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/40 to-transparent"></div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl heading-secondary text-[#F5F3F0] mb-4">{service.title}</h2>
                      <p className="text-[#F5F3F0]/70 body-luxury mb-4">{service.description}</p>
                      <div className="text-[#A8C4A0] text-lg font-medium">{service.price}</div>
                    </div>
                    
                    <div>
                      <h3 className="text-[#9B8FC7] font-medium mb-3">Included Services:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#F5F3F0]/80 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#A8C4A0] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-[#9B8FC7] font-medium mb-3">Available Cuisines:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.cuisines.map((cuisine, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#9B8FC7]/20 text-[#F5F3F0] text-xs rounded-full border border-[#9B8FC7]/30"
                          >
                            {cuisine}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl heading-secondary text-[#F5F3F0] mb-4">Additional Services</h2>
            <p className="text-[#F5F3F0]/70 body-luxury max-w-2xl mx-auto">
              Complete your event with our comprehensive range of additional services and amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl heading-secondary text-[#F5F3F0] mb-3">{service.title}</h3>
                <p className="text-[#F5F3F0]/70 body-luxury mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-[#F5F3F0]/80 text-sm">
                      <div className="w-1 h-1 bg-[#A8C4A0] rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 bg-gradient-to-r from-[#9B8FC7]/10 to-[#A8C4A0]/10 rounded-2xl border border-[#9B8FC7]/20">
            <h3 className="text-3xl heading-secondary text-[#F5F3F0] mb-4">Ready to Plan Your Event?</h3>
            <p className="text-[#F5F3F0]/70 body-luxury mb-8 max-w-2xl mx-auto">
              Contact our catering specialists to discuss your vision and receive a custom quote tailored to your needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
            >
              Get Your Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
