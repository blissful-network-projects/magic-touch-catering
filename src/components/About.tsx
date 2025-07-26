"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Statistics with animation
  const [stats, setStats] = useState([
    { value: 0, target: 25, label: "Years of Excellence", suffix: "+" },
    { value: 0, target: 500, label: "Events Catered", suffix: "+" },
    { value: 0, target: 100, label: "Client Satisfaction", suffix: "%" },
    { value: 0, target: 50, label: "Awards Won", suffix: "+" },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Start counter animations
          animateStats();
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    // Parallax scroll effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        setScrollY(scrolled * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animateStats = () => {
    setStats(prevStats => 
      prevStats.map(stat => ({
        ...stat,
        value: 0
      }))
    );

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(stat.target * progress)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const milestones = [
    { year: "2000", event: "Magic Touch Catering Founded", description: "Started with a passion for culinary excellence" },
    { year: "2005", event: "First Major Corporate Contract", description: "Expanded to serve Fortune 500 companies" },
    { year: "2010", event: "Award-Winning Recognition", description: "Received Best Catering Service award" },
    { year: "2015", event: "Luxury Wedding Specialization", description: "Became Phoenix's premier wedding caterer" },
    { year: "2020", event: "Sustainable Practices Initiative", description: "Committed to eco-friendly operations" },
    { year: "2025", event: "25 Years of Excellence", description: "Celebrating a quarter-century of service" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 bg-gradient-to-b from-[#2A2A2A] to-[#1B1B1B] overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#9B8FC7]/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 right-20 w-48 h-48 bg-[#A8C4A0]/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9B8FC7]/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-[#A8C4A0] text-sm tracking-[0.3em] uppercase mb-4 font-light relative">
            Our Story
            <span className="absolute -top-2 -right-4 text-[#9B8FC7]/30 text-2xl">✨</span>
          </p>
          <h2 className="text-4xl md:text-6xl heading-primary text-[#F5F3F0] mb-6 relative">
            Crafting Culinary
            <span className="block text-transparent bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] bg-clip-text animate-pulse">
              Excellence
            </span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#F5F3F0]/70 body-luxury">
            Transforming ordinary events into extraordinary culinary experiences since 2000
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section with Enhanced Effects */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9B8FC7]/20 to-[#A8C4A0]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Image
                src="/chef-preparing-gourmet-meal.jpg"
                alt="Master chef preparing gourmet meal"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl shadow-black/40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#9B8FC7] to-[#A8C4A0] p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">25+</div>
                  <div className="text-sm text-black/80 tracking-wider">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl md:text-3xl subheading-elegant text-[#A8C4A0] mb-6 relative">
              Where Passion Meets Perfection
              <span className="absolute -top-3 -right-8 text-[#9B8FC7]/30 text-xl">🍽️</span>
            </h3>
            <div className="space-y-6">
              <p className="text-[#F5F3F0]/80 body-luxury leading-relaxed group hover:text-[#F5F3F0] transition-colors duration-300">
                For over two decades, Magic Touch Catering has been the premier
                choice for discerning clients who demand nothing less than
                extraordinary. Our journey began with a simple philosophy: every
                event deserves to be a masterpiece.
              </p>

              <p className="text-[#F5F3F0]/80 body-luxury leading-relaxed group hover:text-[#F5F3F0] transition-colors duration-300">
                From intimate gatherings to grand celebrations, we transform your
                vision into reality with uncompromising attention to detail,
                innovative culinary artistry, and flawless execution that exceeds
                expectations.
              </p>
            </div>

            {/* Enhanced Feature List */}
            <div className="mt-8 space-y-4">
              {[
                { 
                  icon: (
                    <svg className="w-4 h-4 text-[#9B8FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), 
                  text: "Award-winning culinary team" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-[#A8C4A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ), 
                  text: "Locally sourced, premium ingredients" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-[#9B8FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ), 
                  text: "Personalized menu design" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-[#A8C4A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ), 
                  text: "Full-service event coordination" 
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 group hover:translate-x-2 transition-all duration-300 ${
                    visible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#9B8FC7]/20 to-[#A8C4A0]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[#F5F3F0]/90 body-luxury group-hover:text-[#A8C4A0] transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Statistics Section */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#9B8FC7]/10 to-[#A8C4A0]/10 rounded-2xl p-6 border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-[#A8C4A0] mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[#F5F3F0]/70 text-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className={`relative transition-all duration-1000 delay-900 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Magical speckles around the title */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#9B8FC7]/40 rounded-full animate-pulse" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
            <div className="absolute top-6 right-1/3 w-1.5 h-1.5 bg-[#A8C4A0]/30 rounded-full animate-pulse" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
            <div className="absolute top-2 left-2/3 w-0.5 h-0.5 bg-[#9B8FC7]/50 rounded-full animate-pulse" style={{ animationDelay: "2s", animationDuration: "5s" }}></div>
            <div className="absolute top-8 left-1/6 w-1 h-1 bg-[#A8C4A0]/25 rounded-full animate-pulse" style={{ animationDelay: "2.5s", animationDuration: "3.5s" }}></div>
            <div className="absolute top-4 right-1/4 w-0.5 h-0.5 bg-[#9B8FC7]/35 rounded-full animate-pulse" style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}></div>
            <div className="absolute top-10 right-1/6 w-1.5 h-1.5 bg-[#A8C4A0]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "6s" }}></div>
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#9B8FC7]/30 rounded-full animate-pulse" style={{ animationDelay: "3s", animationDuration: "4s" }}></div>
            <div className="absolute top-1/2 right-2/5 w-0.5 h-0.5 bg-[#A8C4A0]/40 rounded-full animate-pulse" style={{ animationDelay: "1.2s", animationDuration: "3.8s" }}></div>
            <div className="absolute bottom-20 left-1/5 w-1.5 h-1.5 bg-[#9B8FC7]/25 rounded-full animate-pulse" style={{ animationDelay: "2.8s", animationDuration: "5.2s" }}></div>
            <div className="absolute bottom-32 right-1/3 w-0.5 h-0.5 bg-[#A8C4A0]/35 rounded-full animate-pulse" style={{ animationDelay: "0.8s", animationDuration: "4.3s" }}></div>
          </div>
          
          <h3 className="text-2xl md:text-3xl subheading-elegant text-[#A8C4A0] text-center mb-12 relative">
            Our Journey of Excellence
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#9B8FC7] to-[#A8C4A0] rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#9B8FC7] to-[#A8C4A0] rounded-full border-4 border-[#1B1B1B] z-10"></div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] rounded-xl p-6 border border-[#9B8FC7]/20 hover:border-[#9B8FC7]/40 transition-all duration-300 group hover:scale-105">
                      <div className="text-[#A8C4A0] font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-[#F5F3F0] font-medium mb-2">{milestone.event}</div>
                      <div className="text-[#F5F3F0]/70 text-sm">{milestone.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="bg-gradient-to-r from-[#9B8FC7]/10 to-[#A8C4A0]/10 rounded-2xl p-8 border border-[#9B8FC7]/20">
            <h4 className="text-xl md:text-2xl text-[#F5F3F0] mb-4">Ready to Create Something Extraordinary?</h4>
            <p className="text-[#F5F3F0]/70 mb-6 max-w-2xl mx-auto">
              Let us bring our passion for culinary excellence to your next event. 
              Experience the Magic Touch difference.
            </p>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openCateringPlanner'));
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-[#1A1A1A] rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
            >
              Start Planning Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}