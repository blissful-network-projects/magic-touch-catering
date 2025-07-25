
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroImages = [
    '/magic-touch-banquet-food.jpg',
    '/elegant-wedding-catering-setup.jpg',
    '/luxury-catering-experience.jpg',
    '/professional-catering-presentation.jpg',
    '/gourmet-catering-display.jpg'
  ];

  useEffect(() => {
    // Epic loading sequence with refined timing
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2200);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 2700);

    // Image carousel with smoother transitions
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0A0B] via-[#1B1B1B] to-[#0F0F10] z-[60] flex items-center justify-center overflow-hidden">
        {/* Ambient background particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#9B8FC7]/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Refined logo with premium presentation */}
          <div className="relative mb-12">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              {/* Elegant outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#C7A965]/30 overflow-hidden backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-[#F5F3F0]/5 to-transparent rounded-full"></div>
              </div>
              
              {/* Logo container */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#F5F3F0] to-[#F1E6D1] flex items-center justify-center overflow-hidden opacity-0 animate-[fadeIn_1.2s_ease-in-out_0.6s_forwards]">
                <img
                  src="/magic-touch-catering-logo.svg"
                  alt="Magic Touch Catering"
                  className="w-3/4 h-3/4 object-contain filter brightness-0"
                />
              </div>

              {/* Sophisticated loading rings */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C7A965] animate-spin opacity-60"></div>
                <div className="absolute inset-3 rounded-full border border-transparent border-t-[#9B8FC7] animate-spin animate-reverse opacity-40" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-6 rounded-full border border-transparent border-t-[#A8C4A0] animate-spin opacity-30" style={{ animationDuration: '4s' }}></div>
              </div>
            </div>
          </div>

          {/* Premium loading text */}
          <div className="space-y-6 opacity-0 animate-[fadeIn_1s_ease-in-out_1.5s_forwards]">
            <div className="text-[#C7A965] text-xs tracking-[0.4em] uppercase font-light mb-2">
              Curating Excellence
            </div>
            <div className="text-[#F5F3F0] text-2xl font-thin tracking-[0.1em] mb-4">
              Your Culinary Experience
            </div>
            <div className="text-[#9B8FC7]/60 text-sm font-light tracking-wide">
              Awaits
            </div>
          </div>

          {/* Refined loading animation */}
          <div className="flex justify-center space-x-2 mt-8 opacity-0 animate-[fadeIn_1s_ease-in-out_1.8s_forwards]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-[#C7A965] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '1.5s' }}
              />
            ))}
          </div>

          {/* Elegant progress line */}
          <div className="mt-12 w-48 h-px bg-[#9B8FC7]/20 mx-auto relative overflow-hidden opacity-0 animate-[fadeIn_1s_ease-in-out_2s_forwards]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C7A965] to-transparent w-1/3 animate-[slideProgress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Sophisticated ambient glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#9B8FC7]/5 via-transparent to-transparent opacity-0 animate-[fadeIn_2s_ease-in-out_1s_forwards]"></div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Enhanced Background Images with Parallax Effect */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 5}px, 0) scale(${index === currentImageIndex ? 1 : 1.05})`
          }}
        />
      ))}

      {/* Sophisticated Multi-Layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-[#1B1B1B]/60 to-[#0A0A0B]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/30 via-transparent to-[#1B1B1B]/30" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0A0A0B]/40" />

      {/* Premium Content with Enhanced Typography */}
      <div className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Refined Tagline */}
          <p className="tracking-[0.5em] text-[#C7A965] text-xs md:text-sm uppercase mb-8 font-light opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards]">
            Exquisite Culinary Artistry
          </p>

          {/* Dramatic Main Heading */}
          <div className="mb-12 opacity-0 animate-[slideUp_1.2s_ease-out_0.8s_forwards]">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin leading-[0.9] mb-4 text-[#F5F3F0] tracking-tight">
              Magic
              <span className="block text-5xl md:text-7xl lg:text-8xl text-[#C7A965] font-extralight tracking-[0.05em] mt-2">
                Touch
              </span>
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl text-[#9B8FC7] font-thin tracking-[0.2em] mt-6 opacity-90">
              CATERING
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center mb-10 opacity-0 animate-[slideUp_1s_ease-out_1.2s_forwards]">
            <div className="w-16 h-px bg-[#C7A965]"></div>
            <div className="w-3 h-3 bg-[#C7A965] rounded-full mx-6 opacity-60"></div>
            <div className="w-16 h-px bg-[#C7A965]"></div>
          </div>

          {/* Premium Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#F5F3F0]/85 mb-14 font-light leading-relaxed tracking-wide opacity-0 animate-[slideUp_1s_ease-out_1.5s_forwards]">
            Where culinary excellence transcends the ordinary. We craft extraordinary gastronomic experiences that transform your most cherished occasions into timeless memories.
          </p>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[slideUp_1s_ease-out_1.8s_forwards]">
            <button className="group px-10 py-5 rounded-full border border-[#C7A965] text-[#F5F3F0] bg-[#C7A965] hover:bg-transparent hover:text-[#C7A965] transition-all duration-700 font-medium tracking-[0.1em] text-sm uppercase relative overflow-hidden">
              <span className="relative z-10">Discover Our Artistry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
            <button className="group px-10 py-5 rounded-full border border-[#F5F3F0]/40 text-[#F5F3F0] hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/5 transition-all duration-700 font-light tracking-[0.1em] text-sm uppercase backdrop-blur-sm">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Refined Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1.2s_ease-out_2.8s_forwards]">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="text-[#F5F3F0]/50 text-xs tracking-[0.2em] uppercase mb-4 group-hover:text-[#C7A965] transition-colors duration-500">
              Explore
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-[#C7A965] via-[#9B8FC7] to-transparent group-hover:from-[#F5F3F0] transition-all duration-500"></div>
            <div className="w-2 h-2 bg-[#C7A965] rounded-full mt-2 group-hover:bg-[#F5F3F0] transition-colors duration-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="h-20 w-20 flex items-center justify-center border border-[#F5F3F0]/20 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-black/10
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#C7A965] hover:text-[#C7A965] hover:bg-[#C7A965]/10 hover:backdrop-blur-xl"
        >
          ←
        </button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="h-20 w-20 flex items-center justify-center border border-[#F5F3F0]/20 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-black/10
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#C7A965] hover:text-[#C7A965] hover:bg-[#C7A965]/10 hover:backdrop-blur-xl"
        >
          →
        </button>
      </div>

      {/* Sophisticated Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 border border-[#F5F3F0]/30 ${
                index === currentImageIndex 
                  ? 'w-12 bg-[#C7A965] border-[#C7A965]' 
                  : 'w-3 bg-transparent hover:bg-[#F5F3F0]/30 hover:border-[#F5F3F0]/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ambient floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#C7A965]/10 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
