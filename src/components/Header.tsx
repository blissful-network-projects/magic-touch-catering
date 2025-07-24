"use client";

import { useState, useEffect } from "react";
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
  const [showPlanButton, setShowPlanButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  });

  const availableItems = [
    { id: "1", name: "Signature Appetizer Platter", category: "Appetizers" },
    { id: "2", name: "Gourmet Main Course", category: "Mains" },
    { id: "3", name: "Artisan Dessert Selection", category: "Desserts" },
    { id: "4", name: "Premium Beverage Package", category: "Beverages" },
    { id: "5", name: "Executive Lunch Box", category: "Corporate" },
    { id: "6", name: "Wedding Banquet Package", category: "Wedding" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setShowPlanButton(scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDragStart = (e: React.DragEvent, item: any) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const item = JSON.parse(e.dataTransfer.getData("text/plain"));
    const newItem: CateringItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      quantity: 1,
    };
    setCateringItems([...cateringItems, newItem]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCateringItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCateringItems((items) => items.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { formData, cateringItems });
    alert(
      "Thank you! We will contact you within 24 hours with a custom quote.",
    );
    setPlannerOpen(false);
    setCateringItems([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      eventDate: "",
      eventType: "",
      guestCount: "",
      message: "",
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-brand-background)]/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-[var(--color-brand-primary)]/20"
            : "bg-gradient-to-b from-[var(--color-brand-background)]/90 via-[var(--color-brand-background)]/80 to-[var(--color-brand-background)]/70 backdrop-blur-md"
        }`}
      >
        {/* Elegant top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-accent)] to-[var(--color-brand-primary)]"></div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Scaled Logo */}
          <div className="flex items-center">
            <img
              src="/magic-touch-catering-logo.svg"
              alt="Magic Touch Catering"
              className="h-6 w-auto scale-700 origin-left object-contain"
            />
          </div>
          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "Home", href: "#home" },
              { name: "Menu", href: "#menu" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--color-brand-contrast)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Plan Catering Button */}
          <div className="flex items-center gap-4">
            <div
              className={`transition-all duration-500 ${
                showPlanButton
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setPlannerOpen(true)}
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-black rounded-full hover:shadow-2xl hover:shadow-[#C7A965]/30 transition-all duration-300 transform hover:scale-105"
              >
                <ClipboardDocumentListIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium tracking-wide text-sm">
                  Plan Catering
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1B1B1B] hover:text-[#C7A965] transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#C7A965]/20">
            <div className="px-6 py-6 space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Menu", href: "#menu" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-[#1B1B1B] hover:text-[#C7A965] font-medium transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setPlannerOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-black rounded-full hover:shadow-xl transition-all duration-300"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5" />
                  <span className="font-medium tracking-wide">
                    Plan Catering
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Catering Planner Popup */}
      {plannerOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#1B1B1B] border border-[#C7A965]/20 rounded-2xl w-full max-w-5xl h-[90vh] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#C7A965]/20">
              <h2 className="text-2xl font-light text-[#F1E6D1] tracking-wide">
                Create Your Catering Experience
              </h2>
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
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">
                  Available Items
                </h3>
                <div className="space-y-3">
                  {availableItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="p-4 bg-[#C7A965]/10 border border-[#C7A965]/20 rounded-lg cursor-move hover:bg-[#C7A965]/20 transition-colors"
                    >
                      <div className="text-[#F1E6D1] font-medium text-sm">
                        {item.name}
                      </div>
                      <div className="text-[#C7A965] text-xs mt-1">
                        {item.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Panel - Drop Zone */}
              <div className="w-1/3 p-6 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">
                  Your Selection
                </h3>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`min-h-64 border-2 border-dashed rounded-lg p-4 transition-colors ${
                    dragOver
                      ? "border-[#C7A965] bg-[#C7A965]/10"
                      : "border-[#C7A965]/30"
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
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 bg-[#C7A965]/20 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="text-[#F1E6D1] text-sm font-medium">
                              {item.name}
                            </div>
                            <div className="text-[#C7A965] text-xs">
                              {item.category}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value),
                                )
                              }
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
                <h3 className="text-lg font-light text-[#F1E6D1] mb-4 tracking-wide">
                  Event Details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#C7A965]/30 rounded-lg text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Additional Requirements or Special Requests"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
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
