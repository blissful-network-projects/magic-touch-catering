
"use client";

import { useState, useEffect } from "react";

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Corporate Events",
      description: "Elevate your business gatherings with sophisticated dining experiences that impress clients and inspire teams.",
      image: "/corporate-event-catering.jpg",
      features: ["Executive Lunch Boxes", "Board Room Catering", "Company Celebrations"]
    },
    {
      title: "Wedding Celebrations",
      description: "Transform your special day into a culinary fairy tale with bespoke menus crafted for your love story.",
      image: "/elegant-wedding-catering-setup.jpg",
      features: ["Custom Wedding Menus", "Bridal Tastings", "Reception Dining"]
    },
    {
      title: "Private Parties",
      description: "Intimate gatherings deserve exceptional attention. We create memorable moments for your closest connections.",
      image: "/luxury-catering-experience.jpg",
      features: ["Personal Chef Service", "Cocktail Parties", "Anniversary Dinners"]
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#C7A965] text-sm tracking-[0.3em] uppercase mb-4 font-light">Our Expertise</p>
          <h2 className="text-4xl md:text-6xl font-thin text-[#F1E6D1] mb-6">
            Signature
            <span className="block text-[#C7A965]">Services</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C7A965] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B] border border-[#C7A965]/20 hover:border-[#C7A965]/40 transition-all duration-700 hover:transform hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#F1E6D1] mb-4 group-hover:text-[#C7A965] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#F1E6D1]/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#F1E6D1]/60">
                      <div className="w-1 h-1 bg-[#C7A965] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="text-[#C7A965] text-sm tracking-wider hover:text-[#F1E6D1] transition-colors group">
                  Learn More
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
