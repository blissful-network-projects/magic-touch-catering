
"use client";

import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  XCircleIcon,
  PlusIcon,
  TrashIcon,
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
    // Handle form submission
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
      <header className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C7A965]/30 bg-white/10 backdrop-blur-sm">
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="max-h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white text-sm tracking-wider font-light">
            <a href="#home" className="hover:text-[#C7A965] transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C7A965] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="hover:text-[#C7A965] transition-all duration-300 relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C7A965] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-[#C7A965] transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C7A965] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-[#C7A965] transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C7A965] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Plan Catering Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => setPlannerOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 border border-[#C7A965]/50 text-[#C7A965] rounded-full hover:bg-[#C7A965] hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 text-sm tracking-wide"
            >
              <ClipboardDocumentListIcon className="h-4 w-4" />
              Plan Catering
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 py-6 space-y-4">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-[#C7A965] transition-all duration-300 py-2 text-sm tracking-wider"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setPlannerOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-[#C7A965]/50 text-[#C7A965] rounded-full hover:bg-[#C7A965] hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 text-sm tracking-wide mt-4"
            >
              <ClipboardDocumentListIcon className="h-4 w-4" />
              Plan Catering
            </button>
          </div>
        )}
      </header>

      {/* Catering Planner Popup */}
      {plannerOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#1B1B1B] border border-[#C7A965]/20 rounded-2xl w-full max-w-5xl h-[90vh] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#C7A965]/20">
              <h2 className="text-2xl font-light text-[#F1E6D1] tracking-wide">Create Your Catering Experience</h2>
              <button
                onClick={() => setPlannerOpen(false)}
                className="text-[#F1E6D1] hover:text-[#C7A965] transition-colors"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex h-full">
              {/* Left Panel - Available Items */}
              <div className="w-1/3 p-6 border-r border-[#C7A965]/20 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">Available Items</h3>
                <div className="space-y-3">
                  {availableItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="p-4 bg-[#C7A965]/10 border border-[#C7A965]/20 rounded-lg cursor-move hover:bg-[#C7A965]/20 transition-colors"
                    >
                      <div className="text-[#F1E6D1] font-medium text-sm">{item.name}</div>
                      <div className="text-[#C7A965] text-xs mt-1">{item.category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Panel - Drop Zone */}
              <div className="w-1/3 p-6 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">Your Selection</h3>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`min-h-64 border-2 border-dashed rounded-lg p-4 transition-colors ${
                    dragOver ? 'border-[#C7A965] bg-[#C7A965]/10' : 'border-[#C7A965]/30'
                  }`}
                >
                  {cateringItems.length === 0 ? (
                    <div className="text-center text-[#F1E6D1]/60 py-12">
                      <PlusIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      Drag items here to build your catering package
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cateringItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-[#C7A965]/20 rounded-lg">
                          <div className="flex-1">
                            <div className="text-[#F1E6D1] text-sm font-medium">{item.name}</div>
                            <div className="text-[#C7A965] text-xs">{item.category}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-16 px-2 py-1 bg-black/30 border border-[#C7A965]/30 rounded text-[#F1E6D1] text-sm"
                            />
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
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

              {/* Right Panel - Contact Form */}
              <div className="w-1/3 p-6 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">Event Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Additional Requirements or Special Requests"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={cateringItems.length === 0}
                    className="w-full px-6 py-3 bg-[#C7A965] text-black rounded-lg hover:bg-[#C7A965]/90 transition-colors font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
