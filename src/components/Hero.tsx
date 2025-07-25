
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [logoRevealed, setLogoRevealed] = useState(false);
  const [particlesVisible, setParticlesVisible] = useState(false);

  const heroImages = [
    '/magic-touch-banquet-food.jpg',
    '/elegant-wedding-catering-setup.jpg',
    '/luxury-catering-experience.jpg',
    '/professional-catering-presentation.jpg',
    '/gourmet-catering-display.jpg'
  ];

  useEffect(() => {
    // Epic loading sequence with precise timing
    const timer1 = setTimeout(() => {
      setLogoRevealed(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2800);

    const timer3 = setTimeout(() => {
      setTextVisible(true);
    }, 3200);

    const timer4 = setTimeout(() => {
      setParticlesVisible(true);
    }, 3600);

    // Image carousel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(imageInterval);
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
      <div className="fixed inset-0 bg-gradient-to-b from-[#1B1B1B] via-[#0F0F0F] to-[#1B1B1B] z-[60] flex items-center justify-center overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#9B8FC7]/30 to-[#A8C4A0]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-[#A8C4A0]/20 to-[#9B8FC7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="text-center relative z-10">
          {/* Premium Logo Reveal */}
          <div className="relative mb-12">
            <div className={`w-32 h-32 mx-auto mb-8 rounded-full border-2 border-[#9B8FC7]/30 overflow-hidden relative transition-all duration-1000 ${logoRevealed ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0] via-[#F9F7F4] to-[#F5F3F0] animate-pulse"></div>
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className={`w-full h-full object-contain relative z-10 transition-all duration-1000 delay-300 ${logoRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            </div>

            {/* Elegant loading rings with enhanced animation */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#9B8FC7] border-r-[#9B8FC7]/60 animate-spin"></div>
              <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#A8C4A0] border-l-[#A8C4A0]/60 animate-spin animate-reverse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-8 rounded-full border border-transparent border-t-[#F5F3F0]/80 animate-spin" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </div>

          {/* Sophisticated Loading Text */}
          <div className={`space-y-3 transition-all duration-800 delay-500 ${logoRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-[#9B8FC7] text-sm tracking-[0.4em] uppercase font-light">
              Preparing
            </div>
            <div className="text-[#F9F7F4] text-xl tracking-wider font-extralight">
              Your Culinary
            </div>
            <div className="text-[#A8C4A0] text-2xl tracking-[0.1em] font-light">
              Experience
            </div>
          </div>

          {/* Enhanced Loading Animation */}
          <div className={`flex justify-center space-x-2 mt-8 transition-all duration-800 delay-700 ${logoRevealed ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-3 h-3 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>

          {/* Luxury Progress Bar */}
          <div className={`mt-8 w-64 mx-auto transition-all duration-800 delay-900 ${logoRevealed ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-1 bg-[#F5F3F0]/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] rounded-full animate-[loadProgress_2s_ease-out_forwards]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Enhanced Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/40 via-[#1B1B1B]/60 to-[#1B1B1B]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/30 via-transparent to-[#1B1B1B]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/50 via-transparent to-transparent" />

      {/* Floating Particles Effect */}
      {particlesVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#F5F3F0]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content with Dramatic Entrance */}
      <div className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Elegant Tagline with Staggered Animation */}
          <p className={`tracking-[0.5em] text-[#A8C4A0] text-xs md:text-sm uppercase mb-8 font-light transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Exquisite Culinary Artistry
          </p>

          {/* Hero Title with Enhanced Typography */}
          <div className="mb-10">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extralight leading-tight text-[#F9F7F4] transition-all duration-1200 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Magic Touch
            </h1>
            <span className={`block text-4xl md:text-6xl lg:text-7xl text-[#A8C4A0] font-light tracking-wider mt-4 transition-all duration-1200 delay-900 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Catering
            </span>
          </div>

          {/* Animated Divider */}
          <div className={`w-32 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-10 transition-all duration-1000 delay-1200 ${textVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

          {/* Enhanced Description */}
          <p className={`max-w-3xl mx-auto text-lg md:text-xl text-[#F9F7F4]/90 mb-14 font-light leading-relaxed transition-all duration-1000 delay-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Where culinary excellence meets impeccable service. We transform your most important occasions into extraordinary gastronomic experiences that linger in memory long after the last bite.
          </p>

          {/* Premium Call-to-Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1800 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button className="group px-10 py-5 rounded-full bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-500 font-medium tracking-wider text-sm uppercase transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">Explore Our Artistry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="px-10 py-5 rounded-full border-2 border-[#F9F7F4]/40 text-[#F9F7F4] hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/10 transition-all duration-500 font-light tracking-wider text-sm uppercase transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center">
            <div className="text-[#F9F7F4]/60 text-xs tracking-wider uppercase mb-3 animate-pulse">Scroll to Discover</div>
            <div className="w-px h-12 bg-gradient-to-b from-[#9B8FC7] via-[#A8C4A0] to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="h-20 w-20 flex items-center justify-center border-2 border-[#F9F7F4]/30 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/20 hover:shadow-xl hover:shadow-[#9B8FC7]/30"
        >
          &#8592;
        </button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="h-20 w-20 flex items-center justify-center border-2 border-[#F9F7F4]/30 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/20 hover:shadow-xl hover:shadow-[#9B8FC7]/30"
        >
          &#8594;
        </button>
      </div>

      {/* Premium Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 p-4 rounded-full backdrop-blur-md bg-black/20 border border-[#F9F7F4]/20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentImageIndex 
                  ? 'bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] w-10 shadow-lg shadow-[#9B8FC7]/50' 
                  : 'bg-[#F9F7F4]/40 hover:bg-[#F9F7F4]/70 hover:scale-125'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
