"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const [visible, setVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('faq');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Pricing",
      questions: [
        {
          question: "What is the average catering price per person for plated service?",
          answer: "$38 per person. Our plated service includes premium ingredients, professional presentation, and full table service with our experienced staff."
        },
        {
          question: "What is the average catering price per person for buffet service?",
          answer: "$24 per person. Our buffet service offers variety and flexibility while maintaining our signature quality and presentation standards."
        },
        {
          question: "What is the average catering price per person for stations?",
          answer: "$24 per person. Station service combines the elegance of plated dining with the interactive experience of buffet-style service."
        },
        {
          question: "What is the average catering price per person for hors d'oeuvres?",
          answer: "$26 per person. Our hors d'oeuvres packages include a variety of gourmet appetizers perfect for cocktail receptions and networking events."
        }
      ]
    },
    {
      category: "Wedding Services",
      questions: [
        {
          question: "Which services are included in the cost of your full service wedding catering?",
          answer: "Our full service wedding catering includes complete set up, professional clean up, and cake cutting service. We handle every detail so you can focus on your special day."
        },
        {
          question: "What is included in the starting price for bar service?",
          answer: "Our bar service includes professional bartender(s) and house liquor. Premium liquor, wine selections, and specialty cocktails are available as upgrades."
        }
      ]
    },
    {
      category: "Event Services",
      questions: [
        {
          question: "What event services do you provide?",
          answer: "We provide comprehensive event services including complete set up and clean up. Our team handles all logistics so your event runs seamlessly from start to finish."
        },
        {
          question: "What catering services do you provide?",
          answer: "We offer buffet service, cocktail receptions, hors d'oeuvres, plated dining, and station service. Each service style can be customized to match your event's unique requirements."
        }
      ]
    },
    {
      category: "Cuisine & Dietary Options",
      questions: [
        {
          question: "What types of cuisine do you cater?",
          answer: "We specialize in African, American, Caribbean, French, German, Indian, Italian, Latin American, Mediterranean, Mexican, Middle Eastern, Southern, and Spanish cuisines. Our diverse menu options ensure something special for every palate."
        },
        {
          question: "What dietary needs can you accommodate?",
          answer: "We accommodate Gluten Free, Lactose Free, Kosher, Nut Free, Organic, Vegan, and Vegetarian dietary requirements. Our chefs are experienced in creating delicious options for all dietary needs."
        }
      ]
    },
    {
      category: "Equipment & Bar Services",
      questions: [
        {
          question: "What bar services do you provide?",
          answer: "We provide professional bartender(s), complete bar setup, and full service throughout your event. Our experienced bartenders can craft both classic and signature cocktails."
        },
        {
          question: "What equipment can you provide?",
          answer: "We provide chairs, tables, barware, china, chocolate fountain, flatware, glassware, and linens. Our rental inventory ensures your event has everything needed for a sophisticated presentation."
        }
      ]
    },
    {
        category: "Booking",
        questions: [
          {
            question: "How far in advance should I book catering services?",
            answer: "We recommend booking 4-6 weeks in advance for most events. For weddings, we suggest 2-3 months in advance, especially during Arizona's peak season (October-May)."
          }
        ]
      }
  ];

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B]">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Common Questions</p>
          <h2 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
            Frequently Asked
            <span className="block text-[#9B8FC7]">Questions</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#F5F3F0]/70 body-luxury">
            Find answers to the most common questions about our catering services, pricing, and what makes Magic Touch Catering special.
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl heading-secondary text-[#A8C4A0] mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <div
                      key={questionIndex}
                      className="bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-center group"
                      >
                        <h4 className="text-lg text-[#F5F3F0] group-hover:text-[#9B8FC7] transition-colors body-luxury pr-4">
                          {item.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUpIcon className="h-5 w-5 text-[#9B8FC7] flex-shrink-0" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5 text-[#F5F3F0]/60 group-hover:text-[#9B8FC7] transition-colors flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="w-full h-px bg-gradient-to-r from-[#9B8FC7]/20 via-[#9B8FC7]/40 to-[#9B8FC7]/20 mb-4"></div>
                          <p className="text-[#F5F3F0]/80 body-luxury leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#F5F3F0]/60 text-sm mb-6 body-luxury">
            Still have questions? We're here to help create your perfect event.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-[#1A1A1A] rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}