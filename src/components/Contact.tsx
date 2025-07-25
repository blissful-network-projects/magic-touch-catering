"use client";

import { useState, useEffect } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      icon: "📞"
    },
    {
      title: "Email",
      details: ["hello@magictouchcatering.com", "events@magictouchcatering.com"],
      icon: "✉️"
    },
    {
      title: "Location",
      details: ["123 Culinary Street", "Gourmet City, GC 12345"],
      icon: "📍"
    },
    {
      title: "Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat-Sun: By Appointment"],
      icon: "🕐"
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-thin text-[#F5F3F0] mb-6">
            Let's Create
            <span className="block text-[#9B8FC7]">Something Amazing</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#F1E6D1]/70 leading-relaxed">
            Ready to elevate your next event? Contact us today to discuss how we can bring your culinary vision to life with our signature touch of excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl font-light text-[#F1E6D1] mb-8">Connect With Us</h3>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-[#C7A965] font-medium mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-[#F1E6D1]/70">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-[#C7A965]/10 to-[#C7A965]/5 rounded-2xl border border-[#C7A965]/20">
              <h4 className="text-[#C7A965] font-medium mb-4">Emergency Catering</h4>
              <p className="text-[#F1E6D1]/70 text-sm leading-relaxed">
                Need last-minute catering? We offer emergency catering services for urgent events. Contact us 24/7 for immediate assistance.
              </p>
              <button className="mt-4 text-[#C7A965] text-sm font-medium hover:text-[#F1E6D1] transition-colors">
                Call Emergency Line: +1 (555) 911-FOOD
              </button>
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
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#C7A965]/30 rounded-xl text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#C7A965]/30 rounded-xl text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors"
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
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#C7A965]/30 rounded-xl text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#C7A965]/30 rounded-xl text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your event and how we can help make it extraordinary..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-[#2A2A2A] border border-[#C7A965]/30 rounded-xl text-[#F1E6D1] placeholder-[#F1E6D1]/50 focus:border-[#C7A965] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#C7A965] to-[#B8A157] text-black rounded-xl hover:shadow-2xl hover:shadow-[#C7A965]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-[1.02]"
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