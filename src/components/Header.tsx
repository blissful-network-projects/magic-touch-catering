"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const handleDragStart = (e: React.DragEvent, item: { id: string; name: string; category: string }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const requestData = {
        ...formData,
        cateringItems: cateringItems,
      };

      const response = await fetch('/api/catering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("Thank you! Your catering request has been submitted. We'll contact you within 24 hours to discuss your event details.");
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
        setCateringItems([]);
        setPlannerOpen(false);
      } else {
        throw new Error('Failed to submit catering request');
      }
    } catch (error) {
      console.error('Catering form error:', error);
      alert('There was an error submitting your catering request. Please try again or call us directly.');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-[#9B8FC7]/20"
            : "bg-gradient-to-b from-white/90 via-white/80 to-white/70 backdrop-blur-md"
        }`}
      >
        {/* Elegant top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9B8FC7] via-[#F1E6D1] to-[#9B8FC7]"></div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          
          {/* Clickable Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                width={100}
                height={100}
                className="
                  h-5 w-auto object-contain origin-left
                  sm:h-6
                  md:h-7
                  lg:h-8
                  xl:h-9
                "
              />
            </Link>
          </div>

          {/* Minimalist Desktop Navigation */}
          {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                Services
              </Link>
              <Link
                href="/menu"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide"
              >
                Contact
              </Link>
            </nav>

          {/* Plan Catering Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              className={`hidden sm:block transition-all duration-500 ${
                showPlanButton
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setPlannerOpen(true)}
                className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#9B8FC7] to-[#7D6DB8] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 transform hover:scale-105"
              >
                <ClipboardDocumentListIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium tracking-wide text-xs sm:text-sm">
                  Plan Catering
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#9B8FC7]/20">
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-6 space-y-2 sm:space-y-4">
              <Link
                href="/"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/menu"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block py-2 sm:py-3 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors font-medium text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Plan Catering Button */}
              <div className="pt-4 border-t border-[#9B8FC7]/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPlannerOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#9B8FC7] to-[#7D6DB8] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 transform hover:scale-105"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5" />
                  <span className="font-medium tracking-wide text-sm">
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
          <div className="bg-[#1B1B1B] border border-[#9B8FC7]/20 rounded-2xl w-full max-w-7xl h-[95vh] sm:h-[90vh] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#9B8FC7]/20">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-[#F1E6D1] tracking-wide">
                Create Your Catering Experience
              </h2>
              <button
                onClick={() => setPlannerOpen(false)}
                className="text-[#F1E6D1] hover:text-[#9B8FC7] transition-colors p-1"
              >
                <XCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden h-full overflow-y-auto">
              <div className="p-4 space-y-6">
                {/* Available Items - Mobile */}
                <div>
                  <h3 className="text-base sm:text-lg font-light text-[#F9F7F4] mb-3 tracking-wide">
                    Available Items
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          const newItem: CateringItem = {
                            ...item,
                            id: `${item.id}-${Date.now()}`,
                            quantity: 1,
                          };
                          setCateringItems([...cateringItems, newItem]);
                        }}
                        className="p-3 sm:p-4 bg-[#9B8FC7]/10 border border-[#9B8FC7]/20 rounded-lg cursor-pointer hover:bg-[#9B8FC7]/20 transition-colors"
                      >
                        <div className="text-[#F1E6D1] font-medium text-sm">
                          {item.name}
                        </div>
                        <div className="text-[#9B8FC7] text-xs mt-1">
                          {item.category}
                        </div>
                        <div className="text-[#F1E6D1]/60 text-xs mt-2">
                          Tap to add
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Your Selection - Mobile */}
                <div>
                  <h3 className="text-base sm:text-lg font-light text-[#F9F7F4] mb-3 tracking-wide">
                    Your Selection ({cateringItems.length} items)
                  </h3>
                  <div className="min-h-32 border-2 border-dashed border-[#9B8FC7]/30 rounded-lg p-3 sm:p-4">
                    {cateringItems.length === 0 ? (
                      <div className="text-center text-[#F1E6D1]/60 py-8">
                        <PlusIcon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-4 opacity-50" />
                        <p className="text-sm">Tap items above to add them</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {cateringItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-[#9B8FC7]/20 rounded-lg"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-[#F1E6D1] text-sm font-medium truncate">
                                {item.name}
                              </div>
                              <div className="text-[#9B8FC7] text-xs">
                                {item.category}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
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
                                className="w-14 sm:w-16 px-2 py-1 bg-black/30 border border-[#9B8FC7]/30 rounded text-[#F1E6D1] text-sm"
                              />
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-300 transition-colors p-1"
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

                {/* Event Details Form - Mobile */}
                <div>
                  <h3 className="text-base sm:text-lg font-light text-[#F9F7F4] mb-3 tracking-wide">
                    Event Details
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Company/Organization"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      />
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                      >
                        <option value="">Select Event Type *</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="private">Private Party</option>
                        <option value="conference">Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      placeholder="Expected Guest Count *"
                      required
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                    />
                    <textarea
                      placeholder="Additional Requirements or Special Requests"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm resize-none"
                    />
                    <button
                      type="submit"
                      disabled={cateringItems.length === 0}
                      className="w-full px-6 py-3 bg-[#9B8FC7] text-white rounded-lg hover:bg-[#9B8FC7]/90 transition-colors font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      Request Custom Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex h-full">
              {/* Left Panel - Available Items */}
              <div className="w-1/3 p-6 border-r border-[#9B8FC7]/20 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
                  Available Items
                </h3>
                <div className="space-y-3">
                  {availableItems.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="p-4 bg-[#9B8FC7]/10 border border-[#9B8FC7]/20 rounded-lg cursor-move hover:bg-[#9B8FC7]/20 transition-colors"
                    >
                      <div className="text-[#F1E6D1] font-medium text-sm">
                        {item.name}
                      </div>
                      <div className="text-[#9B8FC7] text-xs mt-1">
                        {item.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Panel - Drop Zone */}
              <div className="w-1/3 p-6 overflow-y-auto">
                <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
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
                      ? "border-[#9B8FC7] bg-[#9B8FC7]/10"
                      : "border-[#9B8FC7]/30"
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
                          className="flex items-center justify-between p-3 bg-[#9B8FC7]/20 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="text-[#F1E6D1] text-sm font-medium">
                              {item.name}
                            </div>
                            <div className="text-[#9B8FC7] text-xs">
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
                              className="w-16 px-2 py-1 bg-black/30 border border-[#9B8FC7]/30 rounded text-[#F1E6D1] text-sm"
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
                <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm"
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
                      className="w-full px-4 py-3 bg-black/30 border border-[#9B8FC7]/30 rounded-lg text-[#F9F7F4] placeholder-[#F9F7F4]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={cateringItems.length === 0}
                    className="w-full px-6 py-3 bg-[#9B8FC7] text-white rounded-lg hover:bg-[#9B8FC7]/90 transition-colors font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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