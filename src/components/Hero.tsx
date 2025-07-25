"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/magic-touch-banquet-food.jpg",
    "/elegant-wedding-catering-setup.jpg",
    "/luxury-catering-experience.jpg",
    "/professional-catering-presentation.jpg",
    "/gourmet-catering-display.jpg",
  ];

  useEffect(() => {
    // Refined luxury loading sequence - faster for premium feel
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 1800);

    // Image carousel with elegant timing
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(imageInterval);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1B1B1B] to-[#000000] z-[60] flex items-center justify-center overflow-hidden">
        {/* Ambient background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#9B8FC7]/20 rounded-full animate-pulse" style={{ animationDelay: "0s", animationDuration: "4s" }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#A8C4A0]/30 rounded-full animate-pulse" style={{ animationDelay: "2s", animationDuration: "6s" }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#9B8FC7]/15 rounded-full animate-pulse" style={{ animationDelay: "1s", animationDuration: "5s" }}></div>
        </div>

        <div className="text-center relative">
          {/* Premium loading animation with sophisticated backdrop */}
          <div className="relative">
            {/* Multi-layered luxury backdrop with breathing effect */}
            <div className="absolute inset-0 w-48 h-48 mx-auto -mt-10 rounded-full bg-gradient-to-r from-[#9B8FC7]/20 via-[#A8C4A0]/15 to-[#9B8FC7]/20 blur-3xl animate-pulse" style={{ animationDuration: "3s" }}></div>
            <div className="absolute inset-0 w-32 h-32 mx-auto -mt-4 rounded-full bg-gradient-to-r from-[#A8C4A0]/25 via-[#9B8FC7]/20 to-[#A8C4A0]/25 blur-2xl animate-pulse" style={{ animationDelay: "1.5s", animationDuration: "4s" }}></div>

            {/* Logo container with enhanced visibility */}
            <div className="relative w-32 h-32 mx-auto mb-10 rounded-full border-2 border-[#9B8FC7]/40 overflow-hidden bg-gradient-to-br from-[#9B8FC7]/15 via-[#F9F7F4]/5 to-[#A8C4A0]/15 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
              
              {/* Bright background for logo contrast */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#F9F7F4]/90 via-[#F9F7F4]/95 to-[#F9F7F4]/90 shadow-inner"></div>
              
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="w-full h-full object-contain opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards] p-6 relative z-10 filter brightness-110 contrast-110"
              />
              
              {/* Enhanced inner glow for visibility */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#9B8FC7]/20 to-[#A8C4A0]/20 blur-sm"></div>
            </div>

            {/* Sophisticated orbital rings with different speeds and opacities */}
            <div className="absolute inset-0 w-32 h-32 mx-auto mt-2">
              {/* Outer ring - slow, elegant */}
              <div
                className="absolute inset-0 rounded-full border border-transparent border-t-[#9B8FC7]/60 border-r-[#9B8FC7]/20 animate-spin"
                style={{ animationDuration: "4s", animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)" }}
              ></div>
              
              {/* Inner ring - medium speed, counter-clockwise */}
              <div
                className="absolute inset-4 rounded-full border border-transparent border-t-[#A8C4A0]/70 border-l-[#A8C4A0]/30 animate-spin animate-reverse"
                style={{ animationDuration: "3s", animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)" }}
              ></div>
              
              {/* Center pulse ring */}
              <div
                className="absolute inset-8 rounded-full border border-[#9B8FC7]/40 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>

          {/* Refined text content with better timing */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards]">
            <div className="text-[#A8C4A0] text-xs tracking-[0.5em] uppercase font-light drop-shadow-lg">
              Curating Excellence
            </div>
            <div className="text-white/90 text-lg tracking-wide font-extralight drop-shadow-lg max-w-xs mx-auto leading-relaxed">
              Your Extraordinary Experience Awaits
            </div>
          </div>

          {/* Minimalist progress indicator */}
          <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-in-out_1.5s_forwards]">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9B8FC7]/50 to-transparent"></div>
              <div className="flex space-x-1">
                <div
                  className="w-1 h-1 bg-[#A8C4A0]/80 rounded-full animate-pulse"
                  style={{ animationDelay: "0s", animationDuration: "1.5s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#9B8FC7]/80 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#A8C4A0]/80 rounded-full animate-pulse"
                  style={{ animationDelay: "1s", animationDuration: "1.5s" }}
                ></div>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9B8FC7]/50 to-transparent"></div>
            </div>
            
            {/* Subtle loading text */}
            <div className="text-[#F9F7F4]/40 text-xs tracking-[0.2em] uppercase mt-6 font-light">
              Loading
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Images with Smooth Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Enhanced Multi-layer Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#1B1B1B]/50 to-[#1B1B1B]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/40 via-transparent to-[#1B1B1B]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#9B8FC7]/8 via-transparent to-transparent" />

      {/* Additional text readability overlay */}
      <div className="absolute inset-0 bg-[#000000]/15" />

      {/* Floating luxury elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#9B8FC7]/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-40 right-16 w-1 h-1 bg-[#A8C4A0]/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#9B8FC7]/20 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div
        className={`relative z-20 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Premium Brand Line with Enhanced Visibility */}
          <div className="flex items-center justify-center mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#A8C4A0]/80"></div>
            <p className="mx-6 tracking-[0.5em] text-[#A8C4A0] text-xs uppercase font-medium drop-shadow-lg">
              Exquisite Culinary Artistry
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#A8C4A0]/80"></div>
          </div>

          {/* Dramatic Typography with Enhanced Visibility */}
          <h1 className="relative opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            <span className="block text-4xl md:text-7xl lg:text-8xl heading-primary leading-none mb-2 text-white tracking-tight drop-shadow-2xl">
              Magic Touch
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-[#A8C4A0] via-[#9B8FC7] to-[#A8C4A0] bg-clip-text subheading-luxury tracking-[0.2em] drop-shadow-lg">
              CATERING
            </span>
            {/* Enhanced luxury underline */}
            <div className="w-32 h-px bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] mx-auto mt-6 drop-shadow-md"></div>
          </h1>

          {/* Elevated Description with Better Contrast */}
          <div className="max-w-3xl mx-auto mt-12 mb-16 opacity-0 animate-[slideUp_0.8s_ease-out_0.9s_forwards]">
            <p className="text-lg md:text-xl text-white/95 body-luxury leading-relaxed tracking-wide drop-shadow-lg">
              Where culinary mastery transcends expectation. We orchestrate
              <span className="text-[#A8C4A0] subheading-elegant drop-shadow-md">
                {" "}
                extraordinary gastronomic symphonies{" "}
              </span>
              that transform your most treasured moments into timeless memories.
            </p>
          </div>

          {/* Premium Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards]">
            <button className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white body-luxury font-medium tracking-[0.1em] text-sm uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#9B8FC7]/25 hover:scale-105">
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group px-10 py-4 rounded-full border border-[#F9F7F4]/40 text-[#F9F7F4] hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10 transition-all duration-500 body-luxury font-light tracking-[0.1em] text-sm uppercase backdrop-blur-sm">
              <span className="group-hover:tracking-[0.15em] transition-all duration-300">
                Discover Excellence
              </span>
            </button>
          </div>

          {/* Elegant Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-16 opacity-0 animate-[slideUp_0.8s_ease-out_1.5s_forwards]">
            <div className="text-center">
              <div className="text-2xl font-light text-[#9B8FC7] mb-1">
                500+
              </div>
              <div className="text-xs text-[#F9F7F4]/60 tracking-wider uppercase">
                Premium Events
              </div>
            </div>
            <div className="w-px"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#A8C4A0] mb-1">20+</div>
              <div className="text-xs text-[#F9F7F4]/60 tracking-wider uppercase">
                Years Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Premium Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="text-[#F9F7F4]/50 text-xs tracking-[0.3em] uppercase mb-3 group-hover:text-[#9B8FC7] transition-colors duration-300">
              Explore
            </div>
            <div className="relative">
              <div className="w-px h-10 bg-gradient-to-b from-[#9B8FC7] via-[#A8C4A0] to-transparent group-hover:from-[#A8C4A0] group-hover:via-[#9B8FC7] transition-all duration-500"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#9B8FC7] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Enhanced Visibility */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevImage}
          className="h-48 w-48 flex items-center justify-center border-2 border-white/40 rounded-full 
          text-white text-6xl bg-black/25 shadow-2xl
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/15"
        >
          &#8592;
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextImage}
          className="h-48 w-48 flex items-center justify-center border-2 border-white/40 rounded-full 
          text-white text-6xl bg-black/25 shadow-2xl
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/15"
        >
          &#8594;
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-[#9B8FC7] w-8"
                  : "bg-[#F9F7F4]/30 hover:bg-[#F9F7F4]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
