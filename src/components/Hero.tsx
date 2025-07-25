
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    '/magic-touch-banquet-food.jpg',
    '/elegant-wedding-catering-setup.jpg',
    '/luxury-catering-experience.jpg',
    '/professional-catering-presentation.jpg',
    '/gourmet-catering-display.jpg'
  ];

  useEffect(() => {
    // Faster, more dramatic loading sequence
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 1200);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 1500);

    // Image carousel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(imageInterval);
    };
  }, []);

  // Parallax and mouse tracking effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#0F0F0F] z-[60] flex items-center justify-center overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 2 === 0 ? '#9B8FC7' : '#A8C4A0',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Enhanced logo animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] p-1 opacity-0 animate-[scaleIn_0.8s_ease-out_0.3s_forwards]">
              <div className="w-full h-full rounded-full bg-[#F5F3F0] flex items-center justify-center overflow-hidden">
                <img
                  src="/magic-touch-catering-logo.svg"
                  alt="Magic Touch Catering"
                  className="w-20 h-20 object-contain opacity-0 animate-[fadeIn_1s_ease-in-out_0.8s_forwards]"
                />
              </div>
            </div>

            {/* Sophisticated loading rings */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#9B8FC7] opacity-60 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#A8C4A0] opacity-40 animate-spin animate-reverse" style={{ animationDuration: '1.5s' }}></div>
              <div className="absolute inset-4 rounded-full border border-transparent border-t-[#9B8FC7] opacity-20 animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
          </div>

          <div className="space-y-3 opacity-0 animate-[slideUp_0.8s_ease-out_1s_forwards]">
            <div className="text-[#9B8FC7] text-sm tracking-[0.4em] uppercase font-light">Crafting Excellence</div>
            <div className="text-[#F5F3F0] text-xl tracking-wider font-light">Your Culinary Experience Awaits</div>
          </div>

          {/* Elegant loading progress */}
          <div className="mt-8 opacity-0 animate-[fadeIn_0.6s_ease-out_1.2s_forwards]">
            <div className="w-48 h-px bg-[#F5F3F0]/20 mx-auto overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] transform -translate-x-full animate-[slideInRight_1.2s_ease-out_forwards]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Dynamic Background with Parallax */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            transform: `translateY(${scrollY * 0.5}px) scale(${index === currentImageIndex ? 1.05 : 1})`,
          }}
        />
      ))}

      {/* Multi-layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-[#1A1A1A]/30" />
      <div 
        className="absolute inset-0 bg-gradient-radial opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(155, 143, 199, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#9B8FC7' : i % 3 === 1 ? '#A8C4A0' : '#F5F3F0',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
              transform: `translateY(${scrollY * (Math.random() * 0.5 + 0.2)}px)`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Content */}
      <div className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-5xl mx-auto">
          <p className="tracking-[0.5em] text-[#A8C4A0] text-sm md:text-base uppercase mb-8 font-light opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards] text-shadow-luxury">
            Exquisite Culinary Artistry
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight leading-none mb-12 text-[#F5F3F0] opacity-0 animate-[slideUp_1.2s_ease-out_0.6s_forwards] text-shadow-luxury">
            <span className="block gradient-text-lavender">Magic Touch</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-[#A8C4A0] font-light tracking-wider mt-4 opacity-0 animate-[slideUp_1s_ease-out_0.9s_forwards]">
              Catering
            </span>
          </h1>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] via-[#A8C4A0] to-transparent mx-auto mb-12 opacity-0 animate-[scaleIn_0.8s_ease-out_1.2s_forwards]"></div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#F5F3F0]/90 mb-16 font-light leading-relaxed opacity-0 animate-[slideUp_1s_ease-out_1.5s_forwards] text-shadow-luxury">
            Where culinary excellence meets impeccable service. We transform your most important occasions into extraordinary gastronomic experiences that linger in memory long after the last bite.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[slideUp_1s_ease-out_1.8s_forwards]">
            <button className="group px-10 py-5 rounded-full border-2 border-[#9B8FC7] text-white bg-[#9B8FC7] hover:bg-transparent hover:text-[#F5F3F0] transition-all duration-700 font-medium tracking-wider text-sm uppercase luxury-hover button-luxury overflow-hidden">
              <span className="relative z-10">Explore Our Artistry</span>
            </button>
            <button className="group px-10 py-5 rounded-full border-2 border-[#A8C4A0]/50 text-[#F5F3F0] hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/10 transition-all duration-700 font-light tracking-wider text-sm uppercase luxury-hover">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
          <div className="flex flex-col items-center">
            <div className="text-[#F5F3F0]/70 text-xs tracking-wider uppercase mb-3 animate-pulse">Discover More</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#9B8FC7] via-[#A8C4A0] to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-[#9B8FC7] to-transparent animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="group h-20 w-20 flex items-center justify-center border-2 border-[#F5F3F0]/20 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/20 luxury-hover"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300">‹</span>
        </button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="group h-20 w-20 flex items-center justify-center border-2 border-[#F5F3F0]/20 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/20 luxury-hover"
        >
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">›</span>
        </button>
      </div>

      {/* Sophisticated Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentImageIndex 
                  ? 'bg-[#9B8FC7] w-12' 
                  : 'bg-[#F5F3F0]/30 hover:bg-[#F5F3F0]/60 w-3'
              }`}
            >
              {index === currentImageIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
