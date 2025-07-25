"use client";

import { useState, useEffect } from "react";

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('appetizers');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('menu');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'appetizers', name: 'Appetizers', description: 'Elegant beginnings' },
    { id: 'mains', name: 'Main Courses', description: 'Culinary masterpieces' },
    { id: 'desserts', name: 'Desserts', description: 'Sweet conclusions' },
    { id: 'beverages', name: 'Beverages', description: 'Perfect pairings' }
  ];

  const menuItems = {
    appetizers: [
      { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle and parmesan', price: 'Market Price' },
      { name: 'Seared Scallops', description: 'Pan-seared with cauliflower purée and pancetta', price: 'Market Price' },
      { name: 'Charcuterie Selection', description: 'Artisanal meats, aged cheeses, and accompaniments', price: 'Market Price' },
      { name: 'Oyster Bar', description: 'Fresh selection with mignonette and cocktail sauce', price: 'Market Price' }
    ],
    mains: [
      { name: 'Wagyu Beef Tenderloin', description: 'Herb-crusted with roasted vegetables and red wine jus', price: 'Market Price' },
      { name: 'Atlantic Salmon', description: 'Cedar plank grilled with lemon herb butter', price: 'Market Price' },
      { name: 'Duck Confit', description: 'Traditional French preparation with cherry gastrique', price: 'Market Price' },
      { name: 'Vegetarian Wellington', description: 'Seasonal vegetables in puff pastry with mushroom sauce', price: 'Market Price' }
    ],
    desserts: [
      { name: 'Chocolate Soufflé', description: 'Dark chocolate with vanilla bean crème anglaise', price: 'Market Price' },
      { name: 'Lemon Tart', description: 'Meyer lemon curd with candied lemon and meringue', price: 'Market Price' },
      { name: 'Tiramisu', description: 'Traditional Italian with espresso and mascarpone', price: 'Market Price' },
      { name: 'Seasonal Fruit Tart', description: 'Fresh fruits with pastry cream and apricot glaze', price: 'Market Price' }
    ],
    beverages: [
      { name: 'Wine Selection', description: 'Curated wines from renowned vineyards worldwide', price: 'Market Price' },
      { name: 'Craft Cocktails', description: 'Signature cocktails crafted by our mixologists', price: 'Market Price' },
      { name: 'Coffee Service', description: 'Artisan coffee and espresso selections', price: 'Market Price' },
      { name: 'Tea Collection', description: 'Premium teas from around the globe', price: 'Market Price' }
    ]
  };

  return (
    <section id="menu" className="relative py-32 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Culinary Artistry</p>
          <h2 className="text-4xl md:text-6xl font-thin text-[#F5F3F0] mb-6">
            Signature
            <span className="block text-[#9B8FC7]">Menu</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#F5F3F0]/70 leading-relaxed">
            Each dish is a masterpiece, crafted with the finest ingredients and presented with artistic flair. Our menus are fully customizable to suit your event&apos;s unique requirements.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#9B8FC7] text-white border-[#9B8FC7]'
                  : 'bg-transparent text-[#F5F3F0] border-[#9B8FC7]/30 hover:border-[#9B8FC7]'
              }`}
            >
              <div className="text-center">
                <div className="font-medium text-sm tracking-wide">{category.name}</div>
                <div className="text-xs opacity-70 mt-1">{category.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-2xl border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-light text-[#F1E6D1] group-hover:text-[#C7A965] transition-colors">
                  {item.name}
                </h3>
                <span className="text-[#C7A965] text-sm font-medium">{item.price}</span>
              </div>
              <p className="text-[#F1E6D1]/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#F1E6D1]/60 text-sm mb-6">All menus are customizable and pricing varies based on guest count and selections</p>
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openCateringPlanner'));
            }}
            className="px-8 py-4 border border-[#A8C4A0] text-[#A8C4A0] rounded-full hover:bg-[#A8C4A0] hover:text-black transition-all duration-300 font-medium tracking-wide"
          >
            Request Full Menu & Pricing
          </button>
        </div>
      </div>
    </section>
  );
}