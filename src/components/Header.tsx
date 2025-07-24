
"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  XCircleIcon,
  PlusIcon,
  TrashIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface CateringItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [cateringItems, setCateringItems] = useState<CateringItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [showPlanButton, setShowPlanButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const availableItems = [
    { id: '1', name: 'Signature Appetizer Platter', category: 'Appetizers' },
    { id: '2', name: 'Gourmet Main Course', category: 'Mains' },
    { id: '3', name: 'Artisan Dessert Selection', category: 'Desserts' },
    { id: '4', name: 'Premium Beverage Package', category: 'Beverages' },
    { id: '5', name: 'Executive Lunch Box', category: 'Corporate' },
    { id: '6', name: 'Wedding Banquet Package', category: 'Wedding' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setShowPlanButton(scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDragStart = (e: React.DragEvent, item: any) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const item = JSON.parse(e.dataTransfer.getData('text/plain'));
    const newItem: CateringItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      quantity: 1
    };
    setCateringItems([...cateringItems, newItem]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCateringItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCateringItems(items => items.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { formData, cateringItems });
    alert('Thank you! We will contact you within 24 hours with a custom quote.');
    setPlannerOpen(false);
    setCateringItems([]);
    setFormData({
      name: '', email: '', phone: '', company: '', eventDate: '',
      eventType: '', guestCount: '', message: ''
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-[#C7A965]/20' 
          : 'bg-gradient-to-b from-white/90 via-white/80 to-white/70 backdrop-blur-md'
      }`}>
        {/* Elegant top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A965] via-[#F1E6D1] to-[#C7A965]"></div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Premium Logo Design */}
          <div className="flex items-center group">
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C7A965]/30 to-[#F1E6D1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Logo container with elegant border */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#C7A965] to-[#B8A157] p-0.5 shadow-lg">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-white shadow-inner">
                  <img
                    src="/magic-touch-catering-logo.svg"
                    alt="Magic Touch Catering"
                    className="w-10 h-auto filter brightness-0 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            
            {/* Brand text */}
            <div className="ml-4 hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#1B1B1B] to-[#3C4A39] bg-clip-text text-transparent">
                Magic Touch
              </h1>
              <p className="text-xs text-[#C7A965] font-medium tracking-[0.2em] uppercase">
                Catering
              </p>
            </div>
          </div>

          {/* Refined Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Menu', href: '#menu' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-[#1B1B1B] font-medium tracking-wide transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-[#C7A965] transition-colors duration-300">
                  {item.name}
                </span>
                {/* Elegant hover background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F1E6D1] to-[#C7A965]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
                {/* Subtle underline */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#C7A965] group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="flex items-center gap-4">
            <div className={`transition-all duration-500 ${
              showPlanButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
            }`}>
              <button 
                onClick={() => setPlannerOpen(true)}
                className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative flex items-center gap-2">
                  <SparklesIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold tracking-wide text-sm">Plan Event</span>
                </div>
              </button>
            </div>

            {/* Elegant Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-3 text-[#1B1B1B] hover:text-[#C7A965] transition-colors duration-300 rounded-full hover:bg-[#F1E6D1]/30"
              >
                <div className="relative">
                  {mobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Sophisticated Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#C7A965]/20 shadow-2xl">
            <div className="px-6 py-8 space-y-2">
              {/* Mobile Brand */}
              <div className="flex items-center justify-center pb-6 mb-6 border-b border-[#C7A965]/20">
                <div className="text-center">
                  <h2 className="text-lg font-bold bg-gradient-to-r from-[#1B1B1B] to-[#3C4A39] bg-clip-text text-transparent">
                    Magic Touch Catering
                  </h2>
                  <p className="text-xs text-[#C7A965] font-medium tracking-[0.2em] uppercase mt-1">
                    Exceptional Events
                  </p>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {[
                { name: 'Home', href: '#home' },
                { name: 'Menu', href: '#menu' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-[#1B1B1B] hover:text-[#C7A965] font-medium tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[#F1E6D1]/30 hover:to-[#C7A965]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setPlannerOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-semibold tracking-wide">Plan Your Event</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Catering Planner Popup */}
      {plannerOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] overflow-hidden relative shadow-2xl border border-[#C7A965]/20">
            {/* Premium Header */}
            <div className="flex items-center justify-between p-8 bg-gradient-to-r from-[#F1E6D1] to-white border-b border-[#C7A965]/20">
              <div>
                <h2 className="text-3xl font-bold text-[#1B1B1B] mb-2">Create Your Experience</h2>
                <p className="text-[#C7A965] font-medium tracking-wide">Luxury Catering Planner</p>
              </div>
              <button
                onClick={() => setPlannerOpen(false)}
                className="p-2 text-[#1B1B1B] hover:text-[#C7A965] transition-colors rounded-full hover:bg-[#F1E6D1]/50"
              >
                <XCircleIcon className="h-8 w-8" />
              </button>
            </div>

            <div className="flex h-full">
              {/* Available Items Panel */}
              <div className="w-1/3 p-8 border-r border-[#C7A965]/20 overflow-y-auto bg-gradient-to-b from-[#F1E6D1]/20 to-white">
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-6 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-[#C7A965]" />
                  Available Items
                </h3>
                <div className="space-y-4">
                  {availableItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="p-6 bg-white border-2 border-[#C7A965]/20 rounded-2xl cursor-move hover:border-[#C7A965] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-[#1B1B1B] font-semibold text-sm mb-2">{item.name}</div>
                      <div className="text-[#C7A965] text-xs font-medium uppercase tracking-wide">{item.category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Panel */}
              <div className="w-1/3 p-8 overflow-y-auto">
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-6">Your Selection</h3>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`min-h-64 border-3 border-dashed rounded-2xl p-6 transition-all duration-300 ${
                    dragOver ? 'border-[#C7A965] bg-[#F1E6D1]/30' : 'border-[#C7A965]/30 bg-[#F1E6D1]/10'
                  }`}
                >
                  {cateringItems.length === 0 ? (
                    <div className="text-center text-[#1B1B1B]/60 py-16">
                      <PlusIcon className="h-16 w-16 mx-auto mb-4 text-[#C7A965]/50" />
                      <p className="font-medium">Drag items here to build your catering package</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cateringItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#C7A965]/20 shadow-sm">
                          <div className="flex-1">
                            <div className="text-[#1B1B1B] text-sm font-semibold">{item.name}</div>
                            <div className="text-[#C7A965] text-xs font-medium uppercase tracking-wide mt-1">{item.category}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-16 px-3 py-2 bg-[#F1E6D1] border border-[#C7A965]/30 rounded-lg text-[#1B1B1B] text-sm font-medium focus:border-[#C7A965] focus:outline-none"
                            />
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-600 transition-colors p-1"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Form Panel */}
              <div className="w-1/3 p-8 overflow-y-auto bg-gradient-to-b from-white to-[#F1E6D1]/20">
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-6">Event Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    >
                      <option value="">Select Event Type *</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="private">Private Party</option>
                      <option value="conference">Conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Expected Guest Count *"
                      required
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Additional Requirements or Special Requests"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 bg-white border-2 border-[#C7A965]/20 rounded-xl text-[#1B1B1B] placeholder-[#1B1B1B]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={cateringItems.length === 0}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-white rounded-xl hover:shadow-lg transition-all duration-300 font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm transform hover:scale-[1.02]"
                  >
                    Request Custom Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
