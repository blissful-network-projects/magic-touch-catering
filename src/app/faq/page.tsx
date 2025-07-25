
"use client";

import { useState } from "react";

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      id: "pricing",
      title: "Pricing & Packages",
      questions: [
        {
          question: "What is the average catering price per person for plated service?",
          answer: "$38 per person for our premium plated service, which includes expertly prepared dishes served directly to your guests with professional presentation."
        },
        {
          question: "What is the average catering price per person for buffet service?",
          answer: "$24 per person for our buffet service, featuring a diverse selection of gourmet dishes with elegant presentation and serving stations."
        },
        {
          question: "What is the average catering price per person for stations?",
          answer: "$24 per person for our interactive station service, offering multiple themed food stations for a dynamic dining experience."
        },
        {
          question: "What is the average catering price per person for hors d'oeuvres?",
          answer: "$26 per person for our sophisticated hors d'oeuvres service, perfect for cocktail receptions and networking events."
        }
      ]
    },
    {
      id: "services",
      title: "Services & Inclusions",
      questions: [
        {
          question: "Which services are included in the cost of your full service wedding catering?",
          answer: "Our full service wedding catering includes professional set up, complete clean up, and elegant cake cutting service to ensure your special day runs seamlessly."
        },
        {
          question: "What event services do you provide?",
          answer: "We provide comprehensive event services including professional set up and thorough clean up, ensuring your event space is perfect from start to finish."
        },
        {
          question: "What catering services do you provide?",
          answer: "We offer a full range of catering services: Buffet service, Cocktail receptions, Elegant hors d'oeuvres, Premium plated service, and Interactive stations to suit any event style."
        }
      ]
    },
    {
      id: "bar",
      title: "Bar Services",
      questions: [
        {
          question: "Which services are included in the starting price for bar service?",
          answer: "Our bar service includes professional bartender(s) and house liquor selection to keep your guests well-served throughout your event."
        },
        {
          question: "What bar services do you provide?",
          answer: "We provide experienced, professional bartender(s) who can craft signature cocktails and manage your beverage service with expertise and flair."
        }
      ]
    },
    {
      id: "cuisine",
      title: "Cuisine & Dietary Options",
      questions: [
        {
          question: "What types of cuisine do you cater?",
          answer: "We specialize in a diverse range of cuisines including African, American, Caribbean, French, German, Indian, Italian, Latin American, Mediterranean, Mexican, Middle Eastern, Southern, and Spanish to accommodate any cultural preference."
        },
        {
          question: "What dietary needs can you accommodate?",
          answer: "We proudly accommodate all dietary requirements including Gluten Free, Lactose Free, Kosher, Nut Free, Organic, Vegan, and Vegetarian options to ensure every guest enjoys their meal."
        }
      ]
    },
    {
      id: "equipment",
      title: "Equipment & Rentals",
      questions: [
        {
          question: "What furniture can you provide?",
          answer: "We can provide elegant chairs and tables to complement your event's aesthetic and accommodate your guest count."
        },
        {
          question: "What service items can you provide?",
          answer: "We offer a complete range of service items including professional barware, fine china, chocolate fountain, premium flatware, glassware, and elegant linens for a sophisticated presentation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
            Everything You
            <span className="block text-[#9B8FC7]">Need to Know</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="text-[#F5F3F0]/70 body-luxury max-w-2xl mx-auto">
            Find answers to the most common questions about our catering services, pricing, and event planning process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {faqCategories.map((category) => (
              <div key={category.id} className="bg-[#2A2A2A] rounded-2xl border border-[#9B8FC7]/20 overflow-hidden">
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#9B8FC7]/10 transition-colors"
                >
                  <h2 className="text-xl heading-secondary text-[#F5F3F0]">{category.title}</h2>
                  <div className={`text-[#9B8FC7] transform transition-transform ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </div>
                </button>
                
                {openCategory === category.id && (
                  <div className="px-6 pb-6 space-y-6">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="border-l-2 border-[#A8C4A0]/30 pl-6">
                        <h3 className="text-[#A8C4A0] font-medium mb-3 body-luxury">{faq.question}</h3>
                        <p className="text-[#F5F3F0]/80 body-luxury leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#9B8FC7]/10 to-[#A8C4A0]/10 rounded-2xl border border-[#9B8FC7]/20">
            <h3 className="text-2xl heading-secondary text-[#F5F3F0] mb-4">Still Have Questions?</h3>
            <p className="text-[#F5F3F0]/70 body-luxury mb-6">
              Our catering specialists are here to help you plan the perfect event.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
