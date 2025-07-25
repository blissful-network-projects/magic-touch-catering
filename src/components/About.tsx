
"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-[#1B1B1B] to-[#2A2A2A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C7A965' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light">Our Story</p>
          <h2 className="text-4xl md:text-6xl font-thin text-[#F5F3F0] mb-6">
            Crafting Culinary
            <span className="block text-[#9B8FC7]">Excellence</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative">
              <img 
                src="/chef-preparing-gourmet-meal.jpg" 
                alt="Chef preparing gourmet meal"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#9B8FC7] to-[#7D6DB8] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">25+</div>
                  <div className="text-xs text-black/80 tracking-wider">YEARS</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div>
              <h3 className="text-2xl font-light text-[#F5F3F0] mb-4">Where Passion Meets Perfection</h3>
              <p className="text-[#F5F3F0]/80 leading-relaxed mb-6">
                For over two decades, Magic Touch Catering has been the premier choice for discerning clients who demand nothing less than extraordinary. Our journey began with a simple philosophy: every event deserves to be a masterpiece.
              </p>
              <p className="text-[#F1E6D1]/80 leading-relaxed">
                From intimate gatherings to grand celebrations, we transform your vision into an unforgettable culinary experience that speaks to the heart and delights the senses.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-[#9B8FC7]/10 rounded-xl border border-[#9B8FC7]/20">
                <div className="text-3xl font-light text-[#9B8FC7] mb-2">500+</div>
                <div className="text-sm text-[#F5F3F0]/70 tracking-wide">Events Catered</div>
              </div>
              <div className="text-center p-6 bg-[#A8C4A0]/10 rounded-xl border border-[#A8C4A0]/20">
                <div className="text-3xl font-light text-[#A8C4A0] mb-2">50+</div>
                <div className="text-sm text-[#F5F3F0]/70 tracking-wide">Menu Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
