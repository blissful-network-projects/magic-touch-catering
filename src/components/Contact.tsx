"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('There was an error submitting your message. Please try again or call us directly.');
    }
  };

  const contactInfo = [
    {
      title: "Phone",
      details: ["Contact for booking", "Call for consultation"],
      icon: "📞"
    },
    {
      title: "Email",
      details: ["info@magictouchcatering.com", "bookings@magictouchcatering.com"],
      icon: "✉️"
    },
    {
      title: "Location",
      details: ["9343 E Shea Blvd B-135", "Scottsdale, AZ 85260"],
      icon: "📍"
    },
    {
      title: "Hours",
      details: ["Currently Closed", "Opens 9 AM Fri"],
      icon: "🕐"
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#1B1B1B] overflow-hidden">
      {/* Magical speckles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/5 w-1 h-1 bg-[#9B8FC7]/35 rounded-full animate-pulse" style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}></div>
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-[#A8C4A0]/25 rounded-full animate-pulse" style={{ animationDelay: "1.3s", animationDuration: "4.1s" }}></div>
        <div className="absolute top-12 left-3/4 w-0.5 h-0.5 bg-[#9B8FC7]/45 rounded-full animate-pulse" style={{ animationDelay: "2.1s", animationDuration: "5.3s" }}></div>
        <div className="absolute top-56 left-1/8 w-1 h-1 bg-[#A8C4A0]/30 rounded-full animate-pulse" style={{ animationDelay: "2.7s", animationDuration: "3.7s" }}></div>
        <div className="absolute top-36 right-1/6 w-0.5 h-0.5 bg-[#9B8FC7]/40 rounded-full animate-pulse" style={{ animationDelay: "1.7s", animationDuration: "4.7s" }}></div>
        <div className="absolute top-72 right-1/8 w-1.5 h-1.5 bg-[#A8C4A0]/22 rounded-full animate-pulse" style={{ animationDelay: "0.7s", animationDuration: "6.2s" }}></div>
        <div className="absolute top-1/2 left-2/5 w-1 h-1 bg-[#9B8FC7]/32 rounded-full animate-pulse" style={{ animationDelay: "3.2s", animationDuration: "4.2s" }}></div>
        <div className="absolute bottom-40 left-1/3 w-0.5 h-0.5 bg-[#A8C4A0]/38 rounded-full animate-pulse" style={{ animationDelay: "1.4s", animationDuration: "3.9s" }}></div>
        <div className="absolute bottom-24 right-2/5 w-1.5 h-1.5 bg-[#9B8FC7]/28 rounded-full animate-pulse" style={{ animationDelay: "2.9s", animationDuration: "5.1s" }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6">
            Let&apos;s Create
            <span className="block text-[#9B8FC7]">Something Amazing</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#F1E6D1]/70 body-luxury">
            Ready to elevate your next event? Contact us today to discuss how we can bring your culinary vision to life with our signature touch of excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl heading-secondary text-[#F1E6D1] mb-8">Connect With Us</h3>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-[#A8C4A0] font-medium mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-[#F5F3F0]/70">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#9B8FC7]/30 rounded-xl text-[#F5F3F0] placeholder-[#F5F3F0]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#9B8FC7]/30 rounded-xl text-[#F5F3F0] placeholder-[#F5F3F0]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#9B8FC7]/30 rounded-xl text-[#F5F3F0] placeholder-[#F5F3F0]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#9B8FC7]/30 rounded-xl text-[#F5F3F0] placeholder-[#F5F3F0]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your event and how we can help make it extraordinary..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#9B8FC7]/30 rounded-xl text-[#F5F3F0] placeholder-[#F5F3F0]/50 focus:border-[#9B8FC7] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-[#1A1A1A] rounded-xl hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}