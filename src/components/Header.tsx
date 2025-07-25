
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
  const [activeTab, setActiveTab] = useState<'items' | 'selection' | 'form'>('items');
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

  const addItemMobile = (item: { id: string; name: string; category: string }) => {
    const newItem: CateringItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      quantity: 1,
    };
    setCateringItems([...cateringItems, newItem]);
    setActiveTab('selection');
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
        setActiveTab('items');
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
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                width={100}
                height={100}
                className="h-5 sm:h-6 w-auto object-contain origin-left scale-100 sm:scale-110 md:scale-125 lg:scale-150 xl:scale-175"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              Services
            </Link>
            <Link
              href="/menu"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              Gallery
            </Link>
            <Link
              href="/faq"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Plan Catering Button - Hidden on mobile, visible on tablet+ */}
            <div
              className={`hidden sm:block transition-all duration-500 ${
                showPlanButton
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setPlannerOpen(true)}
                className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#9B8FC7] to-[#7D6DB8] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 transform hover:scale-105"
              >
                <ClipboardDocumentListIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium tracking-wide text-xs sm:text-sm">
                  Plan Catering
                </span>
              </button>
            </div>

            {/* Mobile Plan Catering Button - Only visible on mobile */}
            <button
              onClick={() => setPlannerOpen(true)}
              className="sm:hidden p-2 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300"
            >
              <ClipboardDocumentListIcon className="h-6 w-6" />
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1B1B1B] hover:text-[#9B8FC7] transition-colors duration-300"
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

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#9B8FC7]/20">
            <div className="px-4 sm:px-6 pt-4 pb-6 space-y-2">
              <Link
                href="/"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/menu"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-2 text-[#1B1B1B] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Plan Catering Button in Menu */}
              <div className="pt-4 border-t border-[#9B8FC7]/20">
                <button
                  onClick={() => {
                    setPlannerOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#9B8FC7] to-[#7D6DB8] text-white rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5" />
                  <span className="font-medium tracking-wide">Plan Catering</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Catering Planner Popup */}
      {plannerOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
          <div className="bg-[#1B1B1B] border border-[#9B8FC7]/20 rounded-2xl w-full max-w-6xl h-[95vh] sm:h-[90vh] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#9B8FC7]/20">
              <h2 className="text-lg sm:text-2xl font-light text-[#F1E6D1] tracking-wide">
                Create Your Catering Experience
              </h2>
              <button
                onClick={() => {
                  setPlannerOpen(false);
                  setActiveTab('items');
                }}
                className="text-[#F1E6D1] hover:text-[#9B8FC7] transition-colors"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile/Tablet Tab Navigation */}
            <div className="lg:hidden border-b border-[#9B8FC7]/20">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('items')}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                    activeTab === 'items'
                      ? 'text-[#9B8FC7] border-b-2 border-[#9B8FC7] bg-[#9B8FC7]/10'
                      : 'text-[#F1E6D1]/60 hover:text-[#F1E6D1]'
                  }`}
                >
                  Items
                </button>
                <button
                  onClick={() => setActiveTab('selection')}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors relative ${
                    activeTab === 'selection'
                      ? 'text-[#9B8FC7] border-b-2 border-[#9B8FC7] bg-[#9B8FC7]/10'
                      : 'text-[#F1E6D1]/60 hover:text-[#F1E6D1]'
                  }`}
                >
                  Selection
                  {cateringItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#9B8FC7] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cateringItems.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('form')}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                    activeTab === 'form'
                      ? 'text-[#9B8FC7] border-b-2 border-[#9B8FC7] bg-[#9B8FC7]/10'
                      : 'text-[#F1E6D1]/60 hover:text-[#F1E6D1]'
                  }`}
                >
                  Details
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
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

            {/* Mobile/Tablet Content */}
            <div className="lg:hidden h-full flex flex-col">
              {/* Items Tab */}
              {activeTab === 'items' && (
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
                    Available Items
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-[#9B8FC7]/10 border border-[#9B8FC7]/20 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-[#F1E6D1] font-medium text-sm mb-1">
                              {item.name}
                            </div>
                            <div className="text-[#9B8FC7] text-xs">
                              {item.category}
                            </div>
                          </div>
                          <button
                            onClick={() => addItemMobile(item)}
                            className="ml-3 px-3 py-1 bg-[#9B8FC7] text-white rounded-md text-xs hover:bg-[#9B8FC7]/90 transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Selection Tab */}
              {activeTab === 'selection' && (
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
                    Your Selection
                  </h3>
                  {cateringItems.length === 0 ? (
                    <div className="text-center text-[#F1E6D1]/60 py-12">
                      <PlusIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No items selected yet.</p>
                      <button
                        onClick={() => setActiveTab('items')}
                        className="mt-4 px-4 py-2 bg-[#9B8FC7] text-white rounded-lg text-sm"
                      >
                        Browse Items
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cateringItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 bg-[#9B8FC7]/20 rounded-lg"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="text-[#F1E6D1] font-medium text-sm">
                                {item.name}
                              </div>
                              <div className="text-[#9B8FC7] text-xs">
                                {item.category}
                              </div>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="text-[#F1E6D1] text-sm">Quantity:</label>
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
                              className="w-20 px-3 py-1 bg-black/30 border border-[#9B8FC7]/30 rounded text-[#F1E6D1] text-sm"
                            />
                          </div>
                        </div>
                      ))}
                      <div className="pt-4">
                        <button
                          onClick={() => setActiveTab('form')}
                          className="w-full px-6 py-3 bg-[#9B8FC7] text-white rounded-lg hover:bg-[#9B8FC7]/90 transition-colors font-medium tracking-wide text-sm"
                        >
                          Continue to Event Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Form Tab */}
              {activeTab === 'form' && (
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <h3 className="text-lg font-light text-[#F9F7F4] mb-4 tracking-wide">
                    Event Details
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        rows={4}
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
                    {cateringItems.length === 0 && (
                      <p className="text-center text-[#F1E6D1]/60 text-sm mt-2">
                        Please add items to your selection first
                      </p>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
