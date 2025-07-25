
"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'private', name: 'Private Parties' },
    { id: 'food', name: 'Culinary Artistry' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/elegant-wedding-ceremony-setup.jpg',
      title: 'Elegant Wedding Ceremony',
      category: 'weddings',
      description: 'Stunning outdoor ceremony with premium catering setup'
    },
    {
      id: 2,
      image: '/luxury-wedding-reception-decor.jpg',
      title: 'Luxury Reception Decor',
      category: 'weddings',
      description: 'Sophisticated table settings and floral arrangements'
    },
    {
      id: 3,
      image: '/romantic-wedding-table-setting.jpg',
      title: 'Romantic Table Setting',
      category: 'weddings',
      description: 'Intimate dining experience with premium linens'
    },
    {
      id: 4,
      image: '/premium-wedding-catering-display.jpg',
      title: 'Premium Catering Display',
      category: 'weddings',
      description: 'Exquisite food presentation for wedding reception'
    },
    {
      id: 5,
      image: '/elegant-bridal-party-dining.jpg',
      title: 'Bridal Party Dining',
      category: 'weddings',
      description: 'Special dining experience for the bridal party'
    },
    {
      id: 6,
      image: '/sophisticated-wedding-venue-setup.jpg',
      title: 'Sophisticated Venue Setup',
      category: 'weddings',
      description: 'Complete venue transformation with elegant styling'
    },
    {
      id: 7,
      image: '/corporate-event-catering.jpg',
      title: 'Corporate Event Excellence',
      category: 'corporate',
      description: 'Professional catering for business gatherings'
    },
    {
      id: 8,
      image: '/business-lunch-catering.jpg',
      title: 'Executive Lunch Service',
      category: 'corporate',
      description: 'Premium lunch catering for corporate clients'
    },
    {
      id: 9,
      image: '/luxury-catering-experience.jpg',
      title: 'Luxury Private Event',
      category: 'private',
      description: 'Exclusive catering for intimate celebrations'
    },
    {
      id: 10,
      image: '/gourmet-catering-display.jpg',
      title: 'Gourmet Food Display',
      category: 'food',
      description: 'Artistic presentation of our signature dishes'
    },
    {
      id: 11,
      image: '/artisan-food-presentation.jpg',
      title: 'Artisan Food Presentation',
      category: 'food',
      description: 'Handcrafted culinary masterpieces'
    },
    {
      id: 12,
      image: '/elegant-dessert-presentation.jpg',
      title: 'Elegant Dessert Service',
      category: 'food',
      description: 'Sophisticated dessert presentation and service'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
            Gallery of
            <span className="block text-[#9B8FC7]">Excellence</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="text-[#F5F3F0]/70 body-luxury max-w-2xl mx-auto">
            Explore our portfolio of extraordinary events and culinary presentations that showcase our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#9B8FC7] text-white border-[#9B8FC7]'
                    : 'bg-transparent text-[#F5F3F0] border-[#9B8FC7]/30 hover:border-[#9B8FC7]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A2A] hover:transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl heading-secondary text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 body-luxury text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 bg-gradient-to-r from-[#9B8FC7]/10 to-[#A8C4A0]/10 rounded-2xl border border-[#9B8FC7]/20">
            <h3 className="text-3xl heading-secondary text-[#F5F3F0] mb-4">Ready to Create Your Masterpiece?</h3>
            <p className="text-[#F5F3F0]/70 body-luxury mb-8 max-w-2xl mx-auto">
              Let us bring the same level of excellence and artistry to your upcoming event.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
            >
              Start Planning Your Event
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
